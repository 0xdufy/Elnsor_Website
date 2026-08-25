# AGENTS.md — Al Nesour Feeds Corporate Website

## 0. Purpose of this file

This file is the single source of truth for Codex when designing and implementing the Al Nesour Feeds corporate website.

Codex is connected to OpenDesign through MCP. Use OpenDesign as the design engine and design-system source before writing final UI code. Do not guess OpenDesign tool names: first discover the MCP tools/resources/prompts that are actually available in the current Codex session, then use the relevant ones.

The final website must be implemented with:

- HTML5
- CSS3
- Vanilla JavaScript only (You can use js libraries)

Do not use React, Vue, Angular, Bootstrap, Tailwind, jQuery, or a frontend framework.

The website is a static multilingual B2B corporate website, not an e-commerce application.

---

# 1. Project identity

## Working brand name

**Al Nesour Feeds**

The brand name should appear in English even on the Arabic version unless the owner later supplies a finalized Arabic/English logo lockup.

Do not invent a legal company suffix such as LLC, S.A.E., Group, Company, or Trading Co.

## Current public social reference

Facebook:
https://www.facebook.com/AlNesourFeeds

Use the Facebook page as business-context reference only. Do not scrape or copy copyrighted post images into the production website unless the business owner provides those assets or confirms usage rights.

## WhatsApp

Display:
**+20 10 2223 2052**

WhatsApp destination:
**201022232052**

Base WhatsApp URL:
https://wa.me/201022232052

## Location

Google Maps link supplied by the owner:
https://maps.app.goo.gl/C7hu8ZJvP3u15MHq7

The link resolves to approximately:
- Latitude: 31.050014
- Longitude: 30.836510

Do not invent a street address or city label from the coordinates. Until a textual business address is confirmed, use wording such as:
- Arabic: "موقعنا على الخريطة"
- English: "View our location"

Use the supplied Google Maps link for the location CTA.

---

# 2. Business context

Al Nesour Feeds operates in the animal-feed supply market.

The business provides:

1. Feed raw materials.
2. Finished animal feed.
3. Wholesale and large-quantity supply.
4. Supply to feed factories.
5. Supply to feed traders.
6. Supply to large farms.
7. Delivery / logistics across Egyptian governorates.
8. Direct supply from factories/sources.
9. Import.
10. Export.
11. Recurring supply agreements / supply contracts.

Primary target audiences, in priority order:

1. Feed traders.
2. Feed factories / mills.
3. Large farms.

This is a B2B website. The tone, design, information architecture, imagery, CTAs, and copy must reflect professional procurement and supply-chain relationships rather than consumer retail.

The main conversion action is:
**Request a quote / contact on WhatsApp.**

There are no public prices because feed and raw-material pricing changes frequently.

---

# 3. Known commercial relationships — INTERNAL CONTEXT ONLY

The owner stated that Al Nesour Feeds has business relationships that include:

- United Oil Processing and Packaging — an actual client.
- Al Haditha / "الحديثة" — a supplier/import source mentioned by the owner.
- Al Kenana / "الكنانة" — a supplier/import source mentioned by the owner.

## Important publication rule

Do NOT place any client, supplier, or partner name/logo on the public website unless all of the following are true:

1. The owner explicitly confirms it may be public.
2. The exact legal/commercial name is confirmed.
3. A proper logo/brand asset is provided or its public use is clearly authorized.
4. The wording accurately describes the relationship.

Never imply certification, endorsement, exclusive partnership, agency, or strategic partnership unless explicitly confirmed.

### United Oil context

Public website:
https://unitedoil-eg.com/

United Oil presents itself as a long-established Egyptian company involved in oil refining, filling, packaging, trading, distribution, and export.

Use United Oil only as a credibility/structure benchmark:
- strong corporate hierarchy,
- capabilities,
- history,
- services,
- products,
- export positioning,
- trust signals.

Do not copy its content, design, claims, certificates, timeline, or assets.

### Al Kenana context

Public business-directory research identifies "الكنانه لاستخلاص الزيوت النباتيه" as active in extracting vegetable oils from soybean/corn and refining vegetable oils.

This confirms relevant sector context only.

### Al Haditha context

The name "الحديثة" is too generic to identify the exact supplier reliably from public research.

Therefore:
- Treat it as private business context.
- Do not publish it.
- Do not link to a guessed company.
- Do not create a logo/name reference for it.

---

# 4. Competitive research and lessons

