# ST-08 — Brand & Visual Direction

**Status:** Approved 2026-08-27
**OpenDesign status:** Exploration completed 2026-08-27. The initial registered endpoint at `127.0.0.1:7456` was unavailable, but the running Open Design workspace was discovered at `http://127.0.0.1:52856` and reviewed through its UI.

## Direction exploration

| Direction               | Character                                                                                               | Strength                                                                                 | Risk                                                                          | Decision                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| A. Operational green    | Deep industrial green, warm mineral neutrals, brass only for action, documentary operations photography | Feels credible, local-market commercial, and scalable across product and service content | Can become too dark if green is overused                                      | **Recommended**                                                    |
| B. Product-market light | Mostly light neutral canvas, stronger product imagery, muted green controls                             | Very clear product catalogue and mobile scanning                                         | Risks becoming a generic commodity/retail catalogue                           | Not selected as the primary direction; borrow its product clarity. |
| C. Heritage badge       | Circular eagle seal, stronger gold, more formal dark surfaces                                           | Preserves recognizable Facebook identity                                                 | Risks looking metallic, luxury, or old-fashioned and reducing product clarity | Not selected; retain only the simplified eagle/circle idea.        |

## OpenDesign exploration review

The existing OpenDesign project **“Al Nesour Feeds — Bilingual Corporate Website”** was inspected as a design-reference prototype. Its workflow compared three related directions—restrained industrial editorial, premium supply-chain documentary, and structured agricultural trade/corporate—then selected the structured trade/corporate direction.

The rendered reference supports the following decisions in this proposal:

- warm cream as the principal reading surface, with forest green used to establish hierarchy rather than cover every section;
- a compact, typographic wordmark and a restrained mobile header;
- brass only for the primary WhatsApp conversion action;
- strong, editorial-scale Arabic type without decorative effects; and
- orderly grids, light borders, and documentary operational imagery instead of generic agriculture styling.

The reference is design input only, not a content or implementation source. Its earlier prompt contains superseded or unsupported material, including an unconfirmed English working name for `زيت منزوع`, different hero wording, and product-scope assumptions. TASK-001 confirmed facts in `AGENTS.md` and ST-05 take precedence. No OpenDesign prototype file, generated image, or code was copied into this repository.

## Chosen direction: Operational green

Al Nesour should feel like a capable supplier in motion: materials, quantities, factory sourcing, warehouse coordination, and delivery—not a rural farm, online shop, or annual-report presentation.

The page rhythm should use light neutral sections for reading and product browsing, with deep green reserved for the hero, selected proof/CTA bands, and important operational moments. Brass/gold should guide conversion, small highlights, and brand detail; it should never become a metallic page background.

## Logo and wordmark approach

Recommended future lockup: a simple, digitally legible eagle-head or circular emblem paired with the Arabic wordmark `شركة النسور للأعلاف`, with `Al Nesour Feeds` as smaller supporting text. The emblem must remain optional so the horizontal wordmark performs cleanly in a compact header.

Retain from the existing Facebook identity:

- eagle recognition;
- dark green base;
- restrained gold accent; and
- optional circular asset for social/profile use.

Do not carry forward 3D, metallic, highly rendered, mascot-like, or aggressive visual treatment. No final logo is created in TASK-001.

## Proposed design system

### Colour tokens

| Token          | Value     | Use                                                          |
| -------------- | --------- | ------------------------------------------------------------ |
| `--forest-950` | `#0F2E27` | Hero, strong CTA bands, footer.                              |
| `--forest-800` | `#174338` | Navigation accents, dark-panel states.                       |
| `--forest-600` | `#2E5D4D` | Secondary interactive accent.                                |
| `--brass-500`  | `#BF9031` | Primary button and small brand emphasis.                     |
| `--brass-700`  | `#8E651E` | Brass hover and text on light surfaces where contrast holds. |
| `--sand-50`    | `#F8F5EF` | Primary page background.                                     |
| `--sand-100`   | `#EFE8DA` | Alternating section surface and subtle callouts.             |
| `--ink-950`    | `#1C2722` | Primary text on light surfaces.                              |
| `--ink-600`    | `#56645D` | Supporting text.                                             |
| `--line-200`   | `#D9D4C9` | Borders and dividers.                                        |
| `--white`      | `#FFFFFF` | Cards and text on dark surfaces.                             |

Use white text only on `forest-950`/`forest-800`; use `ink-950` for body text. Validate final contrast in implementation.

### Typography

- Arabic UI and display: **IBM Plex Sans Arabic**.
- English UI and display: **IBM Plex Sans**.
- Fallback: `Tahoma, Arial, sans-serif` for Arabic and `Arial, sans-serif` for English.
- No more than these two primary families.
- Heading weight: 600–700; body weight: 400–500; avoid compressed Arabic or giant editorial display text.
- Mobile body size: 16px minimum; Arabic body line-height: 1.75–1.9; English body line-height: 1.6–1.7.

### Space and layout

- Maximum content width: 1240px.
- Responsive page gutter: 18px mobile, 28px tablet, 48px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Section rhythm: 64px mobile, 88px tablet, 112–128px desktop.
- Desktop uses an underlying 12-column grid; product cards use responsive `repeat(auto-fit, minmax(...))` rather than a fixed item count.
- Text blocks remain compact enough to scan; hero copy should not exceed roughly 600px in its own column.

### Components

| Component                 | Direction                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary button            | Brass fill, dark readable text, 48px minimum height, 8px radius, direct action wording.                                                                           |
| Secondary button          | Transparent or light-surface treatment with forest border/text; never visually equal to the primary CTA.                                                          |
| Text link                 | Forest text with an accessible underline/underline-offset state; directional arrow flips in RTL/LTR if used.                                                      |
| Product card              | White surface, 1px neutral border, 12px radius, documentary image ratio, category label, compact editable description, price-inquiry action. No arbitrary number. |
| Capability/audience block | Mostly unboxed or lightly divided; use cards only where grouping improves scanning.                                                                               |
| Form control              | White surface, 1px neutral border, 48px field minimum, explicit label, visible focus outline, helpful error space.                                                |
| Footer                    | `forest-950` background, restrained links, wordmark and direct contact actions.                                                                                   |

### Images

- Strong full-bleed or framed hero photograph, never a generic farm landscape.
- Product images should be material-specific close documentary studies.
- Use 12–16px image corners; avoid rounded blobs and excessive image overlays.
- Overlay only when required for readable copy, with a restrained forest tint rather than heavy gradients.

### Motion

- Interaction feedback: 150–220ms ease-out.
- Small hover/active changes for buttons, links, and cards only.
- No parallax, autoplay video, carousels, or dramatic section entrances.
- Honor `prefers-reduced-motion`.

### Responsive and direction behavior

- Navigation collapses to an accessible menu before labels or the main CTA crowd.
- At 390px, primary actions stack and remain at least 44px high; no horizontal scrolling.
- Product cards collapse from three to two to one column without fixed content heights.
- Forms use one column on mobile.
- Prefer CSS logical properties so RTL/LTR differs only in flow and directional icon treatment.

## Review decisions requested

1. Approve Operational Green as the direction to develop through OpenDesign.
2. Approve the simplified eagle + Arabic wordmark + supporting English lockup approach for a later logo task.
3. Approve IBM Plex Sans Arabic / IBM Plex Sans as the typography direction.
4. Approve the proposed deep-green, warm-neutral, brass-accent palette.
5. Confirm that documentation should remain provisional until OpenDesign is reachable and its exploration can be attached.
