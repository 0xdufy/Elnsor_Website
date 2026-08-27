(() => {
  const f = document.querySelector('[data-quote-form]');
  if (!f) return;
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const ar = document.documentElement.lang === 'ar',
      s = f.querySelector('[data-form-status]');
    if (!f.checkValidity()) {
      s.textContent = ar
        ? 'يرجى استكمال الحقول المطلوبة للمتابعة عبر واتساب.'
        : 'Please complete the required fields to continue on WhatsApp.';
      f.reportValidity();
      return;
    }
    const d = new FormData(f),
      g = (n) => f.elements[n].selectedOptions[0]?.text || d.get(n) || '',
      l = ar
        ? [
            'السلام عليكم، أرغب في طلب عرض سعر من شركة النسور للأعلاف.',
            'الاسم: ' + d.get('name'),
            'الشركة / المزرعة: ' + d.get('company'),
            'نوع العميل: ' + g('client'),
            'المنتج: ' + g('product'),
            'الكمية: ' + d.get('quantity'),
            'المحافظة: ' + d.get('governorate'),
            'تفاصيل إضافية: ' + d.get('notes'),
          ]
        : [
            'Hello, I would like to request a quote from Al Nesour Feeds.',
            'Name: ' + d.get('name'),
            'Company / farm: ' + d.get('company'),
            'Client type: ' + g('client'),
            'Product: ' + g('product'),
            'Quantity: ' + d.get('quantity'),
            'Governorate: ' + d.get('governorate'),
            'Additional details: ' + d.get('notes'),
          ];
    open(
      'https://wa.me/201022232052?text=' + encodeURIComponent(l.join('\n')),
      '_blank',
      'noopener'
    );
  });
})();
