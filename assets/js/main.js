(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const desktopBreakpoint = window.matchMedia('(min-width: 901px)');

  const setMenuOpen = (isOpen) => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute(
      'aria-label',
      document.documentElement.lang === 'ar'
        ? isOpen
          ? 'إغلاق قائمة التنقل'
          : 'فتح قائمة التنقل'
        : isOpen
          ? 'Close navigation menu'
          : 'Open navigation menu'
    );
    mobileNav.classList.toggle('is-open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  };

  addEventListener('scroll', () => header?.classList.toggle('is-scrolled', scrollY > 10), {
    passive: true,
  });
  toggle?.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
  desktopBreakpoint.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
})();
