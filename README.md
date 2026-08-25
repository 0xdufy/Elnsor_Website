# Al Nesour Feeds Website

A bilingual Arabic/English B2B corporate website built with semantic HTML5, shared CSS, and vanilla JavaScript.

## Run locally

Start any static server from the repository root, for example:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Content maintenance

- Products are centralized in `assets/js/products-data.js`. Add a product object there using the existing bilingual fields. The products page builds filters only for categories that contain at least one product.
- The temporary wordmark is the `.wordmark` link in each page header and footer. A future approved image logo can replace its text without changing header layout.
- WhatsApp behavior is in `assets/js/main.js`, `assets/js/products.js`, and `assets/js/quote.js`. The confirmed destination is `201022232052`.
- Facebook and Google Maps links are present directly in each page footer/contact block.
- Shared design tokens are in `assets/css/tokens.css`; components and responsive rules are in `assets/css/styles.css`.

## Production confirmations

Before public launch, confirm:

1. Final logo / brand mark.
2. Exact English commercial name for **زيت منزوع** (currently **Degummed Soybean Oil** as a working translation).
3. Exact soybean-hull variants if each should have its own product card.
4. Final textual business address, if one should be displayed.
5. Production domain for canonical URLs, `x-default`, and `sitemap.xml` entries.
6. Whether any client relationship, including United Oil, may be shown publicly.
7. Whether supplier names or logos may be shown publicly.
8. Any certifications, statistics, years of experience, or capacity figures supported by documentation.

No client/supplier names, prices, product specifications, statistics, testimonials, certifications, or unconfirmed addresses are published in this version.
