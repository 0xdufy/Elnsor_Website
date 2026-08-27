# TASK-001 — Brand, Content & Visual Direction

## Status

**Status:** Complete — foundation approved 2026-08-27
**Priority:** High
**Execution:** The approved foundation may guide only separately scoped implementation tasks.

---

## 1. Purpose

Define the final brand direction, content strategy, visual direction, repository structure, and code-quality baseline for the Al Nesour Feeds website before starting another redesign.

This task exists because the current website is not considered production-ready from either a design or content perspective.

The next version must not be treated as another quick redesign.

The goal is to establish a clear foundation first, review it, and only then begin implementing individual pages.

---

## 2. Main Goal

Create a clear and approved foundation for a professional Arabic-first B2B website for:

**شركة النسور للأعلاف**
**Al Nesour Feeds**

The website should communicate that Al Nesour is a serious feed-supply business serving the Egyptian market.

The final direction should feel:

- professional
- commercial
- trustworthy
- realistic
- modern
- easy to understand
- product-focused
- supply-chain focused
- suitable for the Egyptian feed market
- suitable for traders, factories, and farms
- premium without looking luxurious
- visually strong without looking like a generic template

---

# 3. Important Rule

## Do not redesign the full website during this task.

This task defines the foundation only.

The task must be reviewed before starting the next implementation task.

Do not rebuild all pages as part of TASK-001.

---

# 4. Confirmed Business Information

Use the following information as confirmed business context.

## Company

Arabic name:

**شركة النسور للأعلاف**

English name:

**Al Nesour Feeds**

Arabic is the primary website language.

English will remain available as a secondary language.

---

## Experience

The owner / management of the business has:

**More than 20 years of experience in the feed market.**

Preferred public wording should reflect experience in the market rather than incorrectly claiming that the legal business entity itself has necessarily existed for more than 20 years.

Examples of acceptable direction:

- خبرة تتجاوز 20 عامًا في سوق الأعلاف
- أكثر من 20 عامًا من الخبرة في مجال الأعلاف
- خبرة تمتد لأكثر من 20 عامًا في توريد وتجارة الأعلاف

Avoid wording that incorrectly establishes a company founding date unless later confirmed.

---

## Main Customers

The primary B2B audiences are:

1. Feed traders
2. Feed factories
3. Large farms

The website should not feel like a retail e-commerce website.

---

# 5. Confirmed Business Strengths

The following are genuine strengths and can be communicated publicly:

- more than 20 years of market experience
- competitive pricing
- product availability
- direct supply from factories
- flexible sourcing
- large commercial quantities
- logistics and delivery coordination
- supply across Egyptian governorates
- access to imported products
- access to external sources
- feed manufacturing
- wholesale supply
- supply for traders
- supply for feed factories
- supply for farms

No single benefit should dominate the entire website.

The content strategy should combine these strengths naturally.

The website should communicate a complete value proposition rather than repeatedly using only one claim.

---

# 6. Direct Supply Definition

When the website refers to:

**توريد مباشر من المصدر**

the main confirmed meaning is:

**Direct supply from factories.**

Do not invent additional source types unless confirmed later.

Public wording may use phrases such as:

- توريد مباشر من المصانع
- توريد من مصادر موثوقة ومباشرة
- توريد مباشر حسب المنتج والكمية

Avoid claims such as exclusive factory agreements unless specifically confirmed.

---

# 7. Import / External Source Positioning

Al Nesour deals with:

- imported products
- external supply sources

However, do not currently claim that Al Nesour itself directly performs all import operations.

Avoid copy such as:

- نستورد مباشرة من الخارج

unless this is explicitly confirmed later.

Preferred safer direction:

- التعامل مع منتجات مستوردة
- الوصول إلى مصادر توريد متنوعة
- مرونة في توفير المنتجات من مصادر محلية وخارجية
- توفير خامات حسب التوافر ومصدر التوريد

---

# 8. Feed Manufacturing

Finished feed is manufactured for Al Nesour.

The website can therefore communicate that Al Nesour provides manufactured finished-feed products.

Current known finished-feed categories include:

- cattle feed
- duck feed
- sheep feed

Exact formulas, nutritional specifications, bag sizes, stages, and product variants must not be invented.

These details will be added later after confirmation.

---

# 9. Confirmed Raw-Material Products

The currently confirmed products are:

1. قشر صويا ناعم
2. قشر صويا وسط
3. قشر صويا خشن
4. قشر فول
5. زيت منزوع

These should replace the current inaccurate or overly generic product assumptions.

---

## Unknown Future Products

The company has more products, but the exact list is not currently available.

