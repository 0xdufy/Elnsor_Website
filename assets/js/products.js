(() => {
  const grid = document.querySelector('[data-products-grid]');
  if (!grid || !window.ALNESOUR_PRODUCTS) return;

  const isArabic = document.documentElement.lang === 'ar';
  const basePath = isArabic ? '' : '../';
  const labels = isArabic
    ? {
        raw: 'خامات أعلاف',
        finished: 'أعلاف جاهزة',
        cta: 'اطلب سعر اليوم',
        availability: 'اسأل عن السعر والتوفر',
        soybeanFamily: 'قشر الصويا',
        soybeanCopy: 'ناعم ووسط وخشن وفق احتياجات الطلب والتوافر للكميات التجارية.',
        finishedFamily: 'الأعلاف الجاهزة',
        finishedCopy: 'أعلاف مُصنّعة للمواشي والبط والغنم حسب نطاق المنتج والتوافر.',
      }
    : {
        raw: 'Feed Raw Materials',
        finished: 'Finished Feed',
        cta: "Ask for Today's Price",
        availability: 'Ask about price and availability',
        soybeanFamily: 'Soybean Hulls',
        soybeanCopy: 'Fine, medium, and coarse variants supplied for commercial requests.',
        finishedFamily: 'Finished Feed',
        finishedCopy: 'Manufactured cattle, duck, and sheep feed according to availability.',
      };
  const enabledProducts = window.ALNESOUR_PRODUCTS.filter((product) => product.enabled === true);
  const quoteUrl = (productNames) => {
    const message = isArabic
      ? `السلام عليكم، أريد الاستفسار عن سعر وتوفر ${productNames}.\nالكمية المطلوبة: \nمكان التسليم: `
      : `Hello, I would like to ask about the current price and availability of ${productNames}.\nRequested quantity: \nDelivery location: `;
    return `https://wa.me/201022232052?text=${encodeURIComponent(message)}`;
  };
  const image = (product, alt) =>
    `<div class="product-image"><img loading="lazy" src="${basePath + product.image}" alt="${alt}" width="800" height="600"></div>`;
  const productCard = (product, showImage = true) => `<article class="product-card${showImage ? '' : ' product-card-text-only'}" data-category="${product.category}" data-product-id="${product.id}">
    ${showImage ? image(product, isArabic ? product.name.ar : product.name.en) : ''}
    <div class="product-content"><span class="product-category">${labels[product.category]}</span><h3>${isArabic ? product.name.ar : product.name.en}</h3><p>${isArabic ? product.description.ar : product.description.en}</p><a class="text-link" href="${quoteUrl(isArabic ? product.name.ar : product.name.en)}" target="_blank" rel="noopener">${labels.cta}</a></div>
  </article>`;
  const familyCard = ({ title, description, products, category }) => {
    const variants = products.map((product) => (isArabic ? product.name.ar : product.name.en)).join('، ');
    const featuredProduct = products[0];
    return `<article class="product-card product-family-card" data-category="${category}" data-product-ids="${products.map((product) => product.id).join(',')}">
      ${image(featuredProduct, '')}
      <div class="product-content"><span class="product-category">${labels[category]}</span><h3>${title}</h3><p>${description}</p><p class="product-variants">${variants}</p><a class="text-link" href="${quoteUrl(title)}" target="_blank" rel="noopener">${labels.availability}</a></div>
    </article>`;
  };
  const renderHomepage = () => {
    const soybeanHulls = enabledProducts.filter(
      (product) => product.featured === true && product.productFamily === 'soybean-hulls'
    );
    const featuredRawProducts = enabledProducts.filter(
      (product) => product.featured === true && product.productFamily !== 'soybean-hulls'
    );
    const finishedFeed = enabledProducts.filter((product) => product.category === 'finished');
    const cards = [];

    if (soybeanHulls.length) {
      cards.push(
        familyCard({
          title: labels.soybeanFamily,
          description: labels.soybeanCopy,
          products: soybeanHulls,
          category: 'raw',
        })
      );
    }
    featuredRawProducts.forEach((product) =>
      cards.push(productCard(product, product.id !== 'fava-bean-hulls'))
    );
    if (finishedFeed.length) {
      cards.push(
        familyCard({
          title: labels.finishedFamily,
          description: labels.finishedCopy,
          products: finishedFeed,
          category: 'finished',
        })
      );
    }
    grid.innerHTML = cards.join('');
  };
  const renderCatalogue = () => {
    grid.innerHTML = enabledProducts.map(productCard).join('');
    document.querySelectorAll('[data-filter]').forEach((button) =>
      button.addEventListener('click', () => {
        document
          .querySelectorAll('[data-filter]')
          .forEach((item) => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        const filter = button.dataset.filter;
        grid.querySelectorAll('.product-card').forEach((card) => {
          card.hidden = filter !== 'all' && card.dataset.category !== filter;
        });
      })
    );
  };

  if (grid.dataset.productsContext === 'homepage') renderHomepage();
  else renderCatalogue();
})();
