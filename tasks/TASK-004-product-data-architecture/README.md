# TASK-004 — Product Data Architecture

## Status

**Status:** Implemented (2026-08-27) — awaiting owner architecture review before TASK-005
**Priority:** High
**Depends on:** TASK-001, TASK-002, TASK-003 — Complete
**Primary concern:** Product data model and rendering architecture
**Page redesign:** Out of scope

---

# 1. Purpose

Create a stable, maintainable product-data architecture for Al Nesour Feeds before redesigning the full Products page.

The current product implementation works, but parts of the business model are still encoded implicitly inside rendering logic.

TASK-004 must separate:

* product facts;
* product families;
* product variants;
* categories;
* public visibility;
* Homepage placement;
* availability inquiry;
* localization;
* imagery;
* quote behavior;
* internal confirmation state.

The goal is to make future product additions or changes possible without redesigning the website or rewriting rendering logic.

---

# 2. Important Scope Rule

TASK-004 is primarily a **data and rendering architecture task**.

Do not redesign:

* `products.html`
* `en/products.html`
* Homepage layout
* Product-card visual style
* Header
* Footer
* Services
* About
* Contact

unless a minimal markup change is necessary to support the product architecture.

The full Products-page design belongs to:

**TASK-005 — Products Page**

---

# 3. Authority

Follow:

1. `AGENTS.md`
2. `DESIGN.md`
3. TASK-001 confirmed product facts
4. TASK-003 Homepage product decisions
5. this TASK-004 brief

Do not use internet research to automatically add products to the public catalogue.

Only owner-confirmed products may be public.

---

# 4. Current Confirmed Raw Materials

The current confirmed raw-material products are:

1. قشر صويا ناعم
2. قشر صويا وسط
3. قشر صويا خشن
4. قشر فول
5. زيت منزوع

Do not add other feed raw materials as public catalogue entries without owner confirmation.

---

# 5. Current Confirmed Finished Feed

Known manufactured finished-feed categories are:

1. علف مواشي
2. علف بط
3. علف غنم

They are manufactured feed supplied by Al Nesour.

Do not invent:

* formulas;
* protein percentages;
* stages;
* bag weight;
* ingredients;
* feed codes;
* nutritional tables;
* recommendations;
* certifications.

These will be added later only when confirmed.

---

# 6. Product Visibility Principle

A product existing in the data file must not automatically mean:

**currently in stock**

or:

**available immediately**

Define the distinction clearly.

Recommended meanings:

### `enabled`

The product is approved to appear publicly in the catalogue.

### `availability`

Controls how availability should be communicated.

Current safe state:

`on-request`

Meaning:

**Ask about current availability.**

Do not interpret `enabled: true` as guaranteed stock.

---

# 7. Product Confirmation Principle

The catalogue must distinguish:

* confirmed public products;
* internal/unconfirmed future products;
* products with terminology still requiring confirmation.

Unconfirmed entries must never accidentally render.

Prefer fail-closed behavior.

If required visibility metadata is missing, the renderer should not assume that the product is public.

---

# 8. Architectural Direction

Replace the current flat product-only model with a catalogue structure that can represent:

1. Categories
2. Product families
3. Individual products / variants

Recommended top-level structure:

```js
window.ALNESOUR_CATALOG = {
  schemaVersion: 1,
  categories: {},
  families: {},
  products: [],
};
```

The exact implementation may vary if Codex identifies a simpler equivalent architecture.

Do not over-engineer this static website.

---

# 9. No Required Build Step

The product catalogue must continue working in a static site.

Do not introduce:

* database;
* API;
* CMS;
* Node runtime requirement;
* frontend framework;
* bundler;
* server-side rendering.

The current JavaScript data-file approach is acceptable.

---

# 10. Data File

Preferred location:

`assets/js/products-data.js`

It may continue exposing one browser-readable global object.

Example:

```js
window.ALNESOUR_CATALOG = {
  schemaVersion: 1,
  categories: {},
  families: {},
  products: [],
};
```

Do not split the catalogue across many files without a clear benefit.

---

# 11. Schema Version

Add:

```js
schemaVersion: 1
```

Purpose:

* document future model migrations;
* distinguish data-shape changes;
* make debugging easier.

