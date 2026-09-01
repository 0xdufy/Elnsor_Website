(() => {
  const catalogue = window.ALNESOUR_CATALOG;
  if (!catalogue) return;

  const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const assetBase = locale === 'ar' ? '' : '../';
  const ui = {
    ar: {
      requestPrice: 'اسأل عن السعر والتوفر',
      availability: 'اسأل عن السعر والتوفر',
      homeProductCta: 'اسأل عن السعر والتوفر ←',
    },
    en: {
      requestPrice: 'Ask about price and availability',
      availability: 'Ask about price and availability',
      homeProductCta: 'Ask about price & availability →',
    },
  }[locale];
  const localized = (value) => value?.[locale] || '';
  const isPublicProduct = (product) =>
    product?.enabled === true &&
    Boolean(catalogue.categories[product.categoryId]) &&
    Boolean(catalogue.availability[product.availability]) &&
    Boolean(localized(product.name)) &&
    Boolean(localized(product.description));
  const hasImage = (image) => image?.status !== 'missing' && Boolean(image?.src);
  const publicProducts = catalogue.products
    .filter(isPublicProduct)
    .sort(
      (first, second) =>
        catalogue.categories[first.categoryId].sortOrder -
          catalogue.categories[second.categoryId].sortOrder || first.sortOrder - second.sortOrder
    );

  const create = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const quoteUrl = (productName) => {
    const message =
      locale === 'ar'
        ? `السلام عليكم، أريد الاستفسار عن سعر وتوفر ${productName}.\nالكمية المطلوبة: \nمكان التسليم: `
        : `Hello, I would like to ask about the current price and availability of ${productName}.\nRequested quantity: \nDelivery location: `;
    return `https://wa.me/201022232052?text=${encodeURIComponent(message)}`;
  };

  const imageElement = (image, alt) => {
    if (!hasImage(image)) return null;
    const wrapper = create('div', 'product-image');
    const element = document.createElement('img');
    element.loading = 'lazy';
    element.src = `${assetBase}${image.src}`;
    element.alt = alt;
    element.width = 800;
    element.height = 600;
    wrapper.append(element);
    return wrapper;
  };

  const actionLink = (label, productName) => {
    const link = create('a', 'text-link', label);
    link.href = quoteUrl(productName);
    link.target = '_blank';
    link.rel = 'noopener';
    return link;
  };

  const productCard = (product, options = {}) => {
    const card = create('article', 'product-card');
    card.dataset.category = product.categoryId;
    card.dataset.productId = product.id;
    if (options.showImage !== false) {
      const productImage = imageElement(product.image, localized(product.name));
      if (productImage) card.append(productImage);
      else card.classList.add('product-card-text-only');
    } else {
      card.classList.add('product-card-text-only');
    }

    const content = create('div', 'product-content');
    content.append(
      create('span', 'product-category', localized(catalogue.categories[product.categoryId].name)),
      create('h3', '', localized(product.name)),
      create('p', '', localized(product.description)),
      actionLink(ui.requestPrice, localized(product.name))
    );
    card.append(content);
    return card;
  };

  const familyCard = (family, products) => {
    const card = create('article', 'product-card product-family-card');
    card.dataset.category = family.categoryId;
    card.dataset.familyId = family.id;
    card.dataset.productIds = products.map((product) => product.id).join(',');
    const familyImage = imageElement(family.image, '');
    if (familyImage) card.append(familyImage);
    else card.classList.add('product-card-text-only');

    const content = create('div', 'product-content');
    const variants = create('div', 'product-variants');
    products.forEach((product) => {
      const variantName = localized(product.variant?.name) || localized(product.name);
      variants.append(create('span', 'product-variant-chip', variantName));
    });
    content.append(
      create('span', 'product-category', localized(catalogue.categories[family.categoryId].name)),
      create('h3', '', localized(family.name)),
      create('p', '', localized(family.description)),
      variants,
      actionLink(ui.homeProductCta, localized(family.name))
    );
    card.append(content);
    return card;
  };

  const publicFamilyCards = () =>
    Object.values(catalogue.families)
      .filter(
        (family) =>
          family.enabled === true &&
          family.placement?.homepage === true &&
          catalogue.categories[family.categoryId] &&
          localized(family.name) &&
          localized(family.description)
      )
      .map((family) => ({
        family,
        products: publicProducts.filter((product) => product.familyId === family.id),
      }))
      .filter(({ products }) => products.length)
      .map(({ family, products }) => ({
        sortOrder: family.sortOrder,
        element: familyCard(family, products),
      }));

  const homepageCards = () => {
    const familyCards = publicFamilyCards();
    const standaloneCards = publicProducts
      .filter((product) => !product.familyId && product.placement?.homepage === true)
      .map((product) => ({ sortOrder: product.sortOrder, element: productCard(product) }));
    return [...familyCards, ...standaloneCards].sort(
      (first, second) => first.sortOrder - second.sortOrder
    );
  };

  const renderHomepage = (grid) =>
    grid.replaceChildren(...homepageCards().map(({ element }) => element));

  const renderCatalogue = (grid) => {
    const categoryTitle = (section, category) => {
      const title = section.querySelector('[data-category-title]');
      if (title) title.textContent = localized(category.name);
    };

    const familyPresentation = (family, products) => {
      const element = create('article', 'catalogue-family');
      element.dataset.category = family.categoryId;
      element.dataset.familyId = family.id;

      const media = imageElement(family.image, localized(family.name));
      if (media) element.append(media);

      const content = create('div', 'catalogue-family-content');
      const heading = create('div', 'catalogue-family-heading');
      heading.append(
        create('span', 'product-category', localized(catalogue.categories[family.categoryId].name)),
        create('h3', '', localized(family.name)),
        create('p', '', localized(family.description)),
        actionLink(ui.availability, localized(family.name))
      );
      const variants = create('div', 'variant-list');
      products.forEach((product) => {
        const variant = create('article', 'product-card product-variant');
        variant.dataset.category = product.categoryId;
        variant.dataset.productId = product.id;
        const variantName = localized(product.variant?.name) || localized(product.name);
        variant.append(
          create('h4', '', variantName),
          create('p', '', localized(product.description)),
          actionLink(ui.requestPrice, localized(product.name))
        );
        variants.append(variant);
      });
      content.append(heading, variants);
      element.append(content);
      return element;
    };

    const familyIntro = (family) => {
      const intro = create('div', 'finished-family-intro');
      const image = imageElement(family.image, localized(family.name));
      if (image) intro.append(image);
      intro.append(create('p', '', localized(family.description)));
      return intro;
    };

    const catalogueSections = grid.querySelectorAll('[data-catalogue-category]');
    if (!catalogueSections.length) {
      grid.replaceChildren(...publicProducts.map(productCard));
    } else {
      const categories = Object.values(catalogue.categories).sort(
        (first, second) => first.sortOrder - second.sortOrder
      );
      categories.forEach((category) => {
        const section = grid.querySelector(`[data-catalogue-category="${category.id}"]`);
        if (!section) return;
        categoryTitle(section, category);

        section.querySelectorAll('[data-catalogue-family]').forEach((slot) => {
          const family = catalogue.families[slot.dataset.catalogueFamily];
          const products = publicProducts.filter((product) => product.familyId === family?.id);
          if (family?.enabled === true && products.length)
            slot.replaceChildren(familyPresentation(family, products));
          else slot.replaceChildren();
        });

        section.querySelectorAll('[data-catalogue-family-intro]').forEach((slot) => {
          const family = catalogue.families[slot.dataset.catalogueFamilyIntro];
          if (family?.enabled === true) slot.replaceChildren(familyIntro(family));
          else slot.replaceChildren();
        });

        section.querySelectorAll('[data-catalogue-products]').forEach((slot) => {
          const products = publicProducts.filter((product) => {
            if (product.categoryId !== category.id) return false;
            return slot.dataset.catalogueProducts === 'raw' ? !product.familyId : true;
          });
          slot.replaceChildren(
            ...products.map((product) => productCard(product, { showImage: false }))
          );
        });
      });
    }

    grid.parentElement?.querySelector('[data-catalogue-fallback]')?.remove();
    const filterScope = grid.closest('.product-page') || grid.parentElement;
    filterScope?.querySelectorAll('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        filterScope
          .querySelectorAll('[data-filter]')
          .forEach((item) => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        const filter = button.dataset.filter;
        grid.querySelectorAll('[data-category]').forEach((item) => {
          item.hidden = filter !== 'all' && item.dataset.category !== filter;
        });
        grid.querySelectorAll('[data-catalogue-category]').forEach((section) => {
          section.classList.toggle(
            'is-filtered-out',
            filter !== 'all' && section.dataset.catalogueCategory !== filter
          );
        });
      });
    });
  };

  document.querySelectorAll('[data-products-grid]').forEach((grid) => {
    if (grid.dataset.productsContext === 'homepage') renderHomepage(grid);
    else renderCatalogue(grid);
  });
})();
