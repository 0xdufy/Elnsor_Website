import { chromium } from 'file:///C:/Users/Adham/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { once } from 'node:events';

const root = resolve(import.meta.dirname, '..');
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relativePath = pathname.endsWith('/') ? `${pathname}index.html` : pathname;
    const filePath = resolve(root, `.${relativePath}`);
    if (!filePath.startsWith(`${root}${sep}`)) throw new Error('Invalid path');

    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(await readFile(filePath));
  } catch {
    if (!response.headersSent) {
      response.writeHead(404);
      response.end('Not found');
    }
  }
});
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const port = server.address().port;

const paths = [
  'index.html',
  'about.html',
  'products.html',
  'services.html',
  'contact.html',
  'en/index.html',
  'en/about.html',
  'en/products.html',
  'en/services.html',
  'en/contact.html',
];
const viewports = [
  [1440, 900],
  [1024, 768],
  [768, 1024],
  [390, 844],
];
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});
const failures = [];

try {
  for (const path of paths) {
    for (const [width, height] of viewports) {
      const page = await browser.newPage({ viewport: { width, height } });
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      const response = await page.goto(`http://127.0.0.1:${port}/${path}`, {
        waitUntil: 'domcontentloaded',
      });
      const metrics = await page.evaluate(() => ({
        h1Count: document.querySelectorAll('h1').length,
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      }));
      if (!response?.ok() || metrics.h1Count !== 1 || metrics.overflow || errors.length)
        failures.push({ path, width, height, metrics, errors });
      await page.close();
    }
  }

  for (const prefix of ['', 'en/']) {
    const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
    await page.goto(`http://127.0.0.1:${port}/${prefix}contact.html`, {
      waitUntil: 'domcontentloaded',
    });
    await page.evaluate(() => {
      window.open = (url) => {
        window.quoteUrl = url;
      };
    });
    await page.fill('#name', prefix ? 'Test Buyer' : 'عميل اختبار');
    await page.selectOption('#client', { index: 1 });
    await page.selectOption('#product', { index: 1 });
    await page.fill('#governorate', prefix ? 'Cairo' : 'القاهرة');
    await page.click('button[type="submit"]');
    const quoteUrl = await page.evaluate(() => window.quoteUrl);
    if (!quoteUrl?.startsWith('https://wa.me/201022232052?text='))
      failures.push({ path: `${prefix}contact.html`, test: 'quote-url', quoteUrl });
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}

console.log(
  JSON.stringify(
    { checked: paths.length * viewports.length + 2, failures, passed: !failures.length },
    null,
    2
  )
);
if (failures.length) process.exitCode = 1;