Do not create a complex migration framework.

---

# 12. Categories

Initial categories:

```text
raw
finished
```

Meaning:

### `raw`

Feed raw materials.

Arabic:

**خامات أعلاف**

English:

**Feed Raw Materials**

### `finished`

Manufactured finished feed.

Arabic:

**أعلاف جاهزة**

English:

**Finished Feed**

---

# 13. Category Data

Do not keep category display labels buried only inside `products.js`.

Preferred architecture:

```js
categories: {
  raw: {
    id: 'raw',
    name: {
      ar: 'خامات أعلاف',
      en: 'Feed Raw Materials',
    },
  },

  finished: {
    id: 'finished',
    name: {
      ar: 'أعلاف جاهزة',
      en: 'Finished Feed',
    },
  },
}
```

This makes the data file the source of truth for catalogue terminology.

---

# 14. Product Families

Use a Product Family when multiple related products should sometimes be presented together.

Initial required families:

### Soybean Hulls

`soybean-hulls`

Contains:

* fine
* medium
* coarse

### Finished Feed

A grouped Homepage presentation may represent:

* cattle feed
* duck feed
* sheep feed

However, decide carefully whether `finished-feed` should technically be a family or simply a Homepage group over the `finished` category.

Prefer the simplest accurate model.

---

# 15. Soybean Hull Family

Recommended family data:

```js
families: {
  'soybean-hulls': {
    id: 'soybean-hulls',

    category: 'raw',

    name: {
      ar: 'قشر الصويا',
      en: 'Soybean Hulls',
    },

    description: {
      ar: '...',
      en: '...',
    },

    enabled: true,

    featured: true,

    sortOrder: 10,
  },
}
```

The individual variants remain separate products.

---

# 16. Variant Architecture

Each soybean-hull variant must be a real product record.

Examples:

```text
soybean-hulls-fine
soybean-hulls-medium
soybean-hulls-coarse
```

Fields:

```js
familyId: 'soybean-hulls'
variant: 'fine'
```

Do not repeat:

```js
supported: ['fine', 'medium', 'coarse']
```

inside every variant unless there is a specific implementation reason.

The family relationship itself should describe the grouping.

---

# 17. Variant Labels

Possible variant data:

```js
variant: {
  id: 'fine',

  name: {
    ar: 'ناعم',
    en: 'Fine',
  },
}
```

or a simpler equivalent.

Do not make rendering logic infer variant labels from IDs.

---

# 18. Stable Product IDs

Every product must have a stable machine identifier.

Examples:

```text
soybean-hulls-fine
soybean-hulls-medium
soybean-hulls-coarse
fava-bean-hulls
oil-product
cattle-feed
duck-feed
sheep-feed
```

Product IDs should:

* be lowercase;
* use hyphens;
* remain locale-independent;
* not contain prices;
* not contain temporary marketing text.

Once published, avoid changing them without a reason.

---

# 19. Product Public Name

Each product needs localized public names:

```js
name: {
  ar: '...',
  en: '...',
}
```

Do not generate the English public name from the Arabic string automatically.

---

# 20. زيت منزوع

Arabic confirmed name:

**زيت منزوع**

The exact English commercial name is still unconfirmed.

Current safe temporary English label:

**Feed-Related Oil Product**

TASK-004 must represent that state structurally.

Do not silently treat the temporary English label as confirmed terminology.

Recommended internal metadata:

```js
internal: {
  englishNameStatus: 'temporary',
}
```

or an equivalent clearly internal field.

---

# 21. Internal Metadata

Internal state must never render as customer-facing copy.

Recommended namespace:

```js
internal: {
  ...
}
```

Possible values:

```js
internal: {
  englishNameStatus: 'confirmed',
  imageStatus: 'temporary',
  notes: '',
}
```

Do not render:

* `temporary`
* `confirmation required`
* `internal`
* `optional`
* implementation notes

on the public site.

---

# 22. Public Description

Product descriptions should remain:

* short;
* commercial;
* factual;
* editable;
* localized.

Example structure:

```js
description: {
  ar: '...',
  en: '...',
}
```

Avoid generic repetitive descriptions if the product can be explained more clearly.

Do not invent product specifications.

