(() => {
  const availabilityStates = ['on-request', 'unavailable'];
  const imageStates = ['temporary', 'approved', 'missing'];

  const isLocalizedText = (value) =>
    Boolean(
      value &&
      typeof value === 'object' &&
      typeof value.ar === 'string' &&
      value.ar.trim() &&
      typeof value.en === 'string' &&
      value.en.trim()
    );

  const isValidImage = (image) =>
    Boolean(
      image &&
      typeof image === 'object' &&
      imageStates.includes(image.status) &&
      (image.status === 'missing' || (typeof image.src === 'string' && image.src.trim()))
    );

  const validateCatalogue = (catalogue) => {
    const issues = [];
    if (!catalogue || catalogue.schemaVersion !== 1) return ['invalid-schema-version'];

    const categories = Object.entries(catalogue.categories || {});
    const categoryIds = new Set();
    categories.forEach(([key, category]) => {
      if (!category || category.id !== key || categoryIds.has(category.id)) {
        issues.push(`invalid-category:${key}`);
      }
      categoryIds.add(category?.id);
      if (!isLocalizedText(category?.name)) issues.push(`missing-category-name:${key}`);
      if (!Number.isFinite(category?.sortOrder)) issues.push(`invalid-category-sort-order:${key}`);
    });

    const families = Object.entries(catalogue.families || {});
    const familyIds = new Set();
    families.forEach(([key, family]) => {
      if (!family || family.id !== key || familyIds.has(family.id)) {
        issues.push(`invalid-family:${key}`);
      }
      familyIds.add(family?.id);
      if (!categoryIds.has(family?.categoryId)) issues.push(`unknown-family-category:${key}`);
      if (!isLocalizedText(family?.name)) issues.push(`missing-family-name:${key}`);
      if (!isLocalizedText(family?.description)) issues.push(`missing-family-description:${key}`);
      if (typeof family?.enabled !== 'boolean') issues.push(`invalid-family-enabled:${key}`);
      if (!Number.isFinite(family?.sortOrder)) issues.push(`invalid-family-sort-order:${key}`);
      if (!isValidImage(family?.image)) issues.push(`invalid-family-image:${key}`);
    });

    const productIds = new Set();
    const sortOrders = new Set();
    (catalogue.products || []).forEach((product, index) => {
      const reference = product?.id || `index-${index}`;
      if (!product?.id || productIds.has(product.id))
        issues.push(`duplicate-product-id:${reference}`);
      productIds.add(product?.id);
      if (!categoryIds.has(product?.categoryId))
        issues.push(`unknown-product-category:${reference}`);
      if (product?.familyId && !familyIds.has(product.familyId)) {
        issues.push(`unknown-product-family:${reference}`);
      }
      if (typeof product?.enabled !== 'boolean')
        issues.push(`invalid-product-enabled:${reference}`);
      if (!availabilityStates.includes(product?.availability)) {
        issues.push(`invalid-product-availability:${reference}`);
      }
      if (!Number.isFinite(product?.sortOrder))
        issues.push(`invalid-product-sort-order:${reference}`);

      const sortKey = `${product?.categoryId || 'unknown'}:${product?.familyId || reference}:${product?.sortOrder}`;
      if (sortOrders.has(sortKey)) issues.push(`duplicate-product-sort-order:${sortKey}`);
      sortOrders.add(sortKey);

      if (product?.enabled === true) {
        if (!isLocalizedText(product.name)) issues.push(`missing-product-name:${reference}`);
        if (!isLocalizedText(product.description))
          issues.push(`missing-product-description:${reference}`);
        if (!isValidImage(product.image)) issues.push(`invalid-product-image:${reference}`);
      }
    });

    return issues;
  };

  window.ALNESOUR_CATALOG = {
    schemaVersion: 1,

    availability: {
      'on-request': {
        name: { ar: 'اسأل عن السعر والتوفر', en: 'Ask about price and availability' },
      },
      unavailable: {
        name: { ar: 'غير متاح حالياً', en: 'Currently unavailable' },
      },
    },

    categories: {
      raw: {
        id: 'raw',
        sortOrder: 10,
        name: { ar: 'خامات أعلاف', en: 'Feed Raw Materials' },
      },
      finished: {
        id: 'finished',
        sortOrder: 20,
        name: { ar: 'أعلاف جاهزة', en: 'Finished Feed' },
      },
    },

    families: {
      'soybean-hulls': {
        id: 'soybean-hulls',
        categoryId: 'raw',
        enabled: true,
        featured: true,
        placement: { homepage: true },
        sortOrder: 10,
        name: { ar: 'قشر الصويا', en: 'Soybean Hulls' },
        description: {
          ar: 'خامة أعلاف بثلاث درجات حسب طلبك وتوفر الكمية.',
          en: 'Three grades for commercial supply requests, subject to availability.',
        },
        image: {
          src: 'assets/images/products/soybean hulls.png',
          status: 'temporary',
        },
        internal: { imageStatus: 'temporary' },
      },
      'finished-feed': {
        id: 'finished-feed',
        categoryId: 'finished',
        enabled: true,
        featured: true,
        placement: { homepage: true },
        sortOrder: 40,
        name: { ar: 'الأعلاف الجاهزة', en: 'Finished Feed' },
        description: {
          ar: 'أعلاف مُصنّعة للمواشي والبط والأغنام حسب التوفر.',
          en: 'Manufactured feed for cattle, ducks, and sheep, subject to availability.',
        },
        image: {
          src: 'assets/images/products/animal feed sack.png',
          status: 'temporary',
        },
        internal: { imageStatus: 'temporary' },
      },
    },

    products: [
      {
        id: 'soybean-hulls-fine',
        categoryId: 'raw',
        familyId: 'soybean-hulls',
        variant: { id: 'fine', name: { ar: 'ناعم', en: 'Fine' } },
        enabled: true,
        featured: true,
        placement: { homepage: false },
        sortOrder: 10,
        availability: 'on-request',
        name: { ar: 'قشر صويا ناعم', en: 'Fine Soybean Hulls' },
        description: {
          ar: 'متوفر وفق احتياجات الطلب والتوافر للكميات التجارية.',
          en: 'Supplied for commercial quantities according to request and availability.',
        },
        image: {
          src: 'assets/images/products/soybean hulls.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'soybean-hulls-medium',
        categoryId: 'raw',
        familyId: 'soybean-hulls',
        variant: { id: 'medium', name: { ar: 'وسط', en: 'Medium' } },
        enabled: true,
        featured: true,
        placement: { homepage: false },
        sortOrder: 20,
        availability: 'on-request',
        name: { ar: 'قشر صويا وسط', en: 'Medium Soybean Hulls' },
        description: {
          ar: 'متوفر وفق احتياجات الطلب والتوافر للكميات التجارية.',
          en: 'Supplied for commercial quantities according to request and availability.',
        },
        image: {
          src: 'assets/images/products/soybean hulls.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'soybean-hulls-coarse',
        categoryId: 'raw',
        familyId: 'soybean-hulls',
        variant: { id: 'coarse', name: { ar: 'خشن', en: 'Coarse' } },
        enabled: true,
        featured: true,
        placement: { homepage: false },
        sortOrder: 30,
        availability: 'on-request',
        name: { ar: 'قشر صويا خشن', en: 'Coarse Soybean Hulls' },
        description: {
          ar: 'متوفر وفق احتياجات الطلب والتوافر للكميات التجارية.',
          en: 'Supplied for commercial quantities according to request and availability.',
        },
        image: {
          src: 'assets/images/products/soybean hulls.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'fava-bean-hulls',
        categoryId: 'raw',
        enabled: true,
        featured: true,
        placement: { homepage: true },
        sortOrder: 20,
        availability: 'on-request',
        name: { ar: 'قشر فول', en: 'Fava Bean Hulls' },
        description: {
          ar: 'خامة أعلاف للطلبات التجارية حسب الكمية والتوفر.',
          en: 'Feed raw material for commercial orders, subject to quantity and availability.',
        },
        image: {
          src: 'assets/images/products/fava bean.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'oil-product',
        categoryId: 'raw',
        enabled: true,
        featured: true,
        placement: { homepage: true },
        sortOrder: 30,
        availability: 'on-request',
        name: { ar: 'زيت منزوع', en: 'Feed-Related Oil Product' },
        description: {
          ar: 'منتج زيتي لاستخدامات الأعلاف، حسب الطلب والتوفر.',
          en: 'A feed-related oil product supplied to order, subject to availability.',
        },
        image: {
          src: 'assets/images/products/degummed-soybean-oil.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'temporary', imageStatus: 'temporary' },
      },
      {
        id: 'cattle-feed',
        categoryId: 'finished',
        familyId: 'finished-feed',
        variant: { id: 'cattle', name: { ar: 'مواشي', en: 'Cattle' } },
        enabled: true,
        featured: false,
        placement: { homepage: false },
        sortOrder: 10,
        availability: 'on-request',
        name: { ar: 'علف مواشي', en: 'Cattle Feed' },
        description: {
          ar: 'أعلاف مُصنّعة للمواشي حسب نطاق المنتج والتوافر.',
          en: 'Manufactured cattle feed according to the available product range.',
        },
        image: {
          src: 'assets/images/products/animal feed sack.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'duck-feed',
        categoryId: 'finished',
        familyId: 'finished-feed',
        variant: { id: 'ducks', name: { ar: 'بط', en: 'Ducks' } },
        enabled: true,
        featured: false,
        placement: { homepage: false },
        sortOrder: 20,
        availability: 'on-request',
        name: { ar: 'علف بط', en: 'Duck Feed' },
        description: {
          ar: 'أعلاف مُصنّعة للبط حسب نطاق المنتج والتوافر.',
          en: 'Manufactured duck feed according to the available product range.',
        },
        image: {
          src: 'assets/images/products/animal feed sack.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
      {
        id: 'sheep-feed',
        categoryId: 'finished',
        familyId: 'finished-feed',
        variant: { id: 'sheep', name: { ar: 'أغنام', en: 'Sheep' } },
        enabled: true,
        featured: false,
        placement: { homepage: false },
        sortOrder: 30,
        availability: 'on-request',
        name: { ar: 'علف غنم', en: 'Sheep Feed' },
        description: {
          ar: 'أعلاف مُصنّعة للأغنام حسب نطاق المنتج والتوافر.',
          en: 'Manufactured sheep feed according to the available product range.',
        },
        image: {
          src: 'assets/images/products/animal feed sack.png',
          status: 'temporary',
        },
        internal: { englishNameStatus: 'confirmed', imageStatus: 'temporary' },
      },
    ],
  };

  window.ALNESOUR_VALIDATE_CATALOG = validateCatalogue;
})();