The goal is not to copy competitors. Extract useful principles and produce a cleaner, more professional B2B experience.

## 4.1 Al-Ekram Supply & Export

Reference:
https://elekram.com/

Useful ideas:
- Immediate B2B positioning.
- Clear WhatsApp conversion.
- Product cards with "Ask for price."
- Audience segmentation.
- Strong supply / sourcing message.
- Arabic + English.

Avoid:
- Excessive density.
- Too many claims in a single page.
- Unverified performance/statistics.
- Emoji-heavy iconography.
- Any copy or visual imitation.

## 4.2 El Nady Group

Reference:
https://www.elnady-group.com/index-ar.html

Useful ideas:
- Corporate positioning.
- Clear service categories.
- Feed-industry language.
- Trust and supply-chain framing.
- Business-oriented hierarchy.

Avoid:
- Generic "quality/innovation/excellence" statements without evidence.
- Copying its visual layout or component styling.

## 4.3 Al Khair Feed

Reference:
https://www.alkhairfeed.com/

Useful ideas:
- Conversion-oriented structure.
- Modern customer journey.
- Clear contact mechanisms.

Use only the principle of reducing friction between interest and inquiry.

## 4.4 Alfa Feed International

Reference:
https://www.alfafeedint.com/en/

Useful ideas:
- Product taxonomy.
- Separating feed types and product groups.
- Industry-specific presentation.

## 4.5 Al Bashir

Reference:
https://albashirgroup.com/product-category/%D8%AE%D8%A7%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%81/

Useful ideas:
- Product-card/catalog organization.
- Product categories that can grow.

## Competitive conclusion

Al Nesour Feeds should feel:

**Cleaner + more credible + more focused + more premium + easier to contact.**

The website should communicate:
- reliable supply,
- commercial quantities,
- business relationships,
- logistics,
- sourcing,
- import/export,
- continuity,
- responsiveness.

It should not look like:
- a small Facebook seller,
- an online grocery store,
- a veterinary clinic,
- a generic green agricultural template,
- an AI-generated startup landing page.

---

# 5. Core positioning

Use this positioning as the guiding message:

**A reliable B2B supply partner for feed raw materials and finished feed, serving traders, feed factories, and large farms.**

Suggested Arabic positioning:
**شريك موثوق لتوريد خامات الأعلاف والأعلاف الجاهزة للتجار والمصانع والمزارع الكبرى.**

Suggested English positioning:
**Your reliable supply partner for feed raw materials and finished feed.**

Supporting idea:
Al Nesour connects product availability, sourcing, commercial quantities, logistics, and customer requirements into a dependable supply relationship.

Do not claim:
- "number one in Egypt"
- "best price in Egypt"
- "internationally certified"
- "highest quality"
- guaranteed delivery durations
- number of customers
- number of tons
- years of experience
- geographical coverage outside what the owner confirmed

unless the owner later supplies verifiable facts.

---

# 6. Website goals

Primary:
1. Establish credibility.
2. Explain what Al Nesour supplies.
3. Communicate who the company serves.
4. Present services/capabilities.
5. Make quote requests extremely easy.
6. Convert users to WhatsApp conversations.

Secondary:
1. Improve Google discoverability.
2. Provide a professional destination for Facebook visitors.
3. Support sales representatives sharing a company website.
4. Be expandable as more products, client references, certifications, media, or services become available.

---

# 7. Scope and pages

Build exactly these core pages in both languages:

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

Arabic is the default locale because the primary market is Egypt.

Brand can remain "Al Nesour Feeds" in English.

Do not create:
- product detail pages,
- shopping cart,
- checkout,
- login,
- registration,
- customer dashboard,
- blog,
- careers,
- testimonials page,
- news page

unless requested later.

---

# 8. Navigation

Arabic:
- الرئيسية
- من نحن
- المنتجات
- خدماتنا
- تواصل معنا

English:
- Home
- About
- Products
- Services
- Contact

Header actions:
- Language switcher
- Primary quote CTA

Arabic primary CTA:
**اطلب عرض سعر**

English primary CTA:
**Request a Quote**

On mobile:
- accessible menu button,
- simple off-canvas/dropdown menu,
- primary contact action clearly visible,
- no complicated mega-menu.

The language switch must take users to the equivalent page, not always the homepage.

Example:
`products.html` → `en/products.html`
`en/contact.html` → `../contact.html`

---

# 9. Homepage information architecture

Order sections intentionally. Do not reorder without a clear UX reason.