---

# 23. Description Responsibility

Descriptions belong in product data.

Do not hard-code product descriptions in:

* `products.js`
* `index.html`
* `products.html`

The renderer should display catalogue data.

---

# 24. Featured State

The Homepage must be able to choose products/families intentionally.

Support:

```js
featured: true
```

where appropriate.

However:

**featured does not mean available stock.**

It only means the item is suitable for highlighted presentation.

---

# 25. Placement

Evaluate whether a boolean `featured` is enough.

If future placement requires more control, a simple structure may be used:

```js
placement: {
  homepage: true,
}
```

Do not create a complex content-management placement system.

Choose one simple approach and document it.

---

# 26. Sort Order

Do not rely on accidental array order forever.

Add a stable optional ordering field:

```js
sortOrder: 10
```

Use gaps:

```text
10
20
30
40
```

so future additions do not require renumbering every record.

---

# 27. Availability Model

Define a controlled set of availability values.

Initial safe value:

```text
on-request
```

Possible future values may include:

```text
on-request
unavailable
```

Do not add:

```text
in-stock
```

until the business has a reliable mechanism to maintain that claim.

---

# 28. Availability Labels

Display labels belong in catalogue/localization data or one clear localization helper.

Example:

Arabic:

**اسأل عن التوفر**

English:

**Ask about availability**

Do not expose the raw enum.

---

# 29. Image Architecture

Do not treat product image as only a plain undocumented string.

Preferred structure:

```js
image: {
  src: '...',
  status: 'temporary',
}
```

Potential future extension:

```js
image: {
  src: '...',
  width: 1600,
  height: 1000,
  status: 'approved',
}
```

Keep it simple.

---

# 30. Image Status

Useful values:

```text
temporary
approved
missing
```

This state is internal.

It must never render publicly.

---

# 31. Current Image Reality

TASK-004 must preserve the known current situation:

### Soybean hulls

Temporary image available.

### Fava bean hulls

No trusted dedicated image yet.

### زيت منزوع

Temporary image available; terminology is still pending.

### Finished feed

Temporary generic category image available.

Do not fabricate missing images during TASK-004.

---

# 32. Missing Image Behavior

A missing product image must not break the card.

The architecture should allow a card to render without an image.

Do not:

* use an unrelated image;
* reuse soybean hulls for fava bean hulls;
* automatically inject a generic stock photo.

The Products-page task will determine the final visual treatment for missing images.

---

# 33. Alt Text

Do not store generic duplicate alt text if the product name itself is sufficient.

The renderer may generate an appropriate alt from the localized product name.

For purely decorative family imagery:

`alt=""`

may be appropriate.

Accessibility should be handled deliberately.

---

# 34. Public vs Internal Data

Catalogue data should conceptually distinguish:

## Public

Allowed to render:

* name
* description
* category
* family
* variant
* public availability wording
* approved image
* CTA context

## Internal

Never render directly:

* confirmation status
* image approval state
* internal notes
* temporary terminology notes

Do not mix them into customer descriptions.

---

# 35. Product Model — Recommended Baseline

A product should support approximately:

```js
{
  id: 'soybean-hulls-fine',

  categoryId: 'raw',

  familyId: 'soybean-hulls',

  variant: 'fine',

  enabled: true,

  featured: true,

  sortOrder: 10,

  availability: 'on-request',

  name: {
    ar: 'قشر صويا ناعم',
    en: 'Fine Soybean Hulls',
  },

  description: {
    ar: '...',
    en: '...',
  },

  image: {
    src: 'assets/images/products/soybean-hulls.webp',
    status: 'temporary',
  },

  internal: {
    englishNameStatus: 'confirmed',
  },
}
```

This is a direction, not a requirement to copy byte-for-byte.

Codex may simplify it where duplication provides no real benefit.

---

# 36. Avoid Over-Engineering

Do not introduce:

* classes;
* TypeScript;
* schema libraries;
* validation packages;
* database-style relations;
* UUIDs;
* repositories/services;
* API clients

for this small static catalogue.

Clear plain JavaScript objects are sufficient.

---

# 37. Data Validation

Although no external validation library is needed, create lightweight validation.

At minimum detect:

