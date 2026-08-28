# TASK-005 — Products Page

## Status

**Status:** Complete — owner reviewed (2026-08-28)
**Priority:** High
**Depends on:** TASK-004 — Complete after owner review
**Primary implementation:** Arabic Products page
**Primary page:** `products.html`

---

# 1. Purpose

Redesign and implement the Products page of Al Nesour Feeds using the finalized product catalogue architecture from TASK-004.

The Products page should allow a commercial buyer to quickly understand:

- what Al Nesour currently offers;
- which products are raw materials;
- which products are manufactured finished feed;
- the available soybean-hull variants;
- that current price and availability should be requested;
- how to inquire about a specific product.

The page must feel like a real B2B feed catalogue.

It must not feel like:

- an e-commerce shop;
- a supermarket grid;
- a technical specification database;
- an editorial corporate page.

---

# 2. First Housekeeping Action

Before implementation, update:

`tasks/TASK-004-product-data-architecture/README.md`

from:

`Implemented — awaiting owner architecture review before TASK-005`

to:

`Complete — owner reviewed`

The architecture was reviewed after commit:

`2cbae5b`

and approved as the basis for TASK-005.

Do not modify the TASK-004 data model unnecessarily during this housekeeping change.

---

# 3. Authority

Follow:

1. `AGENTS.md`
2. `DESIGN.md`
3. TASK-004 Product Schema
4. TASK-004 Product Inventory
5. TASK-003 Homepage visual direction
6. this TASK-005 brief

Relevant references:

- `tasks/TASK-004-product-data-architecture/PRODUCT-SCHEMA.md`
- `tasks/TASK-004-product-data-architecture/PRODUCT-INVENTORY.md`

Do not create new public products in this task.

---

# 4. Scope

TASK-005 redesigns:

`products.html`

and the product-page-specific styles and rendering behavior required by it.

It may update:

- `assets/css/styles.css`
- `assets/js/products.js`
- product-page-specific tests
- product page metadata

Do not redesign unrelated pages.

---

# 5. English Products Page

`en/products.html` must remain:

- functional;
- responsive;
- accessible;
- compatible with any shared renderer/CSS changes.

The final English website redesign remains a later task.

Do not spend TASK-005 rewriting the whole English experience.

However, product data and rendering must remain technically correct in English.

---

# 6. Current Page Problem

The existing Products page is currently too simple:

```text
Page Hero
Filters
Uniform Product Grid
```

This technically works but does not properly communicate:

- product families;
- soybean variants;
- raw vs finished offer;
- commercial supply context;
- missing/temporary imagery;
- product-specific inquiry.

TASK-005 should turn the page into a structured product catalogue rather than merely a grid of eight cards.

---

# 7. Design Goal

The page should feel:

- product-first;
- commercial;
- organized;
- easy to scan;
- substantial without being crowded;
- suitable for traders, factories, and large farms.

Use the approved:

**Operational Green**

design system.

Avoid:

- arbitrary product numbers;
- huge decorative icons;
- excessive borders;
- card overload;
- fake specifications;
- fake availability badges;
- e-commerce pricing UI.

---

# 8. OpenDesign Requirement

Before final implementation, use OpenDesign for focused exploration of the Products page.

Explore at least:

- page intro;
- category navigation;
- soybean-family presentation;
- variant presentation;
- standalone raw materials;
- finished-feed presentation;
- missing-image state;
- product inquiry CTA;
- mobile catalogue behavior.

Document:

- ideas adopted;
- ideas rejected;
- unsupported assumptions ignored.

Do not allow OpenDesign to add product facts.

---

# 9. Recommended Page Architecture

Recommended Arabic flow:

1. Global Header
2. Products Page Intro / Hero
3. Product Category Navigation
4. Raw Materials

   - Soybean Hulls family + variants
   - Fava Bean Hulls
   - Oil product

5. Finished Feed

   - Cattle Feed
   - Duck Feed
   - Sheep Feed

6. Supply / Inquiry guidance
7. Final price-inquiry CTA
8. Global Footer

The final composition may change after OpenDesign exploration if there is a clear UX improvement.

---

