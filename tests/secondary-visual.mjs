import { chromium } from 'file:///C:/Users/Adham/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const checks = [
  ['products-ar-1440.png', 'http://127.0.0.1:4173/products.html', { width: 1440, height: 900 }],
  ['contact-ar-390.png', 'http://127.0.0.1:4173/contact.html', { width: 390, height: 844 }],
  ['services-en-1440.png', 'http://127.0.0.1:4173/en/services.html', { width: 1440, height: 900 }],
  ['about-en-390.png', 'http://127.0.0.1:4173/en/about.html', { width: 390, height: 844 }]
];
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
for (const [name, url, viewport] of checks) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `tests/screenshots/${name}`, fullPage: true });
  await page.close();
}
await browser.close();
console.log('secondary visual screenshots: 4');
