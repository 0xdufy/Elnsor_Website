# Al Nesour Feeds Website

Arabic-first bilingual B2B corporate website for Al Nesour Feeds, built with semantic HTML5, CSS3, and vanilla JavaScript.

## Run locally

Start a static server from the repository root, for example:

```powershell
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Documentation

- [`AGENTS.md`](AGENTS.md) is the durable source of truth for implementation, publication rules, confirmed business facts, and technical guardrails.
- [`DESIGN.md`](DESIGN.md) will become the approved design-system reference after the visual-direction review.
- [`IMAGE_SOURCES.md`](IMAGE_SOURCES.md) records asset provenance only.
- [`tasks/`](tasks/) contains scoped task briefs, audits, decisions, and review records.

## Maintenance entry points

- Product content is centralized in `assets/js/products-data.js`. The confirmed catalogue and variant-ready structure will be implemented in the dedicated product-data task; do not add unconfirmed products as public stock.
- Global behavior is in `assets/js/main.js`; product rendering in `assets/js/products.js`; WhatsApp quote construction in `assets/js/quote.js`.
- The WhatsApp destination is `201022232052`.
- Shared tokens and styling are in `assets/css/`.
- A future approved logo can replace the header/footer wordmark without changing the layout contract.

## Before production launch

Confirm the final logo, English commercial name for `زيت منزوع`, soybean-hull variant presentation, written address, production domain, any public client/supplier permissions, and any documented certifications, capacities, or specifications.

GitHub Pages remains a testing/preview environment. Do not configure final canonical, `x-default`, or sitemap URLs until the production domain is known.