# 10. Page Hero

Keep the Products hero shorter and more functional than the Homepage Hero.

Do not repeat the Homepage full-background image Hero.

The Products page should quickly transition into catalogue content.

Suggested direction:

### Eyebrow

**المنتجات**

### H1

**خامات أعلاف وأعلاف جاهزة للتوريد التجاري**

### Supporting copy

**تعرف على المنتجات المتاحة واطلب سعر اليوم والتوفر حسب المنتج والكمية ومكان التسليم.**

Do not use exaggerated marketing language.

---

# 11. Hero CTA

A compact CTA may be included:

**اطلب سعر اليوم**

Destination:

`contact.html`

or a direct WhatsApp inquiry if there is no product-specific context.

Do not make the page Hero visually compete with the actual products.

---

# 12. Category Navigation

The two top-level product categories are:

- خامات الأعلاف
- الأعلاف الجاهزة

The current filter mechanism may remain if it provides value.

However, evaluate whether a category-navigation approach is clearer than a simple JS hide/show grid.

Possible options:

### Option A — Filters

- الكل
- خامات الأعلاف
- الأعلاف الجاهزة

### Option B — Section anchors

- خامات الأعلاف
- الأعلاف الجاهزة

### Option C — Hybrid

Category buttons navigate/filter while the page still has clearly labeled sections.

Choose the simplest UX.

With only eight products, do not create complex filtering/search UI.

---

# 13. No Search Box

Do not add product search in TASK-005.

There are currently only eight confirmed products.

A search box would add interface complexity without solving a real problem.

---

# 14. No E-Commerce Controls

Do not add:

- Add to cart
- Buy now
- quantity selector
- checkout
- product price cards
- stock count

The Products page is a commercial enquiry catalogue.

---

# 15. Raw Materials Section

The Raw Materials area must clearly present:

1. قشر الصويا
2. قشر فول
3. زيت منزوع

with the soybean family exposing the three variants:

- ناعم
- وسط
- خشن

---

# 16. Soybean Hulls Family

This is the most structured current product family.

Do not simply show three identical image cards without context.

Create a family presentation that first establishes:

**قشر الصويا**

and then shows the variants.

Suggested structure:

```text
قشر الصويا
Short family copy
[ image / material visual ]

ناعم
وسط
خشن
```

Each variant remains a real individual product.

---

# 17. Soybean Variant UX

Variants must remain individually identifiable and individually quotable.

Each one should expose:

- variant/public name;
- short description;
- current availability inquiry;
- quote action.

Do not visually imply that fine/medium/coarse are nutritional grades or quality levels.

They are simply confirmed product variants.

---

# 18. Soybean Family Image

The current soybean image is temporary.

It may be used as the family visual during TASK-005.

Do not generate the final image yet.

Do not repeat the exact same image three large times for all variants.

Prefer one family-level image.

---

# 19. Fava Bean Hulls

Confirmed:

**قشر فول**

There is currently no approved/trusted product image.

The page must intentionally handle this.

Do NOT:

- use the soybean-hulls image;
- use an unrelated commodity image;
- generate a fake image during TASK-005.

---

# 20. Missing Image State

Design a professional missing-image state.

Possible approaches:

- text-led product card;
- subtle product-category surface;
- small material-placeholder area;
- restrained abstract surface using brand colors.

Do not write:

**No image available**

to customers unless there is a good UX reason.

The card should simply work without an image.

---

# 21. زيت منزوع

Arabic public name remains:

**زيت منزوع**

Use the product data as the source of truth.

Do not add technical oil terminology or specifications.

The exact English commercial name remains unresolved.

Do not solve that terminology in TASK-005 without owner confirmation.

---

# 22. Finished Feed Section

Present:

- علف مواشي
- علف بط
- علف غنم

as individual products under:

**الأعلاف الجاهزة**

The section should make clear that these are manufactured finished-feed products.

Do not invent:

- formula;
- protein;
- stage;
- package size;
- target age;
- growth claim.

---

# 23. Finished Feed Family

The data model includes:

`finished-feed`

for grouped Homepage presentation.

On the full Products page, individual products should remain clearly visible.