## 9.1 Header

Contents:
- temporary text-based brand mark: "Al Nesour Feeds"
- navigation
- language switch
- Request a Quote CTA

Do not create a fake permanent logo.

Create the markup/CSS so a real logo can replace the wordmark later without redesigning the header.

## 9.2 Hero

Goal:
Immediately explain the company, audience, and B2B value.

Recommended Arabic H1:
**توريد موثوق لخامات الأعلاف والأعلاف الجاهزة**

Recommended Arabic supporting text:
**نخدم التجار ومصانع الأعلاف والمزارع الكبرى بحلول توريد مرنة تشمل الخامات، الأعلاف الجاهزة، النقل، والاستيراد والتصدير.**

Recommended English H1:
**Reliable Supply for Feed Raw Materials & Finished Feed**

Recommended English supporting text:
**We serve traders, feed factories, and large farms with flexible supply solutions covering raw materials, finished feed, logistics, import, and export.**

Primary CTA:
- Arabic: اطلب عرض سعر
- English: Request a Quote

Secondary CTA:
- Arabic: استعرض المنتجات
- English: View Products

Hero imagery:
- industrial/agricultural supply-chain photography,
- bulk feed materials,
- soybean/corn/raw material textures,
- loading/storage/warehouse/trucks,
- feed pellets where relevant.

Avoid:
- cute livestock,
- cartoon animals,
- random farm fields,
- generic smiling office teams,
- cliché leaf overlays,
- excessive green.

The visual feeling should be:
**Industrial + Agricultural + B2B + Reliable + Premium.**

## 9.3 Audience / trust strip

Do not use fake statistics.

Use three audience pillars:
- Traders
- Feed Factories
- Large Farms

Possible Arabic:
- للتجار
- لمصانع الأعلاف
- للمزارع الكبرى

This section should visually establish that the company works with serious commercial buyers.

## 9.4 Business offering split

Two large categories:

### Feed Raw Materials
Arabic: خامات الأعلاف

### Finished Feed
Arabic: الأعلاف الجاهزة

Each gets:
- short copy,
- representative visual,
- link to Products.

Do not show empty fake product cards for Finished Feed if the actual finished-feed product list has not yet been provided.

## 9.5 Featured products

Show current confirmed products only.

Current confirmed catalog:
1. Soybean Hulls — multiple types / grades.
2. "زيت منزوع" — exact English commercial term should be confirmed before production launch.

Working translation for design/implementation:
**Degummed Soybean Oil**

Important:
The phrase "Degummed Soybean Oil" is a working translation only. Centralize the product label so the owner can replace it easily if the exact commercial term differs.

Each card:
- image,
- category,
- product name,
- one short factual description,
- "Request today's price" / quote CTA.

Do not show numeric specs unless supplied by the owner.

## 9.6 Who we serve

Three strong B2B panels:

### Feed Traders
Focus:
- commercial quantities,
- product availability,
- flexible supply.

### Feed Factories
Focus:
- production inputs,
- recurring needs,
- supply continuity.

### Large Farms
Focus:
- feed/raw material requirements,
- quantity,
- delivery coordination.

Avoid making unsupported promises.

## 9.7 Why Al Nesour

Use capability-based reasons, not awards or invented numbers.

Recommended pillars:
- Reliable Supply
- Commercial Quantities
- Flexible Sourcing
- Logistics Coordination
- Import & Export
- Long-Term Supply Relationships

Arabic equivalents:
- توريد يمكن الاعتماد عليه
- كميات تجارية
- مرونة في التوريد
- تنسيق النقل والتوصيل
- استيراد وتصدير
- علاقات توريد طويلة الأمد

Do not say "certified quality" unless certification evidence is provided.

## 9.8 Services preview

Show six:
1. Feed Raw Material Supply
2. Finished Feed Supply
3. Bulk / Wholesale Supply
4. Transportation & Delivery
5. Import & Export
6. Recurring Supply Contracts

CTA → Services page.

## 9.9 Supply process

Use a clean 4-step process:

1. Share Requirements
2. Confirm Product & Quantity
3. Receive Quote / Confirm Order
4. Coordinate Delivery

Arabic:
1. حدد احتياجاتك
2. حدد المنتج والكمية
3. استلم عرض السعر وأكد الطلب
4. تنسيق النقل والتسليم

Do not imply an automated ordering backend.

## 9.10 Coverage / logistics

Message:
Al Nesour can supply and coordinate delivery across Egyptian governorates.