Do not publicly publish guessed products as available stock.

Future products may be researched and suggested internally, but they must remain disabled until confirmed.

The product-data architecture in a future task should support:

- `enabled`
- `featured`
- `category`
- `variants`
- Arabic name
- English name
- description
- image
- availability state

Unconfirmed products must never appear publicly by default.

---

# 10. Product Variant Requirement

Soybean hulls must support multiple commercial variants.

Current confirmed variants:

- قشر صويا ناعم
- قشر صويا وسط
- قشر صويا خشن

Do not force these into one generic product card unless there is a clear UX reason.

The future product structure should support variants without requiring a page redesign.

---

# 11. Content Strategy — High Priority

Content is one of the primary problems in the current website.

The existing website contains copy that often feels:

- artificial
- generic
- overly corporate
- internally written
- defensive
- generated rather than naturally commercial
- disconnected from how Egyptian feed businesses communicate

TASK-001 must define a new content direction before page redesign begins.

---

## Public Content Tone

Arabic copy should sound like a real Egyptian B2B feed company.

It should be:

- professional
- direct
- commercial
- confident
- easy to scan
- simple
- specific
- natural
- credible

It should not sound:

- robotic
- academic
- legalistic
- like an internal specification
- like an AI-generated corporate template
- excessively formal
- exaggerated

---

## Avoid Generic Copy

Avoid phrases similar to:

- توريد عملي يركز على احتياج نشاطك
- منتجات واضحة لطلبات توريد أسرع
- حلول متكاملة لتحقيق أهدافك
- الجودة والتميز والابتكار
- شريك نجاحك الأول
- الأفضل في مصر
- رقم واحد في السوق

unless a phrase has real commercial meaning and is properly supported.

---

## Preferred Content Direction

Content should focus on real customer questions:

- What products do you supply?
- Is the product available?
- What quantities can you supply?
- Do you supply traders?
- Do you supply factories?
- Can you deliver to my governorate?
- Is the supply direct from factories?
- Can I ask for today's price?
- Can you handle recurring commercial quantities?
- How do I contact you quickly?

---

# 12. Homepage Content Planning

TASK-001 must define the homepage content structure before implementation.

The structure should be short enough to scan quickly but complete enough to establish trust.

Recommended direction:

1. Header
2. Hero
3. Trust / proof
4. Featured products
5. Main product categories
6. Why Al Nesour
7. Who we serve
8. Supply / delivery capability
9. Simple supply process
10. Final quote CTA
11. Footer

The final section structure may be adjusted if a better UX rationale is identified.

---

# 13. Hero Content Direction

The Hero is the most important content block.

It must explain immediately:

- what Al Nesour supplies
- who it supplies
- why the visitor should contact the company

The Hero should not contain a long corporate introduction.

Possible message themes:

- feed raw materials
- finished feed
- direct factory supply
- commercial quantities
- nationwide supply
- current price inquiry

The final Hero wording must be reviewed separately before implementation.

---

# 14. Main CTA Strategy

Primary conversion action:

**WhatsApp quote / price inquiry**

Recommended Arabic CTA direction:

- اطلب سعر اليوم
- اسأل عن السعر والتوفر
- اطلب عرض سعر

Do not use too many different CTA labels across the website without a UX reason.

A consistent primary CTA should be selected.

---

# 15. Brand Direction

The website will use both:

1. Logo symbol
2. Wordmark

The wordmark must include:

**شركة النسور للأعلاف**

and may also include:

**Al Nesour Feeds**

---

# 16. Existing Logo Reference

The company currently uses an eagle logo on its Facebook page.

The existing direction includes:

- eagle head symbol
- dark green
- gold
- circular badge

This visual identity should not be discarded completely.

The next logo direction should evolve from the existing identity rather than introducing a completely unrelated brand.

---

## Existing Logo Strengths

Retain the following ideas:

- eagle identity
- dark green
- gold accent
- strong recognizability
- circular mark as an optional brand asset

---

## Existing Logo Weaknesses

The current logo is highly rendered and uses a 3D / metallic visual style.

This may work for:

- Facebook profile image
- large promotional artwork
- social assets

but may not be ideal as the primary website-header logo at small sizes.

---

# 17. Future Logo Requirement

A future logo-image task should create a simplified digital-ready version.

Possible brand lockups:

### Option A

Eagle icon + Arabic wordmark

### Option B

Eagle icon + Arabic wordmark + small English name

### Option C

Simplified circular symbol + separate horizontal wordmark

The final version must remain recognizable as the same brand family.

---

# 18. Image Generation Workflow

The website will require new imagery.

