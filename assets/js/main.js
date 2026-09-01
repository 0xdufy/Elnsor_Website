(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const desktopBreakpoint = window.matchMedia('(min-width: 901px)');
  const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const setMenuOpen = (isOpen) => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', locale === 'ar' ? (isOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل') : (isOpen ? 'Close navigation menu' : 'Open navigation menu'));
    mobileNav.classList.toggle('is-open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  };
  document.querySelectorAll('[data-whatsapp-product]').forEach((link) => {
    const product = link.dataset.whatsappProduct;
    const message = locale === 'ar' ? `السلام عليكم، أريد الاستفسار عن سعر وتوفر ${product}.\nالكمية المطلوبة: \nمكان التسليم: ` : `Hello, I would like to ask about the current price and availability of ${product}.\nRequested quantity: \nDelivery location: `;
    link.href = `https://wa.me/201022232052?text=${encodeURIComponent(message)}`;
  });
  addEventListener('scroll', () => header?.classList.toggle('is-scrolled', scrollY > 10), { passive: true });
  toggle?.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.addEventListener('click', (event) => { if (event.target.closest('a')) setMenuOpen(false); });
  addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenuOpen(false); });
  desktopBreakpoint.addEventListener('change', (event) => { if (event.matches) setMenuOpen(false); });
})();
