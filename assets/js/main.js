(() => {
  const h = document.querySelector('.site-header'),
    b = document.querySelector('[data-menu-toggle]'),
    n = document.querySelector('[data-mobile-nav]');
  addEventListener('scroll', () => h?.classList.toggle('is-scrolled', scrollY > 10), {
    passive: true,
  });
  b?.addEventListener('click', () => {
    const o = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!o));
    n.classList.toggle('is-open', !o);
  });
})();
