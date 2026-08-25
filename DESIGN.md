# Al Nesour Feeds — v2 Design System

## Direction

Commercial, Arabic-first industrial agriculture. The site uses warm neutral surfaces, deep operational green, brass only for conversion actions, documentary photography, and product-led page flow. It avoids editorial layouts, luxury styling, generic farm motifs, and unverified proof.

## Tokens

- Forest: `#102C25`, `#163D32`, `#2E5A4B`
- Brass conversion accent: `#C89B3C` / hover `#AD7D24`
- Surfaces: `#F7F4ED`, `#EEE7D9`, white
- Text: `#1D2621`; muted: `#5E6B64`; border: `#D9D2C4`
- Container: 1240px; responsive gutter: 18–48px
- Corners: 6px controls, 12px cards, 20px feature imagery

## Layout and type

- Arabic wordmark: **شركة النسور للأعلاف**, supported by English **Al Nesour Feeds**.
- Arabic uses the system Tahoma stack and English uses Segoe UI for resilient static loading.
- Headings use `clamp()`, never artificially condensed Arabic.
- Section rhythm is 64px mobile to 124px desktop.
- Arabic is RTL source composition; CSS uses logical properties where directional behavior matters.

## Components

- Brass primary button, outlined secondary action, visible keyboard focus.
- Product cards: documentary image, type label, short editable copy, WhatsApp price CTA.
- Cards rely on borders and restrained lift rather than heavy shadow.
- Quote form creates a localized structured WhatsApp message.

## Responsive behavior

- Desktop: split hero, four-part proof strip, scalable grids.
- Tablet: grids collapse deliberately; mobile nav at 900px.
- Mobile: one-column reading flow, full-width CTA rows, no horizontal overflow.
- Motion is limited to short control feedback and respects reduced motion.

## Homepage sequence

Header → Hero → proof strip → products → supply categories → reasons → audiences → Egypt coverage → quote CTA.

## Image treatment

Use close, naturally lit documentary operations: material handling, product texture, unbranded feed sacks, storage, and logistics. No labels, competitors, glossy CGI, or cartoon imagery.
