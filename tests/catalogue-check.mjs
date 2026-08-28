import { chromium } from 'file:///C:/Users/Adham/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { once } from 'node:events';
import { extname, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
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
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});
const failures = [];
const baseUrl = `http://127.0.0.1:${port}`;

const expect = (condition, message, details = {}) => {
  if (!condition) failures.push({ message, ...details });
};

try {
  for (const path of ['/products.html', '/en/products.html']) {
    const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
    const result = await page.evaluate(() => {
      const catalogue = window.ALNESOUR_CATALOG;
      const validation = window.ALNESOUR_VALIDATE_CATALOG(catalogue);
      const cards = [...document.querySelectorAll('[data-products-grid] [data-product-id]')];
      const ids = cards.map((card) => card.dataset.productId);
      const soybeanVariants = [
        ...document.querySelectorAll('[data-family-id="soybean-hulls"] [data-product-id]'),
      ];
      const internalText = document.body.textContent.includes('temporary');
      const clone = structuredClone(catalogue);
      clone.products.push({
        ...clone.products[0],
        id: 'disabled-test-product',
        enabled: false,
        sortOrder: 90,
      });
      const fixtureValidation = window.ALNESOUR_VALIDATE_CATALOG(clone);

      window.ALNESOUR_CATALOG = clone;
      return {
        schemaVersion: catalogue.schemaVersion,
        validation,
        categoryIds: Object.values(catalogue.categories).map((category) => category.id),
        productIds: catalogue.products.map((product) => product.id),
        productCount: cards.length,
        ids,
        rawProductCount: cards.filter((card) => card.dataset.category === 'raw').length,
        finishedProductCount: cards.filter((card) => card.dataset.category === 'finished').length,
        soybeanVariantIds: soybeanVariants.map((card) => card.dataset.productId),
        soybeanVariantQuoteCount: soybeanVariants.filter((card) => card.querySelector('.text-link'))
          .length,
        categoryNavigationIsButtons: [...document.querySelectorAll('[data-filter]')].every(
          (control) => control.tagName === 'BUTTON'
        ),
        internalText,
        favaImageCount: document.querySelectorAll('[data-product-id="fava-bean-hulls"] img').length,
        oilNameStatus: catalogue.products.find((product) => product.id === 'oil-product').internal
          .englishNameStatus,
        fixtureValidation,
      };
    });
    await page.addScriptTag({ url: `${baseUrl}/assets/js/products.js?disabled-fixture` });
    const disabledFixtureCount = await page
      .locator('[data-product-id="disabled-test-product"]')
      .count();
    expect(result.schemaVersion === 1, 'schema version is 1', { path, result });
    expect(result.validation.length === 0, 'production catalogue validates', { path, result });
    expect(
      new Set(result.categoryIds).size === result.categoryIds.length,
      'category IDs are unique',
      {
        path,
        result,
      }
    );
    expect(new Set(result.productIds).size === result.productIds.length, 'product IDs are unique', {
      path,
      result,
    });
    expect(result.productCount === 8, 'catalogue renders eight individual public products', {
      path,
      result,
    });
    expect(result.rawProductCount === 5, 'raw section represents five public products', {
      path,
      result,
    });
    expect(result.finishedProductCount === 3, 'finished section represents three public products', {
      path,
      result,
    });
    if (path === '/products.html') {
      expect(
        result.soybeanVariantIds.join(',') ===
          'soybean-hulls-fine,soybean-hulls-medium,soybean-hulls-coarse',
        'soybean family contains exactly the three ordered public variants',
        { path, result }
      );
      expect(
        result.soybeanVariantQuoteCount === 3,
        'every soybean variant remains independently quotable',
        {
          path,
          result,
        }
      );
    }
    expect(result.categoryNavigationIsButtons, 'category navigation uses accessible buttons', {
      path,
      result,
    });
    expect(disabledFixtureCount === 0, 'disabled fixture does not render', {
      path,
      disabledFixtureCount,
    });
    expect(result.favaImageCount === 0, 'missing image renders without a substitute', {
      path,
      result,
    });
    expect(result.oilNameStatus === 'temporary', 'oil English name remains internally temporary', {
      path,
      result,
    });
    expect(!result.internalText, 'internal metadata does not render publicly', { path, result });
    expect(result.fixtureValidation.length === 0, 'disabled fixture remains valid catalogue data', {
      path,
      result,
    });

    const malformed = await page.evaluate(() => {
      const catalogue = structuredClone(window.ALNESOUR_CATALOG);
      catalogue.products[0].id = catalogue.products[1].id;
      catalogue.products[2].categoryId = 'unknown-category';
      catalogue.products[3].familyId = 'unknown-family';
      catalogue.products[4].availability = 'in-stock';
      return window.ALNESOUR_VALIDATE_CATALOG(catalogue);
    });
    expect(
      malformed.some((issue) => issue.startsWith('duplicate-product-id:')),
      'duplicate product IDs are detected',
      { path, malformed }
    );
    expect(
      malformed.some((issue) => issue.startsWith('unknown-product-category:')),
      'broken category references are detected',
      { path, malformed }
    );
    expect(
      malformed.some((issue) => issue.startsWith('unknown-product-family:')),
      'broken family references are detected',
      { path, malformed }
    );
    expect(
      malformed.some((issue) => issue.startsWith('invalid-product-availability:')),
      'invalid availability values are detected',
      { path, malformed }
    );

    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.click('[data-filter="raw"]');
    const rawFilter = await page
      .locator('[data-products-grid] .product-card:not([hidden])')
      .count();
    await page.click('[data-filter="finished"]');
    const finishedFilter = await page
      .locator('[data-products-grid] .product-card:not([hidden])')
      .count();
    expect(rawFilter === 5, 'raw category filter works', { path, rawFilter });
    expect(finishedFilter === 3, 'finished category filter works', { path, finishedFilter });

    const quote = await page
      .locator('[data-product-id="soybean-hulls-fine"] .text-link')
      .getAttribute('href');
    const decodedQuote = decodeURIComponent(quote || '');
    expect(
      decodedQuote.includes(path.startsWith('/en/') ? 'Fine Soybean Hulls' : 'قشر صويا ناعم'),
      'product quote has a human-readable localized name',
      { path, quote }
    );
    await page.close();
  }

  for (const path of ['/index.html', '/en/index.html']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
    const homepage = await page.evaluate(() => ({
      individualSoybeanCards: document.querySelectorAll('[data-product-id^="soybean-hulls-"]')
        .length,
      soybeanFamily: document.querySelector('[data-family-id="soybean-hulls"]')?.dataset.productIds,
      finishedFamily: document.querySelector('[data-family-id="finished-feed"]')?.dataset
        .productIds,
      quote: document.querySelector('[data-family-id="soybean-hulls"] .text-link')?.href,
    }));
    expect(homepage.individualSoybeanCards === 0, 'homepage does not duplicate soybean variants', {
      path,
      homepage,
    });
    expect(
      homepage.soybeanFamily === 'soybean-hulls-fine,soybean-hulls-medium,soybean-hulls-coarse',
      'homepage groups all soybean variants',
      { path, homepage }
    );
    expect(Boolean(homepage.finishedFamily), 'homepage supports grouped finished feed', {
      path,
      homepage,
    });
    expect(
      Boolean(homepage.quote?.includes('https://wa.me/201022232052?text=')),
      'family quote is encoded',
      {
        path,
        homepage,
      }
    );
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}

console.log(JSON.stringify({ passed: failures.length === 0, failures }, null, 2));
if (failures.length) process.exitCode = 1;
