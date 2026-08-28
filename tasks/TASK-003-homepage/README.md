# TASK-003 — Homepage

## Status

**Status:** Complete (2026-08-27)
**Priority:** High
**Depends on:** TASK-001 and TASK-002 — Complete
**Primary page:** `index.html`
**Primary language:** Arabic

---

# 1. Purpose

Redesign and implement the Arabic homepage of Al Nesour Feeds using the approved content, visual system, and global shell.

TASK-003 is the first page-specific implementation task.

The objective is not to add more sections or visual effects.

The objective is to create a homepage that immediately communicates:

- what Al Nesour supplies;
- who it supplies;
- why the company is credible;
- what products are available;
- how supply works;
- how to request today's price.

The homepage should feel like a real Egyptian B2B feed-supply company, not an editorial corporate template.

---

# 2. Authority

Follow, in order:

1. `AGENTS.md`
2. `DESIGN.md`
3. TASK-001 approved content and brand decisions
4. TASK-002 global shell
5. this TASK-003 brief

Relevant TASK-001 reference:

`tasks/TASK-001-brand-content-visual-direction/ST-06-07-homepage-content-and-copy.md`

Do not replace confirmed business facts with assumptions from OpenDesign or older source files.

---

# 3. Scope

TASK-003 redesigns:

`index.html`

and the homepage-specific styles and behavior required by it.

It may update:

- `assets/css/styles.css`
- `assets/js/products.js`
- homepage-specific shared components where strictly necessary
- tests related to the homepage

Do not redesign unrelated inner pages.

---

# 4. English Homepage

The English homepage is not the primary implementation target of TASK-003.

`en/index.html` must remain:

- functional;
- responsive;
- accessible;
- compatible with shared CSS.

Do not perform the final English content rewrite in TASK-003.

If shared homepage CSS would break the current English homepage, isolate the new Arabic homepage implementation cleanly rather than redesigning English prematurely.

Final English parity will be handled in its dedicated task.

---

# 5. OpenDesign Requirement

Before final homepage implementation:

1. inspect the current approved `DESIGN.md`;
2. inspect the approved TASK-001 homepage architecture;
3. use OpenDesign for focused Homepage composition exploration;
4. evaluate the result rather than automatically copying it;
5. document which layout ideas were adopted and rejected.

OpenDesign should help answer:

- Hero composition
- information hierarchy
- section rhythm
- product-preview presentation
- proof presentation
- audience presentation
- supply-process presentation
- mobile section flow

Do not allow OpenDesign to invent business facts.

---

# 6. Homepage Character

The homepage should feel:

- commercial;
- direct;
- modern;
- established;
- operational;
- product-aware;
- B2B;
- easy to scan;
- relevant to the Egyptian feed market.

Avoid:

- editorial magazine layout;
- SaaS landing-page style;
- oversized empty sections;
- excessive decorative numbering;
- border-heavy corporate grids;
- generic agricultural leaves;
- decorative livestock illustrations;
- fake luxury;
- unnecessary animation.

---

# 7. Homepage Flow

Use the following overall flow unless OpenDesign produces a clearly better owner-reviewable composition:

1. Global Header
2. Hero
3. Trust / Proof
4. Featured Products
5. Product Categories
6. Why Al Nesour
7. Who We Serve
8. Supply & Delivery
9. Supply Process
10. Final CTA
11. Global Footer

Sections should flow naturally.

Avoid making every section visually independent like a stack of unrelated cards.

---

# 8. Critical Hero Decision

The current split Hero design must not be carried forward.

Do NOT use:

```text
text column | separate image card
```

The approved direction is:

```text
Full Hero background image
        ↓
restrained semi-transparent green overlay
        ↓
content container
        ↓
eyebrow
H1
supporting text
CTAs
```

The image should define the Hero environment.

The text should sit over the image.

---

# 9. Hero Technical Structure

Preferred implementation:

