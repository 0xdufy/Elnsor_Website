import { chromium } from 'file:///C:/Users/Adham/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const base = 'http://127.0.0.1:4173/';
const paths = [
  'index.html', 'about.html', 'products.html', 'services.html', 'contact.html',
  'en/index.html', 'en/about.html', 'en/products.html', 'en/services.html', 'en/contact.html'
];
const viewports = [
  { width: 1440, height: 900 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 }
];
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const failures = [];
const summary = [];

for (const path of paths) {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    const metrics = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1Count: document.querySelectorAll('h1').length,
      title: document.title,
      lang: document.documentElement.lang,
      dir: document.documentElement.dir
    }));
    const ok = response?.ok() && !metrics.overflow && metrics.h1Count === 1 && errors.length === 0;
    if (!ok) failures.push({ path, viewport, status: response?.status(), metrics, errors });
    summary.push({ path, width: viewport.width, ok });
    await page.close();
  }
}

for (const locale of ['ar', 'en']) {
  const prefix = locale === 'ar' ? '' : 'en/';
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(base + prefix + 'index.html', { waitUntil: 'domcontentloaded' });
  await page.click('[data-menu-toggle]');
  const menuOpen = await page.evaluate(() => document.body.classList.contains('nav-open') && document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded') === 'true');
  if (!menuOpen) failures.push({ locale, test: 'mobile-menu' });
  await page.close();

  const products = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await products.goto(base + prefix + 'products.html', { waitUntil: 'networkidle' });
  const filterCount = await products.locator('[data-filter]').count();
  if (filterCount !== 2) failures.push({ locale, test: 'product-filter-count', filterCount });
  const scale = await products.evaluate(() => {
    const grid = document.getElementById('products-grid');
    const source = grid.querySelector('.product-card');
    for (let i = 2; i < 13; i += 1) {
      const clone = source.cloneNode(true);
      clone.querySelector('h2').textContent = document.documentElement.lang === 'ar' ? `منتج تجريبي طويل الاسم ${i + 1}` : `Development Grid Product ${i + 1}`;
      grid.append(clone);
    }
    const gridRect = grid.getBoundingClientRect();
    const cards = [...grid.children].map((card) => card.getBoundingClientRect());
    return {
      count: cards.length,
      contained: cards.every((card) => card.left >= gridRect.left - .5 && card.right <= gridRect.right + .5 && card.width > 240),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    };
  });
  if (scale.count !== 13 || !scale.contained || scale.scrollWidth > scale.clientWidth) failures.push({ locale, test: '13-card-scale', scale });
  await products.close();

  const contact = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  await contact.goto(base + prefix + 'contact.html', { waitUntil: 'domcontentloaded' });
  await contact.evaluate(() => { window.open = (url) => { window.__openedQuoteUrl = url; }; });
  await contact.fill('#fullName', locale === 'ar' ? 'عميل اختبار' : 'Test Buyer');
  await contact.fill('#phone', '01000000000');
  await contact.selectOption('#clientType', 'trader');
  await contact.selectOption('#product', 'soybean-hulls');
  await contact.fill('#delivery', locale === 'ar' ? 'موقع اختبار' : 'Test Location');
  await contact.click('button[type="submit"]');
  const quoteUrl = await contact.evaluate(() => window.__openedQuoteUrl || '');
  const decoded = decodeURIComponent(quoteUrl);
  if (!quoteUrl.startsWith('https://wa.me/201022232052?text=') || !decoded.includes('Test Buyer') && !decoded.includes('عميل اختبار')) failures.push({ locale, test: 'quote-url', quoteUrl });
  await contact.close();
}

await browser.close();
console.log(JSON.stringify({ checkedPages: summary.length, failures, passed: failures.length === 0 }, null, 2));
if (failures.length) process.exitCode = 1;