Do not show fake depot locations.

A subtle Egypt outline can be used as a decorative information graphic if created originally or from a safe open source.

## 9.11 Final CTA

Strong commercial CTA.

Arabic:
**محتاج خامات أو أعلاف بكميات؟**
**تواصل معنا وحدد المنتج والكمية ومكان التسليم للحصول على عرض مناسب لاحتياجاتك.**

English:
**Need feed materials or finished feed in commercial quantities?**
**Tell us the product, quantity, and delivery location and request a quote for your requirements.**

Buttons:
- Request a Quote
- WhatsApp

## 9.12 Footer

Include:
- brand name
- short one-sentence description
- navigation
- WhatsApp
- Facebook
- Google Maps link
- language link
- copyright

Do not invent email if none is supplied.

---

# 10. About page

Purpose:
Explain the company professionally without generic filler.

Sections:

1. Intro / Who We Are
2. What We Supply
3. Who We Serve
4. How We Work
5. Import, Export & Sourcing
6. Values
7. CTA

Recommended values:
- Commitment
- Reliability
- Quality-conscious sourcing
- Transparency
- Continuity
- Partnership

Avoid fabricated:
- founding year,
- founder story,
- employee count,
- warehouse size,
- capacity,
- awards,
- certificates,
- countries served.

If these are provided later, the page should have room to add a "Company Facts" or timeline section without redesign.

---

# 11. Products page

## Primary goal

Provide a fast, scalable product catalog that works for 2 products now and 20+ later without breaking layout.

## Filters

Potential filter controls:
- All
- Feed Raw Materials
- Finished Feed

Only show a filter option when at least one product exists in that category.

Do not create an empty Finished Feed grid.

## Product card anatomy

Each card:
1. Image area
2. Product category
3. Product name
4. Short description (maximum 2–3 lines visually)
5. Quote CTA

CTA Arabic:
**اسأل عن سعر اليوم**

CTA English:
**Ask for Today's Price**

Clicking CTA should open WhatsApp with product context.

Example English message concept:
"Hello, I would like to ask about the current price and availability of [Product]. Requested quantity: ... Delivery location: ..."

Example Arabic message concept:
"السلام عليكم، أريد الاستفسار عن سعر وتوفر [اسم المنتج]. الكمية المطلوبة: ... مكان التسليم: ..."

Use `encodeURIComponent()`.

## Scalability requirement

The product grid must remain visually correct with:
- 2 products,
- 4 products,
- 7 products,
- 13 products,
- 20 products.

Do not rely on a fixed number of cards per row.

Use responsive CSS Grid such as:
- `repeat(auto-fit, minmax(...))`
or a controlled 3/2/1 column layout.

No card should clip long Arabic product names.

Do not use fixed card heights that cut content.

## Product source architecture

Keep product content centralized so adding a product is simple.

Preferred approach:
- `assets/js/products-data.js`
- `assets/js/products.js`

Each product object should support fields conceptually equivalent to:

```js
{
  id: "soybean-hulls",
  category: "raw-material",
  name: {
    ar: "قشر الصويا",
    en: "Soybean Hulls"
  },
  description: {
    ar: "...",
    en: "..."
  },
  image: "assets/images/products/soybean-hulls.webp",
  alt: {
    ar: "...",
    en: "..."
  },
  featured: true
}
```

The exact code structure may differ, but there must be one obvious place to add/edit product content.

Progressive enhancement:
- Do not leave the page meaningless if JS fails.
- Provide meaningful page heading, intro, contact CTA, and ideally a basic no-script fallback.

## Initial product content

### Product A

Arabic:
**قشر الصويا**

English:
**Soybean Hulls**

Description direction:
Available in multiple commercial types/grades to match supply and order requirements.

Arabic direction:
**متوفر بعدة أنواع ودرجات تجارية وفق احتياجات الطلب والتوافر.**

Do not invent protein, fiber, moisture, origin, or packaging specifications.

### Product B

Arabic:
**زيت منزوع**

Working English:
**Degummed Soybean Oil**

Description direction:
A commercial feed-related oil product supplied according to agreed order requirements and availability.

Do not invent composition or technical specs.

Before production launch, flag the English product trade name for business-owner confirmation.

---

# 12. Services page

Services should explain how Al Nesour supports clients, not repeat product cards.

Sections/cards:

## Feed Raw Material Supply
Supply of feed-production inputs in commercial quantities.