```html
<section class="home-hero">
  <div class="home-hero-media" aria-hidden="true">
    <img ... />
  </div>

  <div class="home-hero-overlay"></div>

  <div class="container home-hero-content">...</div>
</section>
```

or an equivalent semantic structure.

Prefer a real `<img>` / `<picture>` element over a CSS background if this provides better:

- responsive images;
- intrinsic dimensions;
- preload behavior;
- performance control;
- later asset replacement.

The image is visual context rather than informational content, so an empty alt may be appropriate if the visible text already communicates the information.

---

# 10. Hero Image — Current Task Rule

**Do not generate a new final Hero image during TASK-003 planning or initial implementation.**

The owner wants to think about imagery later.

Therefore:

- use an existing suitable repository image only as a temporary placeholder if necessary;
- clearly mark it as temporary in task documentation;
- do not treat it as approved final photography;
- build the Hero so replacing the image later requires no layout rewrite.

No image-generation conversation is required yet.

---

# 11. Future Hero Image Requirements

The future final Hero image should eventually be designed around the layout.

It will need:

- realistic industrial feed-supply setting;
- documentary photography style;
- natural light;
- commercial quantities;
- warehouse / materials / loading / supply activity;
- no visible external brands;
- no fake text;
- no logos;
- no unrealistic machinery;
- enough negative space behind the Hero copy;
- crop flexibility for desktop and mobile.

Do not generate it now.

---

# 12. Hero Overlay

Use an operational-green overlay.

The overlay must:

- preserve visible image detail;
- provide strong text contrast;
- avoid making the image irrelevant;
- avoid looking like a solid green rectangle.

Do not hard-code the final opacity based only on the temporary image.

The final overlay may later be adjusted when the final Hero image is approved.

A restrained gradient may be used if it provides better copy readability.

Avoid heavy black gradients.

---

# 13. Hero Height

The Hero should feel substantial but not waste screen space.

Desktop should show:

- headline;
- supporting text;
- CTAs;
- meaningful image context

without forcing the user to scroll through an oversized near-full-screen billboard.

Mobile Hero height should be content-driven.

Avoid fixed viewport-height layouts that cause problems on phones.

---

# 14. Hero Copy

Approved direction:

### Eyebrow

**توريد خامات وأعلاف للقطاع التجاري**

### H1

**خامات أعلاف وأعلاف جاهزة بكميات تناسب نشاطك**

### Supporting copy

**نوفر للتجار ومصانع الأعلاف والمزارع الكبرى خامات أعلاف وأعلافًا جاهزة، مع توريد مباشر من المصانع وتنسيق التوصيل إلى جميع محافظات مصر.**

Primary CTA:

**اطلب سعر اليوم**

Secondary CTA:

**تصفح المنتجات**

The wording may receive minor typographic or punctuation cleanup.

Do not change its commercial meaning without owner review.

---

# 15. Hero CTA Behavior

Primary:

`اطلب سعر اليوم`

Destination:

`contact.html`

Secondary:

`تصفح المنتجات`

Destination:

`products.html`

Primary CTA must clearly dominate visually.

Do not introduce three or four competing Hero actions.

---

# 16. Hero Readability

Ensure:

- strong contrast;
- comfortable H1 width;
- readable Arabic line-height;
- no text directly over a visually busy subject;
- CTA visibility;
- mobile text does not become too small.

Avoid extremely narrow H1 measures that create five or six short lines.

---

# 17. Trust / Proof Section

The Proof section should communicate confirmed facts quickly.

Use:

- خبرة تتجاوز 20 عامًا في سوق الأعلاف
- توريد مباشر من المصانع
- تنسيق التوريد والتوصيل لجميع المحافظات
- خامات أعلاف وأعلاف جاهزة للطلبات التجارية

Do not invent statistics.

---

# 18. Proof Design

Do not repeat the rejected arbitrary style:

```text
20
EG
01
B2B
```

unless the label itself carries useful meaning.