TASK-005 should not collapse the full catalogue into only one generic Finished Feed card.

---

# 24. Finished Feed Imagery

The current image is temporary and shared.

Avoid rendering the exact same large image three times in a row if this makes the catalogue look fake.

Possible temporary treatment:

- one category/family image;
- individual products primarily text-based;
- smaller repeated image only if the design remains credible.

Do not create final feed-sack imagery yet.

---

# 25. Future Feed-Bag Artwork

Future dedicated product imagery will eventually include feed sacks for:

- cattle feed;
- duck feed;
- sheep feed.

This artwork is still deferred.

When we reach that later asset task, the owner will create/approve it in a separate image-generation conversation.

TASK-005 should prepare the layout so those images can be inserted later without redesign.

---

# 26. Product Card Information

A standard product presentation may include:

- category;
- product name;
- variant where applicable;
- short description;
- availability inquiry language;
- CTA.

Do not add unsupported attributes.

---

# 27. Availability Language

All current products use:

`availability: 'on-request'`

Customer-facing meaning:

**اسأل عن السعر والتوفر**

or a similar approved natural phrase.

Do not display:

`متوفر`

as a guaranteed statement.

---

# 28. Product CTA

Preferred product CTA:

**اسأل عن السعر والتوفر**

or:

**اطلب سعر اليوم**

Use one clear hierarchy.

Recommended:

- Card CTA: `اسأل عن السعر والتوفر`
- Main page CTA: `اطلب سعر اليوم`

---

# 29. Product-Specific WhatsApp

Product CTA should preferably open a prefilled WhatsApp message.

Example:

```text
السلام عليكم، أريد الاستفسار عن سعر وتوفر قشر صويا ناعم.

الكمية المطلوبة:
مكان التسليم:
```

Use the existing TASK-004 renderer behavior.

Do not create separate hard-coded URLs in HTML for every product.

---

# 30. Product Quote Context

The quote should use the human-readable localized name from catalogue data.

Never expose:

```text
soybean-hulls-fine
```

to the customer.

---

# 31. Product Family Quote

If a family-level CTA exists for:

**قشر الصويا**

the message can ask about:

**قشر الصويا**

without choosing a variant.

Variant-level CTAs remain available separately.

---

# 32. Catalogue Rendering Strategy

TASK-004 currently renders every individual product in catalogue context.

TASK-005 may extend catalogue rendering to support richer structures.

Preferred approach:

```html
data-products-context="catalogue"
```

The renderer may produce:

- family sections;
- variant groups;
- standalone products;
- category sections.

Do not duplicate catalogue data in HTML.

---

# 33. Data Remains Source of Truth

Do not hard-code product names/descriptions inside `products.html`.

Business product content must continue to come from:

`window.ALNESOUR_CATALOG`

Static section headings and UI instructions may remain in HTML.

---

# 34. Rendering Architecture

If needed, split rendering responsibilities inside `products.js` into clear helpers, for example:

- `renderHomepage`
- `renderCatalogue`
- `renderProductCard`
- `renderFamily`
- `renderVariant`
- `renderMissingImage`

Do not turn the file into an unnecessary component framework.

---

# 35. Product Ordering

Follow TASK-004 `sortOrder`.

Do not rely on DOM order or object insertion order.

For Arabic Products page, expected logical catalogue order:

### Raw

1. Soybean hull family

   - Fine
   - Medium
   - Coarse

2. Fava Bean Hulls
3. Oil Product

### Finished

1. Cattle Feed
2. Duck Feed
3. Sheep Feed

---

# 36. Category Counts

If useful, category navigation may show counts:

- خامات الأعلاف — 5
- الأعلاف الجاهزة — 3

But counts are optional.

If implemented, derive them from catalogue data.

Never hard-code them.

---

# 37. Product Count Language

Do not turn product counts into promotional claims.

For example avoid:

**أكثر من 8 منتجات**

because that becomes inaccurate as catalogue content changes.

---

# 38. Visual Hierarchy

The page should visually distinguish:

### Category

largest catalogue-level organization.

### Family

groups related products.

### Product / Variant