## Finished Feed Supply
Finished feed supply based on customer requirements and available product ranges.

## Feed Factory Supply
Commercial supply for factories with recurring operational needs.

## Trader Supply
Wholesale supply for feed traders.

## Large Farm Supply
Commercial supply for large farms.

## Transportation & Delivery
Coordination of transportation and delivery according to order requirements.

## Direct Sourcing
Supply from relevant factories/sources.

## Import & Export
Import/export as part of the company’s supply capabilities.

## Recurring Supply Agreements
Ongoing supply arrangements for customers with recurring demand.

Use a structured page with fewer, larger content blocks rather than many tiny cards.

---

# 13. Contact / Request Quote page

This is a lead-generation page.

## Contact information

Show:
- WhatsApp: +20 10 2223 2052
- Facebook page
- Google Maps link

Do not show an email address until supplied.

## Quote form

Fields:

1. Full name
2. Company / farm name
3. Phone
4. Client type
   - Trader
   - Feed Factory
   - Large Farm
   - Other
5. Product
6. Quantity
7. Delivery governorate / location
8. Additional details

Arabic and English labels must be localized.

## Form behavior

There is no backend.

On valid submit:
- Build a structured localized message.
- Open WhatsApp to `201022232052`.
- Do not display fake "Message sent successfully" feedback.
- Explain that the user will continue the request in WhatsApp if necessary.

Form validation must be accessible and understandable.

Do not require email.

---

# 14. Multilingual implementation

Arabic:
```html
<html lang="ar" dir="rtl">
```

English:
```html
<html lang="en" dir="ltr">
```

Requirements:
- Real Arabic and English pages.
- Do not use JS to auto-translate page content.
- Do not machine-translate claims beyond the approved copy.
- Preserve equivalent information architecture.
- Direction-aware CSS.
- Components must work in RTL and LTR.
- Icons that imply direction must flip correctly where necessary.
- Telephone numbers remain LTR.

Avoid duplicate CSS files for Arabic and English unless absolutely necessary. Prefer logical CSS properties:
- `margin-inline`
- `padding-inline`
- `inset-inline`
- `border-inline`
- `text-align: start`

---

# 15. OpenDesign MCP workflow — mandatory

Codex must use OpenDesign before final implementation.

## Phase 1 — Discover

1. Inspect connected MCP servers.
2. Discover OpenDesign tools/resources/prompts available in the current environment.
3. Read relevant OpenDesign design-system resources and web-prototype/frontend guidance.
4. Do not invent MCP command names.

## Phase 2 — Design direction

Using this AGENTS.md as the brief, ask OpenDesign to establish a direction for:

- B2B industrial/agricultural corporate website
- Egyptian feed supply company
- Arabic RTL + English LTR
- premium but practical
- strong product and quote conversion
- not an e-commerce store
- not a green-template cliché

Evaluate at least 2–3 plausible visual directions internally, then choose one coherent direction.

Do not ask the user to select from dozens of superficial themes.

## Phase 3 — DESIGN.md

Create or update `DESIGN.md` in the repository.

It must define:

- color tokens,
- typography,
- spacing scale,
- container widths,
- border radii,
- borders,
- shadows,
- button variants,
- form styling,
- product cards,
- section rhythm,
- image treatment,
- motion,
- responsive behavior,
- RTL/LTR behavior.

Once DESIGN.md is established, implementation must follow it consistently.

## Phase 4 — Homepage first

Build the homepage first.

Validate:
- desktop,
- tablet,
- mobile,
- Arabic,
- English.

Only then apply the established system to remaining pages.

## Phase 5 — Visual browser verification

Use browser/Playwright tooling available to Codex to render and inspect the pages.

Test at minimum:
- 1440 × 900
- 1024 × 768
- 768 × 1024
- 390 × 844

Inspect actual screenshots. Do not assume responsive CSS is correct because the code looks correct.

Fix:
- overflow,
- clipped text,
- bad RTL,
- uneven cards,
- awkward whitespace,
- inaccessible contrast,
- mobile header issues,
- CTA wrapping,
- image crops.

---

# 16. Visual design direction

## Desired character

The visual identity should feel:

- premium,
- trustworthy,
- established,
- industrial,
- agricultural,
- practical,
- calm,
- modern,
- B2B.

Keyword combination:
**Industrial Agriculture / Feed Supply / Trading / Logistics / Reliability**

## Avoid

