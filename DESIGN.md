# Al Nesour Feeds — Website Design System

## Direction

**Structured agricultural trade / corporate** is the chosen direction. OpenDesign evaluated restrained industrial editorial, premium supply-chain documentary, and structured agricultural trade/corporate. The chosen system best balances practical credibility, product clarity, bilingual rigor, and direct WhatsApp quote conversion without drifting into rustic agriculture or luxury-brand theatre.

The visual signature is a warm-cream editorial canvas, deep-forest structure, sparse brass conversion cues, sharp bordered modules, and close documentary crops of materials and logistics. Credibility comes before decoration; clarity comes before novelty.

## Brand posture

- Premium, practical, established, calm, modern, industrial-agricultural, and B2B.
- Use the temporary typographic wordmark **Al Nesour Feeds** only. Do not invent a symbol or legal suffix.
- Avoid generic green agriculture templates, decorative leaves, livestock mascots, startup gradients, glass effects, oversized pills, fake dashboards, and unverified proof.
- Product, service, and audience content must be factual and non-hyperbolic.

## Color tokens

```css
:root {
  --color-forest: #163d32;
  --color-forest-deep: #0f2e26;
  --color-forest-soft: #31584d;
  --color-brass: #c69a39;
  --color-brass-dark: #8d6b21;
  --color-cream: #f5f1e8;
  --color-cream-deep: #e9e1d3;
  --color-charcoal: #202521;
  --color-muted: #646a64;
  --color-white: #ffffff;
  --color-border: #cfc8bb;
  --color-success: #2f6a4f;
  --color-danger: #9b3a32;
}
```

- Cream and white comprise 70–80% of visible surfaces.
- Forest and charcoal comprise 15–25% and carry structure.
- Brass is 5% or less, normally reserved for one primary conversion signal per viewport.
- No decorative gradients or translucent glass surfaces.
- Semantic colors are reserved for form feedback.

## Typography

```css
:root {
  --font-ar: "IBM Plex Sans Arabic", "Noto Sans Arabic", Tahoma, sans-serif;
  --font-latin: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
}
```

- Arabic uses IBM Plex Sans Arabic; English uses IBM Plex Sans. Use weights 400, 500, and 600 only.
- Display: `clamp(2.45rem, 5.4vw, 5.2rem)`, line-height 1.02–1.12, weight 600.
- H2: `clamp(2rem, 3.8vw, 3.6rem)`, line-height 1.08–1.18.
- H3: `clamp(1.15rem, 1.8vw, 1.5rem)`.
- Body: 16–18px; line-height 1.65–1.85 in Arabic and 1.55–1.7 in English.
- Maximum measure: 55ch Arabic and 62ch English.
- Latin display type may use slight negative tracking; Arabic never uses artificial letter spacing.
- Do not shrink Arabic to force matching line breaks.

Implementation note: the shipped static files use the local-first `Tahoma` (Arabic) and `Segoe UI` (English) stacks so the site remains self-contained and console-clean in restricted or offline environments. IBM Plex remains the preferred future self-hosted family if properly licensed font files are supplied.

