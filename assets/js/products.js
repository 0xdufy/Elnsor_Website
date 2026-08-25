(() => {
  const grid = document.getElementById('products-grid');
  const filters = document.getElementById('product-filters');
  const products = window.ALNESOUR_PRODUCTS;
  if (!grid || !filters || !Array.isArray(products)) return;

  const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
  const assetRoot = document.body.dataset.assetRoot || '';
  const text = lang === 'ar'
    ? { all: 'الكل', raw: 'خامات الأعلاف', category: 'خامات الأعلاف', cta: 'اسأل عن سعر اليوم', confirm: 'الاسم الإنجليزي التجاري لمنتج «زيت منزوع» يحتاج إلى تأكيد قبل الإطلاق.' }
    : { all: 'All', raw: 'Feed Raw Materials', category: 'Feed Raw Materials', cta: "Ask for Today's Price", confirm: 'The English commercial name “Degummed Soybean Oil” requires owner confirmation before launch.' };

  const categories = [...new Set(products.map((product) => product.category))];

  const render = (filter = 'all') => {
    const visible = filter === 'all' ? products : products.filter((product) => product.category === filter);
    grid.innerHTML = visible.map((product) => {
      const message = lang === 'ar'
        ? `السلام عليكم، أريد الاستفسار عن سعر وتوفر ${product.name.ar}.\nالكمية المطلوبة: \nمكان التسليم: `
        : `Hello, I would like to ask about the current price and availability of ${product.name.en}.\nRequested quantity: \nDelivery location: `;
      return `<article class="product-card reveal is-visible">
        <div class="product-image"><img src="${assetRoot}${product.image}" width="900" height="1125" loading="lazy" alt="${product.alt[lang]}"></div>
        <div class="product-content">
          <span class="product-category">${text.category}</span>
          <h2 dir="auto">${product.name[lang]}</h2>
          <p>${product.description[lang]}</p>
          ${product.needsEnglishNameConfirmation ? `<p class="confirmation-note">${text.confirm}</p>` : ''}
          <a class="btn btn--outline" href="https://wa.me/201022232052?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">${text.cta}</a>
        </div>
      </article>`;
    }).join('');
  };

  const filterItems = [{ id: 'all', label: text.all }];
  if (categories.includes('raw-material')) filterItems.push({ id: 'raw-material', label: text.raw });

  filters.innerHTML = filterItems.map((item, index) => `<button class="filter-button" type="button" data-filter="${item.id}" aria-pressed="${index === 0}">${item.label}</button>`).join('');
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('[data-filter]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    render(button.dataset.filter);
  });

  render();
})();