Do not use:
- glassmorphism,
- neon colors,
- large purple/blue AI gradients,
- excessive gradients,
- huge pill-shaped UI everywhere,
- giant rounded cards,
- excessive shadows,
- emojis as interface icons,
- random blobs,
- decorative leaves everywhere,
- cartoon animals,
- generic startup illustrations,
- over-animated scroll effects,
- parallax for decoration,
- autoplay video,
- unnecessary carousel,
- fake dashboards,
- fake charts.

## Initial palette hypothesis

OpenDesign may refine this, but stay close to the intent.

Suggested starting tokens:

- Deep Forest / Industrial Green: `#163D32`
- Grain / Brass Gold: `#C69A39`
- Warm Cream: `#F5F1E8`
- Charcoal: `#202521`
- White: `#FFFFFF`

Use green as a grounded corporate color, not a saturated "eco" neon.

Gold is an accent, not a dominant background.

OpenDesign can adjust exact values for contrast and quality.

## Typography hypothesis

Preferred:
- Arabic: IBM Plex Sans Arabic
- English: IBM Plex Sans

If loading these creates implementation or performance issues, select a comparable professional Arabic/Latin pairing through OpenDesign.

Maximum:
- 2 type families.

Do not default to Inter unless OpenDesign has a strong design reason.

## Layout

- Spacious corporate layout.
- Strong section hierarchy.
- Use whitespace instead of card containers for every section.
- Product cards may use cards because they are functional catalog units.
- Use full-width bands selectively.
- Strong 12-column desktop logic or equivalent.
- Max content width approximately 1180–1280 px depending on design.
- Text measure should remain readable.

---

# 17. Images and asset strategy

No official logo or professional media assets are currently supplied.

## Logo

For v1:
Use a typographic wordmark:
**Al Nesour Feeds**

Do not generate a fake eagle logo and treat it as official.

The header must be designed so a future SVG/PNG logo can be inserted without layout changes.

## Photography

Use imagery that supports:
- soybean hulls,
- grain,
- raw feed materials,
- finished feed/pellets,
- warehouses,
- bulk handling,
- trucks,
- industrial loading,
- supply logistics.

Do not use competitor images.

For implementation:
- use properly licensed imagery,
- download final assets locally,
- convert/optimize to WebP or AVIF where practical,
- use responsive `srcset` when useful,
- lazy-load below-the-fold images,
- set intrinsic width/height to reduce CLS.

Maintain an `IMAGE_SOURCES.md` file for any third-party image source/license references.

Never hotlink competitor assets.

---

# 18. Client / partner proof strategy

Because no approved client logos/assets are currently supplied:

Do NOT display a client-logo strip in v1.

Instead build trust using:
- audience categories,
- capabilities,
- real services,
- clear quote process,
- professional design,
- real contact/location data.

Architect the page so a future "Selected Clients" or "Business Relationships" strip can be inserted after the owner obtains permission and provides logos.

Do not use United Oil's logo in v1 without explicit approval.

---

# 19. Interaction and motion

Keep JavaScript small and purposeful.

Allowed:
- mobile navigation,
- product filtering,
- WhatsApp quote message construction,
- accessible form validation,
- small header state on scroll,
- subtle reveal if it does not harm performance/accessibility.

Motion guidelines:
- typically 150–250 ms,
- subtle,
- respect `prefers-reduced-motion`,
- no animation that blocks interaction,
- no dramatic entrance choreography.

Hover states should not be the only way to reveal essential information.

---

# 20. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:
- semantic HTML,
- skip link,
- visible keyboard focus,
- adequate contrast,
- form labels,
- accessible error messages,
- buttons vs links used correctly,
- mobile menu ARIA state,
- alt text,
- no text embedded only in images,
- logical heading hierarchy,
- keyboard-operable filters,
- touch targets approximately 44px minimum,
- `prefers-reduced-motion`,
- RTL screen-reader friendly markup.

Do not add ARIA where native HTML already provides the semantics.

---

# 21. SEO

The website should be technically SEO-ready.

## On-page

Each page requires:
- unique `<title>`,
- unique meta description,
- one clear H1,
- logical H2/H3 hierarchy,
- descriptive link text,
- descriptive image alt text.

## Localization

Prepare:
- Arabic metadata,
- English metadata,
- `hreflang` linking equivalent pages,
- `x-default` only when a real deployment URL is known.

Do not invent the final domain.

If no domain is supplied:
- do not publish fake canonical URLs,
- leave a clear TODO or configuration point for the final domain.

## Structured data

