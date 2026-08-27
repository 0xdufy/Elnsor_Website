(() => {
  const g = document.querySelector('[data-products-grid]');
  if (!g) return;
  const ar = document.documentElement.lang === 'ar',
    base = ar ? '' : '../',
    t = ar
      ? { raw: 'خامات أعلاف', finished: 'أعلاف جاهزة', cta: 'اطلب سعر اليوم' }
      : { raw: 'Feed Raw Materials', finished: 'Finished Feed', cta: "Ask for Today's Price" };
  const card = (p) => {
    const q = encodeURIComponent(
      ar
        ? `السلام عليكم، أريد الاستفسار عن سعر وتوفر ${p.name.ar}.\nالكمية المطلوبة: \nمكان التسليم: `
        : `Hello, I would like to ask about the current price and availability of ${p.name.en}.\nRequested quantity: \nDelivery location: `
    );
    return `<article class="product-card" data-category="${p.category}"><div class="product-image"><img loading="lazy" src="${base + p.image}" alt="${ar ? p.name.ar : p.name.en}" width="800" height="600"></div><div class="product-content"><span class="product-category">${t[p.category]}</span><h3>${ar ? p.name.ar : p.name.en}</h3><p>${ar ? p.description.ar : p.description.en}</p><a class="text-link" href="https://wa.me/201022232052?text=${q}" target="_blank" rel="noopener">${t.cta}</a></div></article>`;
  };
  g.innerHTML = window.ALNESOUR_PRODUCTS.filter((product) => product.enabled !== false)
    .map(card)
    .join('');
  document.querySelectorAll('[data-filter]').forEach((b) =>
    b.addEventListener('click', () => {
      document
        .querySelectorAll('[data-filter]')
        .forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      const f = b.dataset.filter;
      g.querySelectorAll('.product-card').forEach(
        (c) => (c.hidden = f !== 'all' && c.dataset.category !== f)
      );
    })
  );
})();