specific item a buyer can ask about.

Do not make category, family, and individual product all look like identical cards.

---

# 39. Card Design

Use the approved visual system:

- warm/light surfaces;
- restrained border;
- 12px approximate radius;
- clear typography;
- product image when valid;
- brass used primarily for conversion.

Avoid excessive shadows.

---

# 40. Product Images Ratio

Use a consistent image area where imagery exists.

Recommended:

**16:10**

or another approved close material-documentary ratio.

Avoid square e-commerce thumbnails unless OpenDesign shows a clear advantage.

---

# 41. Image Object Fit

Raw material images should be allowed to show texture/material context.

Use:

```css
object-fit: cover;
```

only if the crop remains meaningful.

Do not crop out the actual product to satisfy card geometry.

---

# 42. Final Images Still Deferred

Do not generate final product images in TASK-005.

Current image statuses remain:

- Soybean hulls — temporary
- Fava bean hulls — missing
- Oil — temporary
- Finished feed — temporary

Use these limitations deliberately.

---

# 43. Product Image Inventory

At the end of TASK-005 update/document which final images are actually needed after seeing the finished catalogue layout.

Likely future needs:

1. Soybean hulls
2. Fava bean hulls
3. Oil handling/product
4. Cattle feed sack
5. Duck feed sack
6. Sheep feed sack

Do not generate them yet.

---

# 44. No Product Detail Pages

Do not create:

```text
/products/soybean-hulls.html
/products/cattle-feed.html
```

or similar.

Current business information does not justify separate product-detail pages.

Product detail pages can be considered later if real specifications become available.

---

# 45. No Fake Specifications

Do not add interface labels such as:

- البروتين
- الرطوبة
- الوزن
- بلد المنشأ
- المكونات
- التحليل الغذائي

because we do not currently have confirmed values.

Empty specification tables are worse than not having them.

---

# 46. Trust Context

Products page may contain a compact supporting strip with verified supply strengths such as:

- توريد مباشر من المصانع
- كميات تجارية
- جميع المحافظات
- أكثر من 20 عامًا من الخبرة في سوق الأعلاف

Do not turn the page into another Homepage.

Products remain the focus.

---

# 47. Inquiry Guidance

After the catalogue, add a compact section explaining what to send when requesting a quote:

1. المنتج
2. الكمية
3. المحافظة / مكان التسليم

This helps commercial conversion.

---

# 48. Final CTA

Suggested:

### H2

**عاوز تعرف سعر منتج أو التوفر؟**

This may be slightly too conversational.

Preferred professional direction:

**اطلب السعر والتوفر حسب احتياجك**

Supporting copy:

**أرسل اسم المنتج والكمية ومكان التسليم، وسنتواصل معك لتنسيق تفاصيل الطلب.**

CTA:

**اطلب سعر اليوم**

or direct WhatsApp:

**ابدأ عبر واتساب**

Choose based on the page flow.

---

# 49. Responsive Catalogue

Desktop:

- allow generous product presentation;
- don't force excessive cards per row.

Tablet:

- preserve family/variant hierarchy.

Mobile:

- one clear column where necessary;
- filter/category navigation should remain usable;
- CTA should not overflow;
- product names should not be truncated.

---

# 50. Mobile Variant Presentation

Soybean variants should not create three huge repetitive cards on a 390px screen.

Explore a compact mobile variant presentation such as:

```text
قشر الصويا

ناعم
description + CTA

وسط
description + CTA

خشن
description + CTA
```

inside one family section.

Do not sacrifice individual quote actions.

---

# 51. Filter Mobile Behavior

If filters are retained:

- allow wrapping;
- or horizontally scroll only the compact filter row if necessary.

Do not cause whole-page horizontal overflow.

All controls require touch-friendly sizes.

---

# 52. Filter Accessibility

If filter buttons remain:

- use real `<button>`;
- maintain `aria-pressed`;
- keyboard operable;
- visible focus state.

Do not use clickable `<div>` elements.

---

# 53. Filter Results

Filtering must operate on category IDs:

- `all`
- `raw`
- `finished`

not translated text.

---

