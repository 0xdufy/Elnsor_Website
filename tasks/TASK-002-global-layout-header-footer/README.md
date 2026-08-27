# TASK-002 — Global Layout, Header & Footer

## Status

**Status:** Complete (2026-08-27)
**Priority:** High
**Depends on:** TASK-001 — Complete and approved
**Implementation scope:** Global site shell only

---

# 1. Purpose

Implement the approved global visual foundation of the Al Nesour Feeds website before redesigning individual page content.

This task establishes the reusable layout behavior shared across all Arabic and English pages:

- typography
- design tokens
- global spacing
- container behavior
- header
- desktop navigation
- mobile navigation
- language switching
- global CTA treatment
- footer
- accessibility behavior
- responsive global-shell behavior

This task must create a stable foundation so later page-specific tasks can focus on their own content instead of repeatedly fixing navigation or layout infrastructure.

---

# 2. Authority

Implementation must follow:

1. `AGENTS.md`
2. `DESIGN.md`
3. Approved TASK-001 decisions
4. This TASK-002 brief

If an older implementation conflicts with the approved TASK-001 design direction, the approved direction takes precedence.

---

# 3. Important Scope Rule

TASK-002 is a **global-layout implementation task**.

Do not redesign individual page content sections during this task.

Do not redesign:

- Homepage sections
- Products catalogue
- Services content
- About content
- Contact form flow

unless a minimal structural adjustment is strictly required for the global shell to work.

Page redesign belongs to later tasks.

---

# 4. Required Pages

The global shell must work consistently across all current pages.

## Arabic

- `index.html`
- `about.html`
- `products.html`
- `services.html`
- `contact.html`

## English

- `en/index.html`
- `en/about.html`
- `en/products.html`
- `en/services.html`
- `en/contact.html`

Every page must receive the same approved global-shell behavior.

---

# 5. Technology

Keep:

- HTML5
- CSS3
- Vanilla JavaScript

Do not introduce:

- React
- Angular
- Vue
- Tailwind
- Bootstrap
- jQuery
- a required build system
- client-side templating frameworks

The website must remain deployable as a static site.

---

# 6. Static Markup Strategy

Header and footer markup may remain directly present in each HTML page.

Do not move essential navigation into JavaScript-generated markup merely to avoid duplication.

Reasons:

- navigation should remain available if JavaScript fails;
- semantic HTML should exist directly in the document;
- static deployment should remain simple;
- accessibility and SEO should not depend on runtime injection.

Shared visual behavior belongs in CSS.

Interactive navigation behavior belongs in minimal shared JavaScript.

The repeated HTML structure must remain intentionally consistent across all pages.

---

# 7. Approved Visual Direction

Use the approved TASK-001 direction:

**Operational Green**

The site should feel:

- commercial
- practical
- trustworthy
- modern
- supply-chain focused
- Egyptian B2B
- premium but not luxurious

Use:

- warm neutral reading surfaces
- deep operational green for hierarchy
- brass/gold for primary conversion emphasis

Avoid:

- metallic luxury styling
- large decorative gradients
- glassmorphism
- overly editorial layouts
- excessive borders
- excessive shadows
- generic startup UI
- cartoon agriculture elements

---

# 8. Design Tokens

Implement the approved design-system tokens from `DESIGN.md`.

Current approved base:

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

Do not retain obsolete tokens merely because the current CSS uses them.

Where useful:

- migrate old variable names;
- remove unused token definitions;
- avoid duplicate color values outside the token system.

Any new token must have a clear reusable purpose.

---

# 9. Typography

Implement:

## Arabic

**IBM Plex Sans Arabic**

Fallback:

```css
Tahoma, Arial, sans-serif
```

## English

**IBM Plex Sans**

Fallback:

```css
Arial, sans-serif
```

Typography must be optimized for:

- readability
- Arabic RTL
- mobile
- commercial UI
- headings
- buttons
- navigation
- forms

---

# 10. Font Loading

Select a sensible production-ready font-loading strategy.

Requirements:

- avoid significant layout shift;
- use `font-display: swap`;
- do not block page rendering unnecessarily;
- avoid loading unused font weights;
- use only required font families and weights.

Preferred weights:

- 400
- 500
- 600
- 700

Do not introduce large unnecessary typography dependencies.

---

# 11. Global Typography Scale

Define a consistent responsive type scale.

Avoid the current oversized editorial feeling.

The system should clearly separate:

- body
- small supporting text
- navigation
- eyebrow / label
- H3
- H2
- H1

Headings should scale using `clamp()` where appropriate.

The system must work in Arabic without creating:

- extremely tall headlines;
- awkward line breaks;
- excessive vertical space.

---

# 12. Body and Global Surface

The main body surface should use the approved warm neutral direction.

Default page background:

`--sand-50`

Use white selectively for:

- cards
- forms
- high-readability surfaces

Deep green should be reserved for intentional visual hierarchy.

Do not make every section green.

---

# 13. Global Container

Implement one shared content container.

Approved maximum:

**1240px**

Responsive horizontal gutter:

- approximately 18px mobile
- 28px tablet
- 48px desktop

Use logical CSS properties.

Example direction:

```css
.container {
  width: min(...);
  margin-inline: auto;
}
```

Do not duplicate RTL/LTR container rules.

---

# 14. Global Spacing

Base spacing scale:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96
- 128px

Do not use random spacing values throughout components when an existing scale value works.

---

# 15. Global Section Rhythm

Page-specific tasks will control their individual composition.

TASK-002 should nevertheless define reusable section spacing.

Approximate direction:

- mobile: 64px
- tablet: 88px
- desktop: 112–128px

Do not force every section to use identical spacing.

Provide utilities/components that future tasks can apply deliberately.

---

# 16. Header Goal

Create a professional global header suitable for Al Nesour Feeds.

The header must:

- establish the brand immediately;
- provide easy navigation;
- expose the language switch;
- keep the quote CTA visible;
- work correctly in RTL and LTR;
- remain compact;
- avoid consuming excessive screen height.

---

# 17. Brand Lockup in Header

TASK-002 does not create the final logo.

Until the final logo task is completed, use the approved temporary wordmark.

Arabic version should prioritize:

**شركة النسور للأعلاف**

Supporting English:

**Al Nesour Feeds**

English version may reverse hierarchy appropriately.

The markup must allow a future eagle-logo asset to be inserted without redesigning the header.

---

# 18. Future Logo Slot

Design the brand area so it can later support:

```text
[ Eagle icon ] [ Arabic Wordmark ]
               [ English supporting name ]
```

The future logo icon must not require changing:

- navigation position
- header height significantly
- CTA positioning
- mobile structure

Do not create or invent the final logo during TASK-002.

---

# 19. Desktop Header

Desktop header should contain:

1. Brand / wordmark
2. Primary navigation
3. Language switch
4. Primary CTA

Arabic navigation:

- الرئيسية
- من نحن
- المنتجات
- خدماتنا
- تواصل معنا

English navigation:

- Home
- About
- Products
- Services
- Contact

---

# 20. Header Primary CTA

Approved CTA:

**اطلب سعر اليوم**

English equivalent:

**Request Today's Price**

or an equivalent approved natural English phrase.

The CTA should visually dominate the language switch and standard navigation links without making the header overly heavy.

Use the approved brass primary-button treatment.

---

# 21. CTA Destination

The header CTA may initially route to:

`contact.html`

or:

`en/contact.html`

according to locale.

Do not automatically open WhatsApp directly from every global CTA unless the later contact-flow task explicitly changes that strategy.

The Contact page remains the structured quote-entry point for now.

---

# 22. Sticky Header

A sticky header is allowed and recommended if it improves conversion and navigation.

If implemented:

- keep it compact;
- avoid large shadows;
- avoid dramatic animation;
- do not cover anchor targets;
- ensure mobile viewport usability;
- preserve contrast over all page surfaces.

A subtle background/border or minimal shadow may appear after scroll.

---

# 23. Desktop Navigation State

The current page should be identifiable.

Use:

```html
aria-current="page"
```

Do not rely on color alone if a subtle additional indicator improves clarity.

Avoid large underline animations or decorative navigation effects.

---

# 24. Header Hover / Focus

Navigation must have:

- clear hover state;
- visible keyboard focus;
- active/current state.

Interaction feedback:

approximately 150–220ms.

No animated sliding navigation effects that distract from content.

---

# 25. Mobile Header

Mobile header must remain compact and clear.

Required visible elements:

- brand
- language option or accessible access to it
- menu trigger
- clear route to the quote action

Avoid placing too many controls in the top row.

---

# 26. Mobile Menu Button

Use a real:

```html
<button></button>
```

Requirements:

- meaningful accessible label;
- `aria-expanded`;
- `aria-controls`;
- visible focus state;
- minimum touch target approximately 44×44px.

Do not use a decorative character without an accessible name.

---

# 27. Mobile Navigation

The mobile menu may use:

- compact dropdown
- slide-down panel

Avoid:

- full complex mega menu
- unnecessary side drawer dependencies
- third-party menu libraries

The menu should contain:

- all navigation items
- language switch
- primary quote CTA