The proof area should prioritize understandable statements.

Possible visual approaches:

- compact four-item trust bar;
- icon + short statement;
- typography-led proof row.

Avoid decorative numbering.

Use icons only if they improve comprehension.

Do not introduce a large icon library for four icons.

---

# 19. Experience Wording

When mentioning experience, use:

**خبرة تتجاوز 20 عامًا في سوق الأعلاف**

or an approved equivalent.

Do not imply:

**شركة تأسست منذ 20 سنة**

unless a founding date is later confirmed.

---

# 20. Featured Products Goal

Products should appear early enough for a buyer to immediately understand what can be supplied.

The homepage is not the full catalogue.

The product preview should answer:

**What can I ask Al Nesour about today?**

---

# 21. Featured Product Source

Use only enabled product data from:

`assets/js/products-data.js`

Never hard-code a separate contradictory homepage product list.

Only:

```js
enabled === true;
```

products may appear.

Featured homepage logic should use:

```js
featured === true;
```

where appropriate.

---

# 22. Homepage Product Presentation

Avoid showing all catalogue entries if that makes the Homepage long or repetitive.

Recommended homepage grouping:

### قشر الصويا

Present as a product family:

- ناعم
- وسط
- خشن

rather than necessarily rendering three visually identical cards.

### قشر فول

Standalone item.

### زيت منزوع

Standalone item.

### الأعلاف الجاهزة

Introduce as a category/family containing:

- علف مواشي
- علف بط
- علف غنم

The full Products page will handle deeper catalogue presentation later.

---

# 23. Product Copy

Section direction:

### Eyebrow

**منتجاتنا**

### Heading

Prefer:

**خامات وأعلاف لطلبات التوريد التجاري**

or another short, specific commercial heading.

Do not restore generic language such as:

**منتجات واضحة لطلبات توريد أسرع**

The TASK-001 brief specifically identified this type of wording as weak.

---

# 24. Product CTA

Product-level CTA direction:

**اسأل عن السعر والتوفر**

or:

**اطلب سعر اليوم**

Click behavior may route to Contact initially.

The future Products / Contact tasks may create more specific pre-filled quote behavior.

Do not over-engineer it now.

---

# 25. Product Images

Do not create final new product images in TASK-003.

Existing assets may remain temporary.

However:

- do not use one misleading image to imply multiple visually different products are identical;
- do not duplicate a single finished-feed sack image across the page in a way that feels fake.

Where image quality is insufficient, use a restrained placeholder presentation and record the image requirement for later.

---

# 26. Product Categories Section

Communicate the two major supply directions:

## خامات الأعلاف

Short copy:

**خامات للتجار والمصانع والمزارع، مع مرونة في التوريد حسب المنتج والكمية.**

## الأعلاف الجاهزة

Short copy:

**أعلاف مُصنّعة للمواشي والبط والغنم حسب نطاق المنتج والتوافر.**

This section should clarify the offer rather than duplicate the product cards.

---

# 27. Categories Visual Design

Avoid the current heavy two-card composition if it feels like another large Hero.

Explore:

- asymmetric media/text composition;
- compact category panels;
- strong typography with image support;
- useful direct links.

The two categories should feel clearly related.

Do not create a visually unrelated design for each category.

---

# 28. Why Al Nesour

The section should convert business capabilities into buying reasons.

Approved facts:

- أكثر من 20 عامًا من الخبرة في السوق
- توريد مباشر من المصانع
- أسعار تنافسية
- كميات تجارية
- مصادر توريد متنوعة
- تنسيق النقل والتوصيل

---

# 29. Why Al Nesour Copy Direction

Avoid:

**توريد عملي يركز على احتياج نشاطك**

and similar generic wording.

Possible direction:

**ليه شركات وتجار الأعلاف يتعاملوا مع النسور؟**

may be too conversational for the approved brand tone.

Preferred professional direction:

**ما الذي يميز التوريد من النسور؟**