# 54. No Filter Animation Complexity

When filtering:

- show/hide products immediately or with subtle feedback.

Do not add Masonry animation or heavy transitions.

---

# 55. SEO

TASK-005 may improve:

- Products title;
- meta description;
- H1;
- heading structure.

Suggested Arabic title direction:

**منتجات الأعلاف | شركة النسور للأعلاف**

or:

**خامات الأعلاف والأعلاف الجاهزة | شركة النسور للأعلاف**

Keep it concise.

---

# 56. Meta Description

Communicate:

- feed raw materials;
- finished feed;
- commercial supply;
- price/availability inquiry.

Do not list speculative products.

---

# 57. Accessibility

Required:

- one H1;
- logical H2/H3 hierarchy;
- filter controls labelled;
- product names in headings;
- meaningful image alt text;
- decorative images use empty alt;
- product CTAs understandable out of context;
- visible focus;
- missing image cards remain semantically valid.

---

# 58. Product Heading Hierarchy

Recommended:

```text
H1 Products page title

H2 خامات الأعلاف

H3 قشر الصويا
H4/strong variant names if nested

H3 قشر فول
H3 زيت منزوع

H2 الأعلاف الجاهزة

H3 علف مواشي
H3 علف بط
H3 علف غنم
```

Use actual semantic levels based on final DOM.

Do not choose headings based only on desired font size.

---

# 59. Performance

Products page must remain lightweight.

Requirements:

- lazy-load product images;
- intrinsic dimensions;
- no carousel library;
- no filter library;
- no icon package;
- no extra framework.

Temporary large PNG feed image should not be multiplied unnecessarily.

---

# 60. JS Failure Consideration

The catalogue currently relies on JavaScript to render products.

Evaluate whether a useful fallback message should exist inside the grid:

Arabic:

**تعذر عرض المنتجات حاليًا. تواصل معنا للاستفسار عن المنتجات المتاحة.**

This is optional but useful.

If implemented, JavaScript replaces/removes it after successful rendering.

Do not duplicate the whole catalogue statically.

---

# 61. Existing Page CSS Cleanup

Remove or refactor old product-page-specific CSS that becomes obsolete.

Do not remove product-card styles used by the Homepage unless the replacements work in both contexts.

Keep Homepage and Products page styles scoped appropriately.

---

# 62. Homepage Regression

TASK-005 must not break TASK-003 Homepage product grouping.

Verify:

- Soybean family remains one Homepage card.
- Finished feed remains grouped on Homepage.
- Fava/oil remain correct.
- disabled products remain hidden.

---

# 63. English Regression

`en/products.html` must continue rendering all eight public products correctly.

Shared product renderer changes must not break:

- English product names;
- filter controls;
- English quote message;
- asset paths.

---

# 64. TASK-005 Subtasks

## ST-01 — Products Page Audit

Review:

- `products.html`
- `en/products.html`
- current product CSS
- current catalogue rendering
- filters
- temporary imagery

Classify existing page elements:

- KEEP
- REWORK
- REMOVE
- ADD

---

## ST-02 — OpenDesign Exploration

Explore:

- product-page hierarchy;
- family/variant composition;
- raw/finished section structure;
- filters/category navigation;
- missing-image state;
- mobile presentation.

Document adopted/rejected concepts.

---

## ST-03 — Page Structure

Implement the Arabic page information architecture:

- Hero
- category navigation
- raw materials
- finished feed
- enquiry guidance
- final CTA

Keep global Header/Footer unchanged.

---

## ST-04 — Soybean Family & Variants

Implement a clear family-level presentation containing:

- fine
- medium
- coarse

with individual quote actions.

---

## ST-05 — Standalone Raw Materials

Implement:

- قشر فول
- زيت منزوع

including proper missing-image behavior.

---

## ST-06 — Finished Feed

Implement:

- علف مواشي
- علف بط
- علف غنم

without inventing specifications.

---

## ST-07 — Filters / Category Navigation

Finalize the simplest useful category-navigation approach.

Verify accessibility and mobile behavior.

---

## ST-08 — Conversion Sections

Implement:

- quote guidance;
- final price/WhatsApp CTA.

---

## ST-09 — Renderer & CSS Cleanup

Refactor product rendering only as required by the final Products design.

Remove obsolete product-page styles safely.

Preserve Homepage behavior.

---

## ST-10 — QA & Owner Review

Render and inspect:

- 1440×900
- 1024×768
- 768×1024
- 390×844

Capture Arabic Products-page review screenshots.

Test English for shared-code regressions.

Document remaining final-image requirements.

Stop for owner review before closing TASK-005.

---

# 65. Tests

Extend tests to verify at least:

- Products page loads.
- Eight public product records remain represented.
- Raw section contains five products.
- Finished section contains three products.
- Soybean family contains exactly three variants.
- All three variants remain independently quotable.
- Fava Bean Hulls renders without unrelated image.
- Oil temporary English status remains internal.
- No internal metadata renders.
- Raw/category navigation works.
- Finished/category navigation works.
- Disabled fixture does not render.
- Product-specific WhatsApp messages remain correctly localized.
- Homepage grouping regression passes.
- No horizontal overflow at required viewports.
- Global mobile navigation remains functional.

Do not test exact visual pixel values.

---

# 66. Formatting & Validation

Run:

```bash
node tests/catalogue-check.mjs
node tests/redesign-check.mjs
npx prettier --check "**/*.{html,css,js,md,json}"
git diff --check
```

All must pass before review.

---

# 67. Acceptance Criteria

TASK-005 is complete only when:

- [ ] TASK-004 is marked Complete after owner review.
- [ ] Existing Products page has been audited.
- [ ] OpenDesign exploration is documented.
- [ ] Arabic Products page is redesigned.
- [ ] Products are organized clearly by category.
- [ ] Raw Materials section is clearly identifiable.
- [ ] Finished Feed section is clearly identifiable.
- [ ] Soybean Hulls are presented as one family.
- [ ] Fine, medium, and coarse remain individually identifiable.
- [ ] Each soybean variant can be quoted independently.
- [ ] Fava Bean Hulls renders professionally without a fake image.
- [ ] Oil product renders without unconfirmed technical terminology.
- [ ] Cattle Feed is visible.
- [ ] Duck Feed is visible.
- [ ] Sheep Feed is visible.
- [ ] No unconfirmed product specifications are introduced.
- [ ] All public content comes from the finalized catalogue where appropriate.
- [ ] Product-specific WhatsApp inquiry works.
- [ ] Category navigation/filtering works.
- [ ] Filter controls are keyboard accessible.
- [ ] Mobile Products UX works at 390px.
- [ ] Product images remain documented as temporary/missing.
- [ ] No final product images are generated.
- [ ] Homepage product rendering remains correct.
- [ ] English product rendering remains functional.
- [ ] Internal catalogue metadata never renders publicly.
- [ ] Catalogue tests pass.
- [ ] Site regression tests pass.
- [ ] Formatting passes.
- [ ] `git diff --check` passes.
- [ ] Arabic Products screenshots have been visually inspected.
- [ ] Owner reviews TASK-005 before TASK-006 begins.

---

# 68. Out of Scope

Do not complete in TASK-005:

- Services page redesign;
- About page redesign;
- Contact page redesign;
- final English website redesign;
- new public products;
- product specifications;
- product detail pages;
- final product photography;
- finished-feed bag designs;
- final Hero image;
- final logo;
- prices;
- online ordering;
- cart / checkout;
- backend;
- live stock integration.

---

# 69. Expected Next Task

After TASK-005 approval:

**TASK-006 — Services Page**

TASK-006 will redesign and clarify:

- factory-direct supply;
- commercial quantities;
- sourcing flexibility;
- imported/external sources;
- transport and delivery coordination;
- recurring supply requirements;
- B2B service flow.

---

# 70. Final Principle

The Products page should make the catalogue easier to understand than the underlying data structure.

A buyer should not need to understand:

- IDs;
- families;
- schema;
- availability enums.

They should simply see:

**المنتج اللي محتاجه، نوعه، الاختيارات المتاحة، وإزاي يسأل عن سعره وتوفره.**