---

# 28. Mobile Menu Behavior

Required behavior:

- closed by default;
- toggles correctly;
- updates `aria-expanded`;
- keyboard accessible;
- no horizontal overflow;
- menu closes after selecting a navigation item where appropriate;
- should not trap keyboard focus incorrectly.

Optional improvements:

- close on `Escape`;
- close when viewport changes to desktop.

Keep JavaScript small.

---

# 29. RTL / LTR Navigation

Use the same structural approach for Arabic and English.

Do not create two unrelated navigation implementations.

Use:

- CSS logical properties
- document direction

Directional icons, if used, must adapt to RTL/LTR correctly.

---

# 30. Language Switch

Arabic page:

`EN`

English page:

`AR`

The language control must always link to the equivalent page.

Examples:

```text
products.html
→ en/products.html

en/services.html
→ ../services.html
```

Never send all language switches to the homepage.

---

# 31. Global Buttons

Create reusable button styles:

## Primary

- brass fill
- dark readable foreground
- strong conversion emphasis
- approximately 48px minimum height

## Secondary

- forest border
- forest text
- light/transparent surface

## Dark-background variant

When necessary, provide a valid accessible treatment for dark sections.

Do not create many button variants without need.

---

# 32. Button States

Buttons/CTA links must support:

- hover
- focus-visible
- active

Avoid:

- large movement
- scale animation
- dramatic shadows

Small translate or tonal feedback is acceptable if subtle.

---

# 33. Skip Link

Every page must have a functional skip link.

Arabic:

`تجاوز إلى المحتوى`

English:

`Skip to content`

The skip link should:

- remain visually hidden until focus;
- become clearly visible on keyboard focus;
- target the main content landmark.

---

# 34. Main Landmark

Every page should have:

```html
<main id="main"></main>
```

or another consistent skip-link target.

Only one main landmark per page.

---

# 35. Footer Goal

Create a consistent B2B footer that gives users:

- brand context;
- navigation;
- contact routes;
- language clarity;
- company trust without unnecessary content.

The footer should not become another large landing-page section.

---

# 36. Footer Visual Direction

Use:

`--forest-950`

as the main footer background.

Content should remain restrained.

Use brass only for:

- small headings
- relevant emphasis
- hover/focus accents

Do not create:

- huge footer cards
- newsletter form
- fake certification area
- client logos
- social-media icon clutter

unless later explicitly approved.

---

# 37. Footer Content

Recommended structure:

### Brand

- Company wordmark
- concise B2B description

### Quick Links

- About
- Products
- Services
- Contact

### Contact

- WhatsApp
- Facebook
- View our location

Optional:

- language switch if it improves usability

---

# 38. Footer Business Description

Arabic direction:

**شركة النسور للأعلاف — توريد خامات الأعلاف والأعلاف الجاهزة للتجار والمصانع والمزارع الكبرى.**

English should communicate the same meaning naturally.

Do not add unsupported claims.

---

# 39. Footer Contact Information

Confirmed WhatsApp:

`+20 10 2223 2052`

Destination:

`201022232052`

Facebook:

`https://www.facebook.com/AlNesourFeeds`

Map:

`https://maps.app.goo.gl/C7hu8ZJvP3u15MHq7`

Do not invent:

- email
- street address
- city
- opening hours

---

# 40. Phone Direction Handling

Phone numbers must remain visually readable inside RTL pages.

Use appropriate:

- `direction`
- `unicode-bidi`

or equivalent safe treatment.

---

# 41. Footer Bottom Row

A small bottom row may include:

- company name;
- current year;
- language-independent legal-safe wording.

Do not invent:

- registration numbers;
- tax data;
- legal entity suffixes.

Avoid unnecessary text such as:

`All rights reserved`

if it visually adds no value, though it may be included if desired.

---

# 42. Shared CSS Organization

Refactor the shared CSS to make future page tasks easier.

Recommended organization:

1. tokens
2. reset/base
3. typography
4. accessibility
5. layout primitives
6. buttons
7. header
8. navigation
9. footer
10. reusable utilities
11. existing page-specific styles
12. responsive behavior

Do not completely rewrite unrelated page CSS merely for architectural purity.

---

# 43. Existing Page Styles

TASK-002 may preserve existing page-specific styles temporarily.

The objective is to establish the new global shell without accidentally performing TASK-003 through TASK-008.

When old styles conflict with the new global system:

- isolate them;
- minimally adapt them;
- document the future cleanup.

Do not redesign the section solely because it looks outdated.

---

# 44. Shared JavaScript

`assets/js/main.js` should handle only global interactions.