or:

**مزايا تدعم طلبات التوريد التجارية**

Select the best option through content/design review.

The final heading should be natural Arabic, not marketing filler.

---

# 30. Why Al Nesour Layout

Do not automatically use six boxed numbered cards.

Explore:

- 2×3 lightweight capability grid;
- icon-led list;
- divided columns;
- text-led benefits.

Use cards only if cards improve scanning.

No arbitrary `01 / 02 / 03`.

---

# 31. Who We Serve

Required audiences:

- التجار
- مصانع الأعلاف
- المزارع الكبرى

Heading direction:

**للتجار والمصانع والمزارع الكبرى**

Each audience should receive one practical message.

---

# 32. Audience Copy

## التجار

**خامات وأعلاف بكميات تدعم حركة التوزيع والطلبات المتكررة.**

## مصانع الأعلاف

**خامات للمدخلات التشغيلية مع تنسيق حسب المنتج والكمية المطلوبة.**

## المزارع الكبرى

**أعلاف وخامات مع تنظيم واضح للكمية ومكان التسليم.**

Do not invent specialized services for one audience without confirmation.

---

# 33. Audience Design

Make audience types easy to identify.

Possible approaches:

- three clean columns;
- typographic segmented layout;
- subtle contextual imagery later.

Do not require new images for this section in TASK-003.

---

# 34. Supply & Delivery Section

Primary message:

**تنسيق التوريد والتوصيل إلى جميع المحافظات**

Supporting copy:

**حدد المنتج والكمية والمحافظة، وسنتواصل معك لتنسيق تفاصيل التوريد والتسليم المناسبة لطلبك.**

This section should communicate operational reach without inventing:

- delivery times;
- fleet size;
- warehouses;
- routes;
- tonnage.

---

# 35. Egypt Visual

The old CSS-generated abstract Egypt graphic should not automatically be preserved.

Evaluate whether it genuinely improves the section.

Options:

- simple accurate Egypt-outline graphic;
- restrained logistics visual;
- no map at all if copy is stronger without it.

Do not use a distorted decorative pseudo-map just because one currently exists.

No new generated map image is required in TASK-003.

---

# 36. Supply Process

Add the approved process section.

Heading:

**ابدأ طلبك في أربع خطوات**

Steps:

1. أرسل اسم المنتج واحتياجك.
2. حدد الكمية ومكان التسليم.
3. استلم السعر والتوفر حسب طلبك.
4. نسق تفاصيل التوريد والتسليم.

This is one place where sequential numbering is appropriate.

---

# 37. Process Design

The process should be:

- visually simple;
- easy to scan;
- obviously sequential.

Numbering `1–4` is allowed here because order matters.

Avoid large cards that consume excessive vertical space.

---

# 38. Final CTA

Heading:

**اطلب سعر اليوم حسب احتياجك**

Supporting text:

**أرسل المنتج والكمية ومكان التسليم عبر واتساب للاستفسار عن السعر والتوفر.**

CTA:

**ابدأ عبر واتساب**

This CTA may link directly to:

`https://wa.me/201022232052`

if no structured form data is required.

Do not falsely state that a message has already been sent.

---

# 39. Section Rhythm

Avoid repeating:

```text
eyebrow
giant heading
paragraph
large cards
```

for every single section.

Create rhythm through controlled variation.

For example:

- Hero: image-led
- Proof: compact
- Products: card/media-led
- Categories: split composition
- Why: text capability grid
- Audience: simple columns
- Delivery: strong two-part section
- Process: sequential
- CTA: dark conversion band

The page should feel designed as one journey.

---

# 40. Background Rhythm

Use approved surfaces intentionally.

Suggested rhythm:

- Hero: image + dark green overlay
- Proof: deep/medium green or warm surface depending composition
- Products: light
- Categories: alternate neutral
- Why: light/warm
- Audience: controlled dark section if useful
- Delivery: light
- Process: warm neutral
- Final CTA: forest

