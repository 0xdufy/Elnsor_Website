(() => {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';

    if (!form.checkValidity()) {
      status.textContent = lang === 'ar'
        ? 'يرجى مراجعة الحقول المطلوبة والمحددة أدناه.'
        : 'Please review the required fields indicated below.';
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const clientType = form.elements.clientType.options[form.elements.clientType.selectedIndex].text;
    const product = form.elements.product.options[form.elements.product.selectedIndex].text;
    const value = (name, fallback) => String(data.get(name) || '').trim() || fallback;
    const message = lang === 'ar'
      ? `السلام عليكم،\nأرغب في طلب عرض سعر من Al Nesour Feeds.\n\nالاسم: ${value('fullName', 'غير محدد')}\nاسم الشركة / المزرعة: ${value('company', 'غير محدد')}\nرقم الهاتف: ${value('phone', 'غير محدد')}\nنوع العميل: ${clientType}\nالمنتج: ${product}\nالكمية: ${value('quantity', 'غير محددة')}\nمكان التسليم: ${value('delivery', 'غير محدد')}\nتفاصيل إضافية: ${value('details', 'لا توجد')}`
      : `Hello,\nI would like to request a quote from Al Nesour Feeds.\n\nFull name: ${value('fullName', 'Not specified')}\nCompany / farm: ${value('company', 'Not specified')}\nPhone: ${value('phone', 'Not specified')}\nClient type: ${clientType}\nProduct: ${product}\nQuantity: ${value('quantity', 'Not specified')}\nDelivery location: ${value('delivery', 'Not specified')}\nAdditional details: ${value('details', 'None')}`;

    window.open(`https://wa.me/201022232052?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
})();