Use conservative Organization / LocalBusiness structured data only with confirmed fields.

Confirmed:
- Name: Al Nesour Feeds
- WhatsApp/telephone: +20 10 2223 2052
- country: Egypt
- social: Facebook
- map/location URL

Do not add:
- rating,
- reviewCount,
- foundingDate,
- employee count,
- priceRange,
- certifications

without verified data.

## Files

Create:
- `robots.txt`
- `sitemap.xml` after deployment URL is known, or leave a clearly documented domain placeholder not shipped as production truth.

---

# 22. Performance

Target a fast static site.

Requirements:
- minimal JS,
- no heavyweight UI library,
- no large animation library,
- optimized images,
- lazy loading,
- non-blocking scripts with `defer`,
- avoid layout shifts,
- CSS organized and deduplicated,
- no unused framework code,
- local assets where practical.

Performance goals after real assets:
- Lighthouse Performance ≥ 90 on representative mobile conditions where practical.
- Accessibility ≥ 95.
- Best Practices ≥ 95.
- SEO ≥ 95, excluding missing production-domain items.

Do not cheat Lighthouse by removing useful content.

---

# 23. Recommended project structure

```text
/
├── AGENTS.md
├── DESIGN.md
├── README.md
├── IMAGE_SOURCES.md
│
├── index.html
├── about.html
├── products.html
├── services.html
├── contact.html
│
├── en/
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── services.html
│   └── contact.html
│
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── pages.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── products-data.js
│   │   ├── products.js
│   │   └── quote.js
│   │
│   ├── images/
│   │   ├── brand/
│   │   ├── hero/
│   │   ├── products/
│   │   └── sections/
│   │
│   └── icons/
│
├── robots.txt
└── sitemap.xml
```

Codex may simplify file count if it improves maintainability, but preserve separation of:
- design tokens,
- global styles,
- product data,
- quote behavior.

Do not create hundreds of tiny files for a simple static site.

---

# 24. CSS engineering rules

- Mobile-first or clearly responsive architecture.
- Use CSS custom properties for design tokens.
- Use logical properties for RTL/LTR.
- Avoid `!important` except exceptional utility/accessibility cases.
- Avoid magic pixel positioning.
- Avoid fixed heights for text-heavy cards.
- Use fluid typography where helpful (`clamp()`).
- Ensure Arabic line-height is comfortable.
- Avoid more than 2–3 radius values.
- Avoid more than 2 shadow levels.
- Use borders/subtle background differences more often than heavy shadows.
- Keep component states consistent.

---

# 25. JavaScript engineering rules

- Vanilla JS only.
- Modules if they improve organization.
- No build step should be required to view the site unless Codex has a compelling reason and documents it.
- Site must work from a simple local static server.
- No fake API.
- No fake database.
- No localStorage unless necessary.
- No analytics until explicitly requested.
- No tracking pixels until explicitly requested.
- Handle WhatsApp URLs safely with encoded text.
- Fail gracefully if JavaScript is disabled.

---

# 26. Content rules

All public content must be:

- concise,
- professional,
- B2B,
- concrete,
- non-hyperbolic,
- easy to translate,
- based on supplied facts.

Do not invent:
- exact product specs,
- country of origin,
- protein percentages,
- moisture,
- bag weights,
- delivery times,
- warehouse inventory,
- certifications,
- customer names,
- testimonials,
- statistics,
- history.

If content is unknown, write neutral capability copy or add an obvious content placeholder in code comments rather than fabricating facts.

---

# 27. WhatsApp UX specification

Phone:
`201022232052`

## Global quote button

Arabic message template:

```text
السلام عليكم،
أرغب في طلب عرض سعر من Al Nesour Feeds.

نوع العميل:
المنتج:
الكمية:
مكان التسليم:
تفاصيل إضافية:
```

English:

```text
Hello,
I would like to request a quote from Al Nesour Feeds.

Client type:
Product:
Quantity:
Delivery location:
Additional details:
```

## Product card

Pre-fill the product name automatically.

## Quote form

Build the WhatsApp text from form values.

Open:
`https://wa.me/201022232052?text=${encodeURIComponent(message)}`

Prefer opening in a new tab/window only when it does not create accessibility or popup issues.

---

# 28. Mobile requirements

Mobile traffic is considered critical because users may arrive from Facebook and WhatsApp.

At 390px width:
- no horizontal scrolling,
- header remains usable,
- hero CTA does not overflow,
- product cards are full-width and readable,
- Arabic labels do not clip,
- forms are one column,
- phone/WhatsApp actions are easy to tap,
- no fixed floating widget covers content.