Do not alternate colors mechanically.

---

# 41. Decorative Elements

Do not add decorative elements simply to fill space.

Avoid:

- random circles;
- gold lines everywhere;
- giant background text;
- leaf patterns;
- fake charts;
- abstract blobs;
- excessive eagle watermarks.

Every visual element should support:

- hierarchy;
- navigation;
- trust;
- product understanding;
- conversion.

---

# 42. Motion

Homepage may use subtle interaction feedback.

Allowed:

- button hover
- product-card image scale of only a few percent
- subtle link state
- restrained reveal only if proven useful

Avoid:

- scroll-jacking;
- parallax;
- autoplay video;
- carousels;
- counters;
- animated statistics;
- dramatic entrance animations.

Honor `prefers-reduced-motion`.

---

# 43. Responsive Hero

At mobile sizes:

- background image remains full Hero media;
- text must remain readable;
- copy should not sit over the most visually complex part;
- CTAs may stack;
- no fixed desktop crop assumptions.

If the temporary image does not crop well on mobile, use:

- `object-position`;
- responsive `<source>`;
- or a later mobile crop.

Do not generate a separate final mobile image yet.

---

# 44. Responsive Product Preview

At desktop:

choose the grid based on content, not a fixed arbitrary five-column structure.

At tablet/mobile:

- cards should collapse naturally;
- no tiny three-column mobile products;
- content height should not be artificially equalized if it harms readability.

Prefer:

```css
repeat(auto-fit, minmax(...))
```

or another robust strategy.

---

# 45. Mobile Content Priority

On mobile the most important order is:

1. what the company supplies;
2. today's-price CTA;
3. trust;
4. products;
5. major reasons;
6. who it serves;
7. delivery;
8. process;
9. final conversion.

Avoid long introductory text before products.

---

# 46. Accessibility

Requirements:

- one H1;
- logical H2/H3 structure;
- buttons/links with clear text;
- visible focus;
- sufficient Hero text contrast;
- no text embedded inside raster images;
- decorative Hero image uses appropriate empty alt;
- semantic ordered list for process if appropriate;
- product links remain keyboard accessible.

---

# 47. Performance

The homepage currently contains relatively heavy image assets.

TASK-003 should prepare for a lighter final asset system.

Requirements:

- do not add new heavy PNGs;
- use WebP/AVIF when future images are finalized;
- set intrinsic width/height;
- lazy-load below-the-fold images;
- do not lazy-load the Hero image;
- consider Hero preload only if justified;
- avoid layout shift.

Temporary legacy images do not need to be permanently optimized if they will shortly be replaced, but do not make performance worse.

---

# 48. Hero Performance Architecture

The Hero implementation must support later:

```html
<picture>
  <source ... />
  <img ... />
</picture>
```

with:

- responsive desktop/mobile versions;
- WebP/AVIF;
- controlled object position.

Do not hard-wire the entire Hero to one CSS `background-image` URL that becomes awkward to replace.

---

# 49. SEO

TASK-003 may update Homepage-specific:

- `<title>`
- meta description
- H1 hierarchy
- image alt behavior

Do not implement:

- final canonical production URL;
- production sitemap;
- final structured data;
- x-default

until the SEO task / production domain.

---

# 50. Homepage Title Direction

Use a title that communicates the actual business.

Possible direction:

**شركة النسور للأعلاف | خامات أعلاف وأعلاف جاهزة**

Avoid keyword stuffing.

Final wording should remain concise.

---

# 51. Homepage Meta Description

Describe:

- feed raw materials;
- finished feed;
- traders / factories / farms;
- Egypt;
- supply.

Do not claim unavailable products or unsupported capabilities.

---

# 52. Existing Code Cleanup

During TASK-003 remove homepage-specific CSS that becomes obsolete.

Examples may include old:

- `.hero-media`
- `.choice-grid`
- arbitrary proof-number treatments
- old map artwork
- fixed five-column product preview

only when they are no longer used by another current page.

Do not delete shared classes without checking English or inner-page usage.

---

# 53. CSS Scoping

Prefer clearly named Homepage components.

Examples:

```text
.home-hero
.home-proof
.home-products
.home-categories
.home-benefits
.home-audiences
.home-delivery
.home-process
.home-cta
```

Avoid generic selectors that accidentally restyle inner pages.

---

# 54. JavaScript

Do not introduce homepage JavaScript unless required.

Preferred Homepage behavior should mostly be HTML/CSS.

Existing product rendering may continue using JavaScript.

Avoid JavaScript for:

- layout;
- responsive section ordering;
- simple presentational effects.

---

# 55. Product Rendering Review

Review `products.js` during TASK-003.

Ensure Homepage rendering can distinguish:

- featured preview context;
- full products-page catalogue context.

Do not make `[data-products-grid]` blindly render identical content everywhere if Homepage and Products page require different presentation.

If necessary introduce a clear context attribute such as:

```html
data-products-context="featured"
```

without breaking the Products page.

---

# 56. No New Products

Do not research or publish additional products in TASK-003.

Use only confirmed currently enabled products.

Future product expansion is a separate content decision.

---

# 57. Image Checkpoint

While implementing TASK-003, create a list of every section where final imagery would materially improve the page.

For each record:

- section;
- purpose;
- current temporary asset;
- future image requirement;
- recommended aspect ratio.

Do not generate these images.

At the end of TASK-003 we will decide which images deserve separate generation conversations.

---

# 58. TASK-003 Subtasks

## ST-01 — Homepage Audit

Review:

- current Arabic Homepage DOM;
- current Homepage CSS;
- product preview behavior;
- image usage;
- current content;
- approved TASK-001 Homepage content.

Classify current Homepage blocks:

- KEEP
- REWORK
- REMOVE
- ADD

---

## ST-02 — OpenDesign Homepage Exploration

Use OpenDesign to explore Homepage composition based on:

- approved Operational Green system;
- approved Arabic content;
- new full-background Hero requirement.

Document:

- adopted ideas;
- rejected ideas;
- content/business assumptions ignored.

Do not implement before recording the result.

---

## ST-03 — Hero

Implement:

- full-background image architecture;
- temporary existing image;
- green overlay;
- approved copy;
- primary/secondary CTA;
- responsive crop behavior;
- accessible text contrast.

No final generated image yet.

---

## ST-04 — Proof & Products

Implement:

- factual proof;
- product preview;
- soybean-hull family presentation;
- product CTA behavior.

Remove arbitrary decorative numbering.

---

## ST-05 — Categories & Benefits

Implement:

- raw-material category;
- finished-feed category;
- Why Al Nesour section.

Keep commercial copy concise.

---

## ST-06 — Audiences & Delivery

Implement:

- traders;
- feed factories;
- large farms;
- nationwide delivery/supply section.

Do not introduce unsupported logistics claims.

---

## ST-07 — Supply Process & Final CTA

Implement:

- four-step process;
- final WhatsApp conversion section.

---

## ST-08 — Homepage Cleanup

Remove superseded Homepage code safely.

Review:

- unused CSS;
- obsolete markup;
- duplicated classes;
- old decorative elements.

Do not break English or inner pages.

---

## ST-09 — Responsive / Accessibility / Performance QA

Validate:

- 1440×900
- 1024×768
- 768×1024
- 390×844

Inspect:

- Hero readability;
- image crop;
- product layout;
- section rhythm;
- CTA visibility;
- Arabic typography;
- no horizontal overflow.

---

## ST-10 — Owner Review

Prepare:

- screenshots of the implemented Homepage at required sizes;
- summary of changes;
- temporary-image list;
- remaining image-generation requirements;
- known deferred tasks.

Stop before considering TASK-003 complete until owner reviews the result.