However:

**Do not generate final images inside implementation tasks without explicit approval.**

Whenever an image is required:

1. Stop implementation for that asset.
2. Define exactly what image is needed.
3. Define dimensions / crop.
4. Define visual direction.
5. Define where it will be used.
6. Provide a clear generation brief.
7. The owner will start a separate ChatGPT image-generation conversation.
8. The approved image will then be added to the repository.

---

# 19. Future Image Categories

The website will likely require:

- homepage Hero image
- soybean hull product images
- fava bean hull image
- oil product image
- manufacturing image
- warehouse image
- logistics / delivery image
- feed sacks
- cattle-feed bag design
- duck-feed bag design
- sheep-feed bag design

Do not use one generic image for multiple unrelated products.

---

# 20. Feed Bag Design

The company manufactures finished feed.

Future work will therefore require professional packaging / feed-bag designs.

Potential bags:

- علف مواشي
- علف بط
- علف غنم

Packaging design is not part of TASK-001.

When packaging design becomes necessary, create a separate task and a separate image-design conversation.

Do not invent:

- nutrition percentages
- protein percentages
- product weights
- certificates
- ingredients
- usage instructions
- animal-growth claims

without confirmed business information.

---

# 21. Visual Direction

The website should feel:

**Modern Egyptian B2B feed supply business**

not:

- luxury brand
- startup SaaS website
- agricultural blog
- veterinary clinic
- grocery shop
- generic green farm template
- corporate annual report
- editorial magazine
- AI landing-page template

---

## Visual Themes

Preferred themes:

- feed materials
- factories
- warehouses
- manufacturing
- supply movement
- transport
- commercial quantities
- product textures
- feed sacks
- industrial agriculture

---

# 22. Color Direction

The current green / gold identity can remain as the basis.

However, TASK-001 should reassess:

- green shade
- gold usage
- background neutrals
- text contrast
- CTA contrast
- card surfaces
- border usage

Gold should be an accent.

Do not make the entire website look metallic or luxurious.

---

# 23. Typography

Arabic typography must be treated as a primary design decision.

The current fallback-oriented typography should be reviewed.

Choose a professional Arabic typeface suitable for:

- website UI
- headings
- body copy
- commercial Arabic
- responsive layouts

The typeface must remain readable on mobile.

English typography should complement the Arabic system.

Font loading and performance must also be considered.

---

# 24. Reduce Editorial Styling

The current version uses patterns such as:

- repeated 01 / 02 / 03 numbering
- border-heavy grids
- very large headings
- rigid cards
- corporate presentation layouts

These should not automatically be carried forward.

Numbering should only be used when sequence matters.

Examples:

- a supply process may use 1–4
- product cards should not need arbitrary numbers
- value cards should not require artificial numbering

---

# 25. Repository Cleanup

Repository cleanup is part of TASK-001.

Before beginning major redesign implementation, inspect all existing files.

Every file must be classified as:

- KEEP
- UPDATE
- MERGE
- DELETE

Do not delete a file before confirming that it is unused or superseded.

---

# 26. Documentation Cleanup

Current documentation includes multiple overlapping sources of truth.

Examples include:

- `AGENTS.md`
- `AGENTS_V2.md`
- `DESIGN.md`
- `README.md`
- image documentation
- old tests

These must be reviewed.

The repository should eventually have one clear source of truth for implementation instructions.

Do not keep contradictory instructions active.

Possible result:

- one final `AGENTS.md`
- one project `README.md`
- task documentation
- image-source documentation where necessary

The exact structure should be decided during cleanup.

---

# 27. Remove Obsolete Files

Identify and remove files that are:

- unused
- outdated
- duplicated
- superseded
- old redesign artifacts
- irrelevant screenshots
- broken tests
- temporary implementation files
- unnecessary generated assets

Do not remove historical files if they are still required for traceability without first evaluating their value.

---

# 28. Screenshot Cleanup

Review:

`tests/screenshots/`

Many screenshots may represent an old design and may no longer be useful.

If screenshots have no future visual-regression value, remove them.

Keep only assets required for:

- active visual regression
- documented design references
- debugging

---

# 29. Test Cleanup

Review all tests.

Current tests may contain:

- old selectors
- outdated assumptions
- redundant checks
- incomplete mobile-navigation validation

Each test must be classified:

- KEEP
- REWRITE
- DELETE

Do not claim full QA if tests only verify basic page rendering.

Future QA must include actual UX behaviors.

---

# 30. Code Formatting

Repository formatting is part of TASK-001.

The current HTML and JavaScript are overly compressed.