A single floating WhatsApp button may be used if OpenDesign integrates it elegantly and it does not compete with the primary CTA.

---

# 29. Future expansion requirements

The design must accommodate future additions without redesign:

- more soybean hull variants,
- more raw materials,
- finished feed products,
- product categories,
- client logos (with permission),
- supplier/partner references (with permission),
- certificates,
- company statistics,
- downloadable company profile,
- product specification PDFs,
- additional contact channels,
- additional branches.

Do not show empty placeholders for these future elements in production v1.

Build extension points, not empty UI.

---

# 30. Acceptance criteria

The work is not complete until all criteria below are satisfied.

## Business
- Clearly states that Al Nesour supplies feed raw materials and finished feed.
- Clearly targets traders, feed factories, and large farms.
- Shows no prices.
- Quote requests lead to the supplied WhatsApp number.
- Import/export and delivery capabilities are represented.
- No invented client/supplier endorsements.

## Design
- OpenDesign MCP was actually used.
- DESIGN.md exists.
- The visual system is consistent across all 10 locale pages.
- The site does not resemble a generic agricultural template.
- No fake logo is presented as official.
- No emoji-based UI.
- Product grid remains stable as products increase.

## Responsive
- Verified at 1440, 1024, 768, and 390 widths.
- Arabic RTL is visually correct.
- English LTR is visually correct.
- No horizontal overflow.

## Content
- No fabricated statistics.
- No fabricated testimonials.
- No fabricated certifications.
- No fabricated specifications.
- Working English translation for "زيت منزوع" is flagged for confirmation.

## Technical
- Pure HTML/CSS/JS.
- No frontend framework.
- No console errors.
- Forms have labels and validation.
- WhatsApp messages encode correctly.
- Links are valid.
- Images are optimized.
- SEO structure is present.
- Core accessibility requirements are met.

---

# 31. Codex execution sequence

Follow this sequence.

## Step 1 — Read
Read this entire AGENTS.md before touching UI code.

## Step 2 — Research through OpenDesign
Discover the connected OpenDesign MCP capabilities.
Review suitable design systems/references for:
- industrial B2B,
- agriculture/feed,
- supply/logistics,
- corporate Arabic websites.

## Step 3 — Establish design
Create `DESIGN.md`.

Do not start by coding random cards.

## Step 4 — Scaffold
Create the project/file structure and shared CSS/JS foundations.

## Step 5 — Homepage
Implement Arabic homepage and its English equivalent.

## Step 6 — Browser review
Render at required desktop/mobile sizes.
Fix visual issues.

## Step 7 — Remaining pages
Implement:
- About
- Products
- Services
- Contact
for Arabic and English.

## Step 8 — Product scalability test
Temporarily test the Products page with at least 13 dummy development entries to confirm the grid/filter layout remains correct.
Remove all dummy products before final output.

## Step 9 — Functional QA
Test:
- nav,
- mobile menu,
- language switch,
- product filters,
- quote form,
- product WhatsApp buttons,
- map link,
- Facebook link.

## Step 10 — Final audit
Check against every acceptance criterion in this file.

## Step 11 — Report
Provide the owner a concise implementation report containing:
- files created,
- design decisions,
- known placeholders/TODOs,
- exact item requiring confirmation: English commercial name for "زيت منزوع",
- how to add a new product,
- how to replace the future logo,
- how to change contact/location data.

---

# 32. Production TODOs that must remain visible to the owner

Before final public launch, confirm:

1. Exact final logo / brand mark.
2. Exact English commercial name for "زيت منزوع".
3. Exact list of soybean hull variants if each variant should receive its own card.
4. Final textual business address if one should be displayed.
5. Final production domain for canonical/hreflang/sitemap URLs.
6. Whether United Oil or any other client may be shown publicly.
7. Whether supplier names/logos may be shown publicly.
8. Any certifications, statistics, years of experience, or capacity figures that can be documented.

These TODOs must not block building the v1 website.

---

# 33. Final design principle

When there is tension between decoration and credibility, choose credibility.

When there is tension between novelty and clarity, choose clarity.

When there is tension between adding another section and shortening the user path to a quote, shorten the path to a quote.

The website should make a procurement manager, feed trader, or large-farm owner think:

**"This looks like a serious supplier I can contact about quantity and availability."**

That is the primary success criterion.
