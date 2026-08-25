(() => {
  const body = document.body;
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('site-navigation');

  if (menuButton && nav) {
    const closeMenu = () => {
      body.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', () => {
      const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      body.classList.toggle('nav-open', willOpen);
      menuButton.setAttribute('aria-expanded', String(willOpen));
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const globalQuoteMessage = document.documentElement.lang === 'ar'
    ? `السلام عليكم،\nأرغب في طلب عرض سعر من Al Nesour Feeds.\n\nنوع العميل:\nالمنتج:\nالكمية:\nمكان التسليم:\nتفاصيل إضافية:`
    : `Hello,\nI would like to request a quote from Al Nesour Feeds.\n\nClient type:\nProduct:\nQuantity:\nDelivery location:\nAdditional details:`;

  document.querySelectorAll('.js-global-quote').forEach((link) => {
    link.href = `https://wa.me/201022232052?text=${encodeURIComponent(globalQuoteMessage)}`;
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