All maintained source files must be formatted for human readability.

---

## HTML Formatting

HTML must:

- use proper indentation
- put major elements on separate lines
- remain easy to review
- remain semantic
- avoid one-line full-page markup

---

## CSS Formatting

CSS must:

- use readable formatting
- organize rules logically
- avoid extremely long compressed lines
- group related components
- clearly separate responsive rules
- preserve design tokens

Consider a clear structure such as:

- reset/base
- typography
- layout
- components
- header
- footer
- page-specific sections
- utilities
- responsive rules

Do not over-engineer architecture for a small static website.

---

## JavaScript Formatting

JavaScript must:

- use readable variable names
- avoid unnecessary minified-style expressions
- separate logical functions
- be maintainable
- keep Vanilla JavaScript

Production minification, if desired later, should happen as a build/deployment concern rather than keeping source code unreadable.

---

# 31. Formatting Tooling

Evaluate adding a simple formatting configuration.

Preferred option:

**Prettier**

for:

- HTML
- CSS
- JavaScript
- Markdown

If added, keep configuration minimal.

Possible files:

- `.prettierrc`
- `.prettierignore`

Do not introduce a complex frontend build system solely for formatting.

---

# 32. Website Technology

Keep the current implementation technology:

- HTML5
- CSS3
- Vanilla JavaScript

No framework migration is required.

Do not introduce:

- React
- Angular
- Vue
- Bootstrap
- Tailwind

unless a future explicit decision changes the technology.

---

# 33. Responsive Requirement

The future website must work properly on:

- desktop
- laptop
- tablet
- mobile

The responsive experience must not simply avoid horizontal overflow.

It must also ensure:

- usable navigation
- visible CTAs
- readable typography
- logical section order
- functional language switching
- usable forms
- properly sized images
- suitable touch targets

---

# 34. Arabic / English Parity

The Arabic and English versions must represent the same website.

They do not need literal word-for-word translation.

However, they should maintain parity in:

- pages
- major sections
- products
- CTAs
- business claims
- navigation
- footer
- contact information

Arabic remains the primary content source.

English content should normally be prepared after Arabic content is approved.

---

# 35. GitHub Pages

Current GitHub Pages URL is used for:

**Testing / preview only.**

Do not treat it as the final production domain.

Therefore:

- do not finalize canonical production URLs based on GitHub Pages
- do not permanently configure sitemap URLs to GitHub Pages
- do not treat GitHub Pages path structure as the final domain architecture

Production SEO URLs will be finalized after the real domain is available.

---

# 36. Public Information Restrictions

Do not publicly publish:

- customer names
- supplier names
- partner names
- unverified certificates
- unverified capacities
- unverified product specifications
- invented nutritional values
- invented warehouse sizes
- invented delivery times
- invented import claims
- invented statistics

unless specifically confirmed later.

---

# 37. Contact Information

Confirmed WhatsApp:

**+20 10 2223 2052**

Destination:

`201022232052`

Primary contact conversion remains WhatsApp.

---

# 38. TASK-001 Subtasks

## ST-01 — Repository Audit

Review the entire current repository.

Create a file audit table containing:

- path
- purpose
- status
- action
- reason

Actions:

- KEEP
- UPDATE
- MERGE
- DELETE

Do not modify unrelated files before completing the audit.

---

## ST-02 — Repository Cleanup

Based on the approved audit:

- remove obsolete files
- remove unused assets
- remove stale screenshots
- remove broken or obsolete tests
- merge duplicate documentation
- remove outdated design instructions

---

## ST-03 — Source Formatting

Format:

- HTML
- CSS
- JavaScript
- Markdown

Add minimal formatting configuration if useful.

Do not change page behavior unnecessarily during formatting.

---

## ST-04 — Documentation Consolidation

Create a single reliable implementation source of truth.

Resolve contradictions between:

- AGENTS files
- README
- DESIGN documentation
- old redesign instructions

Preserve important business facts.

---

## ST-05 — Business Content Foundation

Document:

- confirmed company facts
- confirmed products
- audiences
- capabilities
- public claims
- prohibited claims
- content tone

This task document may be used as part of that foundation.

---

## ST-06 — Homepage Content Architecture

Prepare the Arabic homepage structure.

For every proposed section define:

- purpose
- heading direction
- main message
- CTA
- supporting content
- required image type, if any

Do not implement the final homepage yet.

---

## ST-07 — Arabic Copy Draft

Prepare proposed Arabic copy for:

- Hero
- proof / trust
- product introduction
- why Al Nesour
- audiences
- delivery
- process
- CTA
- footer

All copy must be reviewed before implementation.

