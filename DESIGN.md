# Al Nesour Feeds Design System

**Status:** Proposed in TASK-001; not approved for implementation yet.  
**Source proposal:** [`ST-08 Brand Direction`](tasks/TASK-001-brand-content-visual-direction/ST-08-brand-direction.md)

## Design intent

Modern Egyptian B2B feed supply: commercial, credible, practical, product-led, and supply-chain-focused. The site should use light neutral reading surfaces with deep operational green at important moments and brass only for conversion emphasis.

## Proposed tokens

```css
:root {
  --forest-950: #0f2e27;
  --forest-800: #174338;
  --forest-600: #2e5d4d;
  --brass-500: #bf9031;
  --brass-700: #8e651e;
  --sand-50: #f8f5ef;
  --sand-100: #efe8da;
  --ink-950: #1c2722;
  --ink-600: #56645d;
  --line-200: #d9d4c9;
  --white: #ffffff;
}
```

## Proposed typography

- Arabic: IBM Plex Sans Arabic with `Tahoma, Arial, sans-serif` fallback.
- English: IBM Plex Sans with `Arial, sans-serif` fallback.
- Heading weight 600–700; body 400–500.
- Arabic body line-height 1.75–1.9; English body line-height 1.6–1.7.

## Layout

- Maximum container: 1240px.
- Gutter: 18px mobile, 28px tablet, 48px desktop.
- Space scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Section space: 64px mobile, 88px tablet, 112–128px desktop.
- Radius: 8px controls, 12px cards, 16px imagery.
- Borders should do more visual work than shadows; use no more than two restrained shadow levels.

## Components and behavior

- Brass primary buttons and secondary forest-outline buttons, both 48px minimum height.
- White bordered product cards with material-specific documentary images and no arbitrary numbering.
- Explicit labels, visible focus, and accessible error treatment for forms.
- Subtle 150–220ms control feedback only; honor reduced-motion preferences.
- Use logical CSS properties for parity across Arabic RTL and English LTR.
- On mobile, stack CTAs, collapse grids gracefully, and retain a clearly visible contact action.

## Image treatment

Use natural-light, documentary industrial-agriculture imagery: material handling, warehouses, factories, transport, product textures, and unbranded feed sacks. Avoid generic farm landscapes, cute livestock, synthetic CGI, glossy imagery, and branded packaging.

## Approval gate

Do not treat this document as the final design specification until the owner has approved the TASK-001 brand proposal and OpenDesign exploration has been completed and recorded.