* duplicate IDs;
* unknown category IDs;
* unknown family IDs;
* missing Arabic names;
* missing English names;
* invalid `enabled` values;
* invalid availability values;
* duplicate sort order where it creates ambiguity;
* enabled products with invalid required public fields.

Validation may run:

* inside tests;
* not necessarily in production runtime.

---

# 38. Fail-Closed Rendering

The public renderer should not accidentally expose malformed or unconfirmed entries.

Preferred rule:

Render only when:

```js
product.enabled === true
```

and required public fields are valid.

Do not use:

```js
product.enabled !== false
```

because missing visibility metadata would then become public by accident.

---

# 39. Homepage Rendering Context

TASK-003 introduced:

```html
data-products-context="homepage"
```

Preserve this concept.

Homepage rendering should use the same catalogue data as the Products page.

No duplicate Homepage catalogue.

---

# 40. Catalogue Rendering Context

Products page can use:

```html
data-products-context="catalogue"
```

or default catalogue behavior.

Make the context explicit if it improves maintainability.

Avoid hidden behavior based only on which URL is open.

---

# 41. Homepage Product Grouping

Homepage must continue supporting:

### Soybean Hull Family

One family presentation containing:

* ناعم
* وسط
* خشن

### Standalone Raw Materials

* قشر فول
* زيت منزوع

### Finished Feed

One grouped Homepage presentation may represent:

* علف مواشي
* علف بط
* علف غنم

Do not require three nearly identical finished-feed cards on the Homepage.

---

# 42. Catalogue Presentation

The full Products page must still be able to render individual products.

TASK-004 should prepare the data.

TASK-005 decides the final visual UX.

Do not lock TASK-005 into the Homepage grouping model.

---

# 43. Renderer Responsibilities

`products.js` should be responsible for:

* choosing locale;
* filtering public products;
* selecting rendering context;
* grouping families where required;
* creating product cards;
* creating family cards;
* filtering catalogue categories;
* constructing product-specific inquiry URLs.

It should not contain business data that belongs in `products-data.js`.

---

# 44. Remove Business Copy from Renderer

Currently `products.js` contains copy such as:

* `Soybean Hulls`
* `ناعم ووسط وخشن...`
* `Finished Feed`
* category labels

Move catalogue-specific business/content values into the catalogue structure where practical.

The renderer should not become a second content database.

---

# 45. UI Labels

Generic UI labels may remain in a localization object.

Examples:

* اطلب سعر اليوم
* اسأل عن السعر والتوفر
* Ask about price and availability

These are UI actions, not product data.

Keep product facts separate from UI labels.

---

# 46. Quote Architecture

Each product/family CTA should be able to construct a useful WhatsApp inquiry.

Example Arabic structure:

```text
السلام عليكم، أريد الاستفسار عن سعر وتوفر قشر صويا ناعم.

الكمية المطلوبة:
مكان التسليم:
```

English equivalent should remain natural.

Always use:

```js
encodeURIComponent()
```

---

# 47. Product Identity in Quote

Do not use only display text if a stable product ID is useful internally.

However, the customer-facing WhatsApp message should remain human-readable.

Do not expose machine IDs such as:

`soybean-hulls-fine`

to customers.

---

# 48. Family Quote

If a user clicks:

**قشر الصويا**

the message may say:

**أريد الاستفسار عن قشر الصويا**

without forcing a specific variant.

The buyer can then specify:

* ناعم;
* وسط;
* خشن.

TASK-005 may later create a better selection UX.

---

# 49. Category Filtering

Existing catalogue filter categories:

* all
* raw
* finished

must continue working.

Do not make category filters depend on translated visible strings.

Use stable category IDs.

---

# 50. Filter Accessibility

Keep:

```html
aria-pressed
```

for filter controls.

TASK-004 should not visually redesign filters.

Ensure architecture changes do not break keyboard use.

---

# 51. DOM Rendering Safety

The data is locally controlled, so current template strings are low risk.

Nevertheless, evaluate moving important dynamic text insertion toward DOM APIs such as:

```js
textContent
```

rather than unrestricted HTML interpolation.

Do not undertake a large rewrite solely for theoretical purity.

Prioritize maintainability.

---

# 52. Multiple Product Grids

