import { chromium } from 'file:///C:/Users/Adham/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { mkdir } from 'node:fs/promises';

const pages = [
  { locale: 'ar', url: 'http://127.0.0.1:4173/index.html' },
  { locale: 'en', url: 'http://127.0.0.1:4173/en/index.html' }
];
const viewports = [
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '390x844', width: 390, height: 844 }
];

await mkdir('tests/screenshots', { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
const results = [];

for (const pageInfo of pages) {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const consoleErrors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => consoleErrors.push(error.message));
    await page.goto(pageInfo.url, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(320, window.innerHeight * .75)) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }
      window.scrollTo(0, 0);
      await new Promise((resolve) => setTimeout(resolve, 100));
    });
    await page.screenshot({ path: `tests/screenshots/home-${pageInfo.locale}-${viewport.name}.png`, fullPage: true });
    const metrics = await page.evaluate(() => ({
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1: document.querySelector('h1')?.textContent?.trim(),
      menuVisible: getComputedStyle(document.querySelector('[data-menu-toggle]')).display !== 'none'
    }));
    results.push({ ...pageInfo, viewport: viewport.name, ...metrics, overflow: metrics.scrollWidth > metrics.clientWidth, consoleErrors });
    await page.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