Possible responsibilities:

- mobile menu
- header scroll state
- escape-to-close
- viewport behavior if necessary

Do not add:

- product logic
- quote-building logic
- page-specific animation logic

to `main.js`.

---

# 45. Accessibility

Target WCAG 2.2 AA where practical.

Required global-shell checks:

- keyboard-accessible navigation
- meaningful nav labels
- visible focus
- usable skip link
- valid menu semantics
- minimum touch target
- sufficient color contrast
- no keyboard traps
- correct `aria-current`
- correct `aria-expanded`

---

# 46. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

Disable or significantly reduce non-essential transitions.

Global navigation must remain fully usable without motion.

---

# 47. Performance

TASK-002 must not significantly increase page weight.

Avoid:

- UI libraries
- icon libraries for one or two icons
- heavy JavaScript
- multiple unnecessary font weights
- layout shifts

Header and footer should render quickly.

---

# 48. Browser / Responsive Targets

Validate at minimum:

- 1440 × 900
- 1024 × 768
- 768 × 1024
- 390 × 844

Check both:

- Arabic
- English

---

# 49. Required Responsive Review

Do not treat "no horizontal overflow" as sufficient QA.

Visually inspect:

- header height
- brand wrapping
- navigation spacing
- language switch
- CTA size
- mobile menu
- footer stacking
- typography
- touch spacing

---

# 50. Cross-Task Homepage Hero Decision

The following owner direction was captured during TASK-002 planning.

## Intended future Homepage Hero composition

The future Homepage Hero should move away from the existing:

**solid-color text area + separate side image**

layout.

Preferred direction:

**full hero background image → restrained transparent color overlay → text and CTAs layered above**

Conceptual stack:

```text
Hero background image
        ↓
semi-transparent deep-green overlay
        ↓
Hero eyebrow
Hero H1
Supporting copy
Primary / secondary CTA
```

The image should function as the Hero environment rather than a separate card beside the copy.

---

# 51. Hero Overlay Direction

Likely overlay direction:

- deep operational green;
- enough transparency to retain visible image detail;
- dark enough to maintain strong text contrast.

Do not finalize overlay opacity before testing against the final image.

Do not apply a generic heavy black overlay if green achieves sufficient contrast.

A subtle directional gradient may be considered later only if it materially improves readability.

---

# 52. Hero Text Positioning

Hero text should remain:

- readable;
- compact;
- left/right aligned according to locale flow;
- inside the global content container;
- visually separated from busy areas of the image.

The final image should eventually be generated/composed with sufficient negative space for the text area.

This requirement must inform future image generation.

---

# 53. Hero Image Status

**No final Hero image should be generated or selected during TASK-002.**

Image work remains deferred.

When the Homepage task reaches final Hero imagery:

1. define final crop;
2. define text-safe zone;
3. define desktop/mobile behavior;
4. define subject;
5. define required image dimensions;
6. open a separate image-generation conversation;
7. approve the resulting image before production use.

---

# 54. Hero Ownership

The Hero composition described above is **not implemented in TASK-002**.

It is formally handed off to:

**TASK-003 — Homepage**

TASK-002 may establish shared typography, button, container, and responsive primitives that TASK-003 will reuse.

Do not add Hero-specific styling merely to pre-implement TASK-003.

---

# 55. TASK-002 Subtasks

## ST-01 — Current Global-Shell Audit

Inspect all 10 pages.

Document differences in:

- header markup
- navigation
- mobile menu
- language switch
- CTA
- skip link
- main landmark
- footer

Determine the canonical global-shell structure.

---

## ST-02 — Apply Approved Global Design Foundation

Implement:

- approved tokens
- approved typography
- body surface
- container
- spacing primitives
- shared button system
- focus treatment

Do not redesign page sections.

---

## ST-03 — Desktop Header

Implement canonical desktop header.

Validate:

- brand hierarchy
- navigation
- current-page state
- language switch
- CTA
- RTL/LTR parity

---

## ST-04 — Mobile Navigation

Implement:

- accessible menu button
- responsive menu layout
- open/close behavior
- Escape behavior if used
- responsive transition to desktop
- Arabic/English parity

---

## ST-05 — Footer

Implement one canonical footer design across all pages.

Validate:

- brand copy
- quick links
- contact links
- phone rendering
- responsive stacking
- RTL/LTR

---

## ST-06 — Global Markup Parity

Apply the approved structure to all 10 pages.

Ensure no page remains with:

- missing mobile navigation
- missing footer
- old CTA style
- different language-switch behavior
- obsolete header markup

---

## ST-07 — Global Accessibility Review

Verify:

- skip links
- landmarks
- nav labels
- focus
- mobile-menu semantics
- touch targets
- keyboard behavior
- language/direction attributes

---

## ST-08 — Responsive & Visual QA

Render and inspect:

- 1440×900
- 1024×768
- 768×1024
- 390×844

for both locales.

Capture temporary QA screenshots if useful.

Do not establish final page-design visual regression baselines yet.

---

## ST-09 — Final Review

Document:

- files changed
- global decisions
- behavior tests
- known deferred page-specific work
- TASK-003 Hero handoff

Stop for owner review before closing TASK-002.

---

# 56. Tests

Update the retained smoke test where appropriate.

TASK-002 tests should verify at least:

- all 10 pages load;
- exactly one H1 remains;
- no horizontal overflow;
- no JavaScript errors;
- Header exists on every page;
- Footer exists on every page;
- language switch points to equivalent locale page;
- correct `aria-current`;
- mobile menu button exists;
- mobile menu opens and closes;
- `aria-expanded` updates;
- primary CTA exists;
- skip link works;
- WhatsApp quote flow remains unaffected.

Do not turn this task into the final full QA task.

---

# 57. Formatting

Before completion run:

```bash
npx prettier --check "**/*.{html,css,js,md,json}"
```

If formatting fails:

format the relevant maintained files.

---

# 58. Regression Rule

TASK-002 must not break:

- product rendering;
- product filtering;
- quote form;
- WhatsApp structured message;
- Arabic/English pages;
- existing links.

Any discovered page-specific visual weakness should be documented for its future task rather than silently redesigned.

---

# 59. Acceptance Criteria

TASK-002 is complete only when:

- [ ] TASK-001 is recorded as completed.
- [ ] All 10 pages have been inspected.
- [ ] One canonical Header structure is implemented.
- [ ] One canonical Footer structure is implemented.
- [ ] Arabic and English headers are structurally equivalent.
- [ ] Arabic and English footers are structurally equivalent.
- [ ] Mobile navigation works on every page.
- [ ] Language switching links to equivalent pages.
- [ ] Current-page navigation state is correct.
- [ ] Primary CTA is consistent.
- [ ] Approved design tokens are implemented.
- [ ] Approved typography is implemented.
- [ ] Global body/background system is implemented.
- [ ] Shared container system is implemented.
- [ ] Shared button styles are implemented.
- [ ] Visible focus states are implemented.
- [ ] Skip link exists and works on every page.
- [ ] `main` landmark exists on every page.
- [ ] No horizontal overflow exists at required viewports.
- [ ] Header remains usable at 390px.
- [ ] Footer remains usable at 390px.
- [ ] RTL behavior is correct.
- [ ] LTR behavior is correct.
- [ ] Product rendering remains functional.
- [ ] Contact/WhatsApp flow remains functional.
- [ ] Formatting check passes.
- [ ] Updated smoke tests pass.
- [ ] Responsive screenshots have been visually inspected.
- [ ] Hero background-image + overlay concept is documented for TASK-003 without being prematurely implemented.
- [ ] No final Hero image has been generated.
- [ ] Owner reviews the TASK-002 result before TASK-003 begins.

---

# 60. Out of Scope

Do not complete these in TASK-002:

- Homepage redesign
- Hero implementation
- final Hero image
- final logo
- product-page redesign
- product-image generation
- feed-bag design
- services-page redesign
- About-page redesign
- Contact-flow redesign
- final English content rewrite
- production SEO
- sitemap production URLs
- final domain configuration
- full regression suite

---

# 61. Expected Next Task

After TASK-002 owner approval:

**TASK-003 — Homepage**

TASK-003 will implement:

- the approved Homepage information architecture;
- approved Arabic copy;
- the new background-image Hero composition;
- Hero overlay;
- proof area;
- products preview;
- product categories;
- why Al Nesour;
- audiences;
- supply/delivery;
- supply process;
- final CTA.

Image-generation checkpoints will be handled separately when required.

---

# 62. Execution Rule

Work one subtask at a time.

For each subtask:

1. inspect current implementation;
2. document intended changes;
3. implement only that scope;
4. test Arabic and English;
5. run formatting;
6. update progress;
7. stop at significant owner-review checkpoints.

Do not use TASK-002 as an excuse to redesign all pages.

---

# 63. Final Principle

TASK-002 should leave the project with a professional, reliable global shell.

After completion, every page should already feel like part of the same Al Nesour Feeds website even before its page-specific redesign begins.

The Header, Footer, typography, spacing, navigation, language behavior, accessibility, and conversion hierarchy should no longer need to be reinvented by later tasks.