The renderer should not assume forever that only one:

```js
[data-products-grid]
```

exists per page.

Prefer:

```js
document.querySelectorAll(...)
```

and initialize each grid independently.

This makes future sections safer.

If retaining one grid is intentional, document the limitation.

---

# 53. Locale Architecture

Use:

```js
document.documentElement.lang
```

to determine locale.

Supported:

```text
ar
en
```

Do not use URL substring detection as the primary locale source.

---

# 54. Asset Path Handling

Current Arabic/English pages use different relative asset depth.

Keep this explicit and safe.

Possible approach:

```js
const assetBase = isArabic ? '' : '../';
```

A better static-safe equivalent may be used.

Do not hard-code full GitHub Pages URLs.

---

# 55. English Parity

TASK-004 must keep English product rendering technically functional.

This does not mean all English product wording is final.

In particular:

`زيت منزوع`

still uses a temporary English label.

Do not block the architecture task on that terminology.

---

# 56. Catalogue Documentation

Create:

`tasks/TASK-004-product-data-architecture/PRODUCT-SCHEMA.md`

Document:

* category model;
* family model;
* product model;
* fields;
* allowed enums;
* visibility semantics;
* availability semantics;
* image state;
* localization;
* examples.

Keep documentation concise enough to maintain.

---

# 57. Product Inventory Document

Create:

`PRODUCT-INVENTORY.md`

inside TASK-004.

Include:

| Product | Category | Family | Variant | Public | Homepage | Image | English name status |

This gives the owner one easy file to review when products change.

---

# 58. Current Inventory Expected

Initial inventory should include:

| Product       | Category |
| ------------- | -------- |
| قشر صويا ناعم | raw      |
| قشر صويا وسط  | raw      |
| قشر صويا خشن  | raw      |
| قشر فول       | raw      |
| زيت منزوع     | raw      |
| علف مواشي     | finished |
| علف بط        | finished |
| علف غنم       | finished |

No speculative products.

---

# 59. Future Product Addition Workflow

Document a simple process.

To add a product:

1. Confirm Arabic commercial name.
2. Confirm category.
3. Confirm whether it belongs to a family.
4. Confirm English name or mark it temporary.
5. Write safe description.
6. Decide public `enabled` state.
7. Decide Homepage placement.
8. Add image only if approved.
9. Run catalogue validation.
10. Run site tests.
11. Review before publishing.

---

# 60. Product Removal Workflow

Do not necessarily delete historical data immediately.

A product can first use:

```js
enabled: false
```

This removes it publicly while preserving its record.

Delete the record only when there is no future value in retaining it.

---

# 61. Product Availability Changes

Do not turn products on/off using `enabled` merely because temporary stock changes.

Remember:

`enabled` = publicly offered catalogue item.

`availability` = current communication model.

This distinction must be documented.

---

# 62. Testing

Add catalogue-specific tests.

At minimum verify:

* catalogue object exists;
* expected schema version;
* category IDs are unique;
* product IDs are unique;
* all product category IDs exist;
* all family IDs resolve;
* enabled products have Arabic names;
* enabled products have English names;
* availability enum is valid;
* only enabled products render;
* disabled test fixture does not render;
* Homepage grouping includes all three soybean variants;
* Homepage does not duplicate the soybean family as three cards;
* catalogue context can render individual variants;
* category filtering still works;
* WhatsApp inquiry contains human-readable product/family name.

---

# 63. Test Fixtures

If testing disabled or malformed entries is needed, do not contaminate the real public catalogue.

Prefer:

* cloned in-memory fixtures;
* temporary objects inside tests.

Do not commit fake products into production data just for testing.

---

# 64. Existing Test Regression

Keep existing tests passing for:

* Homepage;
* all ten pages;
* responsive layouts;
* header/footer;
* mobile navigation;
* quote forms.

TASK-004 must not break TASK-003.

---

# 65. Formatting

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

# 66. TASK-004 Subtasks

## ST-01 — Current Catalogue Audit

Inspect:

* `products-data.js`
* `products.js`
* Homepage product rendering
* Products-page rendering
* filters
* quote URLs

Document current coupling and duplication.

---

## ST-02 — Define Product Schema

