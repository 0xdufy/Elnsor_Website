# Al Nesour Feeds Website

Arabic-first bilingual B2B single-page website for Al Nesour Feeds, built with semantic HTML5, CSS3, and minimal vanilla JavaScript.

## Run locally

```powershell
python -m http.server 4173
```

Open [Arabic](http://127.0.0.1:4173/index.html) or [English](http://127.0.0.1:4173/en/index.html).

## Maintenance

- `index.html` and `en/index.html` contain the two localized single-page versions.
- `assets/css/tokens.css` defines design tokens; `assets/css/styles.css` contains the shared styles.
- `assets/js/main.js` handles the mobile menu, scrolled header, and localized product WhatsApp links.
- `IMAGE_SOURCES.md` records the remaining local image assets.

Format maintained files with:

```powershell
npx prettier --write "**/*.{html,css,js,md,json}"
```

Before production, confirm the final logo, the exact English commercial name for `زيت منزوع`, any public address, and the production domain.