## Spacing and grid

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-30: 7.5rem;
}
```

- Maximum content width: 1240px.
- Desktop: 12 columns with 24px gutters and 48px outer margin at 1440px.
- 1024px: 32px outer gutter and 20px internal gaps.
- 768px: 24px outer gutter and an 8-column conceptual grid.
- 390px: 18px outer gutter and a single reading column.
- Main section rhythm: 112–128px desktop, 88px tablet, 64px mobile.
- Favor 7/5, 8/4, and 5/7 spans. Avoid equal three-card grids as the dominant rhythm.
- Alternate dense commercial strips and open editorial sections.

## Geometry, borders, and depth

```css
:root {
  --radius-none: 0;
  --radius-sm: 3px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --shadow-lift: 0 18px 45px rgb(15 46 38 / 10%);
  --shadow-focus: 0 0 0 3px rgb(198 154 57 / 28%);
}
```

- Borders before shadows.
- Most modules use square, 3px, or 8px corners.
- Reserve 14px for large media frames and the mobile navigation panel.
- Never use fully rounded content cards; pills are limited to compact filter or locale controls.
- Use shadows only for temporary layers or a deliberately raised CTA.

## Buttons and links

- Primary quote action: brass fill, forest-deep text, 48–54px minimum height, 3–8px radius, 1px brass border, weight 600.
- Secondary action: transparent or white with a forest border and forest text.
- Dark-surface action: white or brass with strong focus contrast.
- Text links remain charcoal/forest and underline on hover or focus.
- All controls need default, hover, focus-visible, active, and disabled states.
- Minimum target size is 44×44px.

## Forms

- Visible labels above controls; placeholders never replace labels.
- Controls are 50–54px high; textareas are at least 120px.
- Use a 1px neutral border and a forest/brass focus treatment.
- Inputs inherit page direction and use logical alignment.
- Required and error states use text, not color alone.
- The quote form composes a localized, structured WhatsApp message and does not claim the message was sent.

## Product cards and modules

- Product card anatomy: image, category, product name, factual description, and quote action.
- No specifications table until verified product data exists.
- Audience modules use a strong label, title, and one-line procurement need.
- Process modules are four bordered steps connected by alignment rather than decorative arrows.
- Services use larger editorial blocks or a compact list; avoid icon-per-heading repetition.
- Repeated components retain alignment while spans may vary to avoid template symmetry.

## Homepage rhythm

The fixed order is:

1. Header
2. Hero
3. Audience strip
4. Offering split
5. Featured products
6. Who we serve
7. Why Al Nesour
8. Services preview
9. Four-step process
10. Egypt coverage / logistics
11. Final CTA
12. Footer

The hero is open and type-led with one documentary media block. Product presentation may be asymmetric at wide widths. The process is denser and grid-led. Coverage opens the composition again before the final deep-forest CTA.

## Imagery

- Documentary industrial agriculture: bulk handling, material texture, storage, loading, inspection, and transport.
- Crop close and architectural. Prioritize product texture, machinery, and operational scale over staged people.
- Use restrained saturation, natural light, 4:5 product crops, 3:2 editorial crops, and wide 16:9 hero crops.
- Avoid decorative leaves, livestock portraits, smiling teams, glossy CGI silos, and generic farm panoramas.
- Alt text describes the operation, not the mood.
- Generated project imagery is treated as original illustrative photography and not as proof of a specific Al Nesour facility.

## Motion

- Control feedback: 160–240ms.
- Optional section entrance: 420–560ms using opacity and 8–16px transforms only.
- One restrained hero reveal is the signature motion.
- No parallax, looping grain, autoplay media, or cursor effects.
- Respect `prefers-reduced-motion: reduce` and remove nonessential motion.

## Responsive behavior

- 1440px: 1240px container, 12 columns, split hero, full navigation, persistent quote CTA.
- 1024px: reduced gaps; hero remains split; audience strip may wrap without shrinking text.
- 768px: mobile navigation appears; split sections stack in reading order; process becomes 2×2.
- 390px: one-column flow, 39–44px display type, full-width primary actions where useful, vertical process, no horizontal scrolling.
- Also verify 360px and 430px during overflow checks.

## RTL/LTR contract

- Arabic pages use `lang="ar" dir="rtl"`; English pages use `lang="en" dir="ltr"`.
- Arabic is the source composition; English mirrors through shared logical CSS.
- Use `margin-inline`, `padding-inline`, `inset-inline`, `border-inline`, and `text-align: start`.
- Do not mirror photography automatically.
- Mirror only directional reading arrows; menu, close, phone, and location icons remain universal.
- Mixed-language names use `dir="auto"` or isolated spans.
- Form values, errors, placeholders, and WhatsApp messages follow the page locale.

## Content guardrails

- Confirmed products only: Soybean Hulls / قشر الصويا, and working-name Degummed Soybean Oil / زيت منزوع.
- The English trade name **Degummed Soybean Oil** must remain flagged for owner confirmation.
- Do not publish prices, specifications, origins, packing, minimum orders, delivery windows, certifications, or customer/supplier names without confirmation.
- Confirmed audiences: traders, feed factories, and large farms.
- Primary conversion: quote request through WhatsApp `201022232052`.

## Implementation contract

- Semantic HTML5, shared CSS custom properties, CSS Grid/Flexbox, logical properties, and vanilla JavaScript only.
- Progressive enhancement keeps headings, core copy, navigation, contact routes, and no-script product content useful.
- Provide skip links, visible focus, native semantics, keyboard-operable menu/filtering, correct heading order, accessible validation, and reduced-motion support.
- Keep language pages structurally equivalent and map the language switch to the corresponding page.