Create:

`PRODUCT-SCHEMA.md`

Finalize:

* categories;
* families;
* variants;
* visibility;
* availability;
* localization;
* image metadata;
* internal metadata;
* sorting.

Do not implement until the model is internally coherent.

---

## ST-03 — Product Inventory

Create:

`PRODUCT-INVENTORY.md`

Record all eight confirmed products.

No speculative catalogue additions.

---

## ST-04 — Migrate Product Data

Refactor:

`assets/js/products-data.js`

to the approved catalogue model.

Preserve all confirmed information.

Do not accidentally expose internal metadata.

---

## ST-05 — Refactor Renderer

Update:

`assets/js/products.js`

to consume the new model.

Remove product-specific business content from rendering logic where possible.

Preserve:

* Homepage grouping;
* catalogue individual rendering;
* filtering;
* quote links;
* Arabic/English functionality.

---

## ST-06 — Catalogue Validation

Implement lightweight validation tests.

Verify relationships and required fields.

Fail safely.

---

## ST-07 — Regression Testing

Run:

* catalogue tests;
* existing site smoke tests;
* formatting;
* diff check.

Test Arabic and English.

---

## ST-08 — Documentation & Final Review

Document:

* final data model;
* current inventory;
* future addition process;
* deferred terminology;
* deferred images;
* known TASK-005 considerations.

Stop for owner review before closure.

---

# 67. Acceptance Criteria

TASK-004 is complete only when:

* [ ] Current catalogue implementation has been audited.
* [ ] Product schema is documented.
* [ ] Product inventory is documented.
* [ ] No speculative products are public.
* [ ] Categories have stable IDs and localized names.
* [ ] Soybean hulls are modeled as one family with three individual variants.
* [ ] Product IDs are stable and locale-independent.
* [ ] `enabled` has a documented public-visibility meaning.
* [ ] `enabled` is not treated as stock availability.
* [ ] Availability has a controlled enum.
* [ ] Current products safely use `on-request`.
* [ ] Product names are localized in data.
* [ ] Product descriptions are localized in data.
* [ ] Product-specific descriptions are removed from renderer logic.
* [ ] Product-family content is data-driven where practical.
* [ ] Internal confirmation metadata cannot render publicly.
* [ ] زيت منزوع English terminology remains explicitly temporary.
* [ ] Image approval status is represented internally.
* [ ] Missing images do not break rendering.
* [ ] Homepage product context continues to work.
* [ ] Soybean hulls render as one Homepage family.
* [ ] Products catalogue can render individual variants.
* [ ] Finished-feed Homepage grouping remains possible.
* [ ] Catalogue filtering works.
* [ ] Quote links remain human-readable and correctly encoded.
* [ ] Arabic works.
* [ ] English works.
* [ ] Duplicate product IDs are detected.
* [ ] Broken category/family references are detected.
* [ ] Disabled products do not render.
* [ ] Product-data tests pass.
* [ ] Existing site regression tests pass.
* [ ] Formatting passes.
* [ ] `git diff --check` passes.
* [ ] No Product-page visual redesign has been performed.
* [ ] Owner reviews the final architecture before TASK-005.

---

# 68. Out of Scope

Do not complete in TASK-004:

* Products-page redesign;
* final product photography;
* Hero image generation;
* final logo;
* feed-bag artwork;
* new product research/publication;
* product specifications;
* nutrition data;
* final زيت منزوع English name;
* inventory-management system;
* live stock system;
* prices;
* backend;
* API;
* CMS;
* database.

---

# 69. Expected Next Task

After TASK-004 approval:

**TASK-005 — Products Page**

TASK-005 will use the finalized catalogue architecture to redesign:

* category navigation;
* product-family presentation;
* soybean-hull variants;
* raw-material cards;
* finished-feed cards;
* product inquiry actions;
* responsive catalogue UX;
* empty/missing-image states.

Final image generation will be handled only when we deliberately reach the image checkpoint.

---

# 70. Final Principle

The catalogue data should answer one question clearly:

**What does Al Nesour publicly offer, and how should the website present it?**

Business data should live in the catalogue.

Rendering logic should render it.

Page design should consume it.

None of those three responsibilities should silently replace the others.
