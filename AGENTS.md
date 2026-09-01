# Al Nesour Feeds Website

This is an Arabic-first, bilingual B2B corporate website built with semantic HTML, CSS, and minimal vanilla JavaScript. It has no build step or framework.

## Architecture

- Arabic single page: `index.html`
- English single page: `en/index.html`
- Navigation uses internal anchors: `#home`, `#products`, `#about`, `#process`, and `#contact`.
- Keep Arabic RTL and English LTR versions in content and structural parity. The language switcher must link between the two index pages.

## Business and content rules

- Arabic name: **شركة النسور للأعلاف**. English name: **Al Nesour Feeds**.
- The business supplies feed raw materials and manufactured finished feed to traders, feed factories, and large farms in Egypt.
- Approved strengths: over 20 years of feed-market experience, competitive pricing and availability, direct factory supply, flexible commercial quantities, wholesale supply, delivery coordination across Egyptian governorates, local and external supply sources, imported products, and finished feed.
- Use `توريد مباشر من المصانع` or equivalent; never imply exclusivity, agency, or unconfirmed partnerships.
- Do not publish unsupported capacities, specifications, certifications, client/supplier names, product origins, reviews, or dates.
- WhatsApp is the primary conversion action: display `+20 10 2223 2052`, destination `201022232052`, base URL `https://wa.me/201022232052`.

## Confirmed products

- Soybean Hulls / قشر صويا: Fine / ناعم, Medium / وسط, Coarse / خشن.
- Fava Bean Hulls / قشر فول.
- زيت منزوع. Its English commercial name remains temporary; do not finalize it without owner confirmation.
- Finished Feed / أعلاف جاهزة: Cattle / مواشي, Ducks / بط, Sheep / أغنام.

## Implementation rules

- Preserve the current restrained industrial-green, warm-neutral, brass-accent visual identity unless an owner-approved design task changes it.
- Use local approved assets only. Record provenance in `IMAGE_SOURCES.md`.
- Keep markup semantic, focus states visible, mobile navigation keyboard-operable, and layouts responsive.
- Do not add frameworks, tracking, a CMS, ecommerce, customer dashboards, or unapproved site sections.