---

## ST-08 — Brand Direction

Define:

- logo direction
- wordmark behavior
- green/gold usage
- typography
- spacing
- card style
- button style
- photography direction

Use OpenDesign through Codex if available and useful.

OpenDesign should be used as a design exploration tool, not as an unquestioned source of truth.

---

## ST-09 — Image Requirement List

Create an image inventory for the future website.

For every image specify:

- purpose
- page
- section
- subject
- recommended aspect ratio
- target dimensions
- generation direction
- whether an existing image can remain temporarily

Do not generate final images inside TASK-001.

---

## ST-10 — Final TASK-001 Review

Before closing TASK-001, review:

- repository structure
- content direction
- visual direction
- confirmed products
- documentation
- formatting
- cleanup
- future image requirements

Do not proceed to homepage implementation until owner approval.

---

# 39. Acceptance Criteria

TASK-001 is complete only when all of the following are true:

- [ ] Entire repository has been audited.
- [ ] Every current file has a clear KEEP / UPDATE / MERGE / DELETE decision.
- [ ] Obsolete files approved for deletion are removed.
- [ ] Old or misleading screenshots are removed or justified.
- [ ] Old tests are reviewed and classified.
- [ ] Maintained HTML files are properly formatted.
- [ ] Maintained CSS files are properly formatted.
- [ ] Maintained JavaScript files are properly formatted.
- [ ] Maintained Markdown files are properly formatted.
- [ ] Documentation contradictions are resolved.
- [ ] A single implementation source of truth is established.
- [ ] The confirmed business facts in this task are preserved.
- [ ] Products are corrected to the currently confirmed product list.
- [ ] Unconfirmed products are not treated as publicly available.
- [ ] The meaning of direct supply is corrected to factory-direct supply.
- [ ] Import wording does not incorrectly claim direct import activity.
- [ ] The experience claim refers correctly to more than 20 years of market experience.
- [ ] Arabic content tone is defined.
- [ ] Homepage Arabic content architecture is documented.
- [ ] Proposed Arabic homepage copy is reviewed.
- [ ] Brand direction is documented.
- [ ] Existing eagle-logo identity is considered in the new direction.
- [ ] Logo + wordmark approach is documented.
- [ ] Typography direction is selected.
- [ ] Color direction is selected.
- [ ] Future image requirements are documented.
- [ ] Feed-bag design requirements are identified as a future separate task.
- [ ] No final AI images are created without owner coordination.
- [ ] GitHub Pages remains classified as a testing environment.
- [ ] No unverified public business claims are introduced.
- [ ] TASK-001 receives explicit owner approval before implementation continues.

---

# 40. Out of Scope

Do not complete the following inside TASK-001:

- full homepage redesign implementation
- full products-page redesign
- full services-page redesign
- full About-page redesign
- full Contact-page redesign
- final English rewrite
- final SEO implementation
- final sitemap configuration
- final production-domain configuration
- final logo generation
- feed-bag design
- final product image generation
- full Playwright QA suite
- production deployment

These should be separate future tasks.

---

# 41. Expected Next Tasks

Possible future task sequence:

1. TASK-001 — Brand, Content & Visual Direction
2. TASK-002 — Global Layout, Header & Footer
3. TASK-003 — Homepage
4. TASK-004 — Product Data Architecture
5. TASK-005 — Products Page
6. TASK-006 — Services Page
7. TASK-007 — About Page
8. TASK-008 — Contact & Quote Flow
9. TASK-009 — English Version
10. TASK-010 — SEO, Accessibility & Performance
11. TASK-011 — Full QA & Production Readiness

Task numbering may be adjusted after TASK-001 review.

---

# 42. Execution Rule

Work on one subtask at a time.

For every subtask:

1. Review requirements.
2. Inspect relevant files.
3. Ask questions if required information is missing.
4. Make only changes related to the current subtask.
5. Validate the result.
6. Document what changed.
7. Update task status.
8. Stop for review when a major design/content decision is reached.

Do not perform a large uncontrolled redesign in one pass.

---

# 43. Owner Review Rule

The owner is not satisfied with the current final website result.

Therefore:

**Visual and content decisions must not be assumed to be approved simply because they are implemented.**

Important checkpoints must be presented for review.

Especially:

- homepage content
- Hero
- logo
- typography
- major colors
- product presentation
- generated images
- bag design

---

# 44. Final Principle

The next Al Nesour Feeds website should not simply look more polished.

It must communicate the business more accurately.

The final experience should make a potential buyer quickly understand:

**what Al Nesour supplies, why they can rely on the company, and how to request today's price.**