---

# 59. Tests

Extend the maintained smoke tests to verify at least:

- Arabic Homepage loads;
- exactly one H1;
- Hero exists;
- Hero contains image/media layer;
- Hero overlay exists;
- Hero primary CTA exists;
- Products preview contains only enabled/featured content;
- disabled products never render;
- process contains four ordered steps;
- final CTA exists;
- no horizontal overflow at all required viewports;
- no JavaScript page errors;
- global Header/Footer remain functional;
- mobile navigation still works;
- Contact flow regression remains passing.

Tests must not assert fragile visual details such as exact pixel positions.

---

# 60. Formatting

Run:

```bash
npx prettier --check "**/*.{html,css,js,md,json}"
```

and:

```bash
git diff --check
```

before completion.

---

# 61. Acceptance Criteria

TASK-003 is complete only when:

- [ ] TASK-002 documentation status is reconciled from Planned to Complete.
- [ ] Homepage current implementation has been audited.
- [ ] OpenDesign Homepage exploration has been completed and documented.
- [ ] Arabic Homepage information architecture matches the approved content direction.
- [ ] Split Hero layout has been removed.
- [ ] Hero uses full-background image architecture.
- [ ] Hero uses a restrained green overlay.
- [ ] Hero copy is readable at all required viewports.
- [ ] Current Hero image is clearly documented as temporary.
- [ ] No new final Hero image has been generated.
- [ ] Primary Hero CTA is `اطلب سعر اليوم`.
- [ ] Secondary Hero CTA is `تصفح المنتجات`.
- [ ] Proof section contains only confirmed facts.
- [ ] Arbitrary `01 / 02 / 03` trust numbering has been removed.
- [ ] Product preview uses centralized product data.
- [ ] Disabled/unconfirmed products cannot render.
- [ ] Soybean-hull variants are presented coherently.
- [ ] Product categories are clear.
- [ ] Why Al Nesour section uses specific commercial benefits.
- [ ] Audience section covers traders, factories, and large farms.
- [ ] Delivery section communicates all-governorate coordination accurately.
- [ ] Supply process contains four clear steps.
- [ ] Final WhatsApp CTA is implemented.
- [ ] Homepage no longer feels like a numbered editorial corporate showcase.
- [ ] Homepage-specific obsolete CSS is cleaned where safe.
- [ ] Inner pages remain unaffected.
- [ ] English Homepage remains functional and responsive.
- [ ] Header/Footer from TASK-002 remain unchanged except necessary regression-safe integration.
- [ ] Required viewport tests pass.
- [ ] Accessibility checks pass.
- [ ] Formatting passes.
- [ ] Smoke/regression tests pass.
- [ ] Final imagery requirements are documented but not generated.
- [ ] Owner reviews Homepage screenshots before TASK-003 closes.

---

# 62. Out of Scope

Do not complete during TASK-003:

- final Hero image generation;
- final product image generation;
- final logo;
- feed-bag design;
- Products page redesign;
- Services page redesign;
- About page redesign;
- Contact flow redesign;
- full English version rewrite;
- final production SEO;
- final domain setup;
- full site QA.

---

# 63. Expected Next Task

After TASK-003 approval:

**TASK-004 — Product Data Architecture**

TASK-004 will formally stabilize:

- product model;
- categories;
- variants;
- `enabled`;
- `featured`;
- availability;
- images;
- localized names/descriptions;
- Homepage vs catalogue rendering context.

Some foundations already exist from TASK-001, but TASK-004 will make the architecture deliberate and final before the full Products page redesign.

---

# 64. Final Principle

The Homepage should answer the buyer's main questions without forcing them to read the whole site:

**بتوفروا إيه؟**

**بتوردوا لمين؟**

**ليه أتعامل مع النسور؟**

**هل التوريد متاح لمحافظتي؟**

**أطلب السعر إزاي؟**

The visual design should make these answers easier to understand—not compete with them.
