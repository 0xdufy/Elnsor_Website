<!-- # AGENTS.md — Al Nesour Feeds Website

## Purpose and authority

This file is the durable implementation source of truth for the Al Nesour Feeds website. It governs all future work unless a newer owner-approved task brief explicitly updates a business fact or scope decision.

`tasks/` contains scoped work plans, audits, and review records. A task may add or clarify requirements for its scope, but it does not silently authorize unrelated implementation.

The current project is an Arabic-first, bilingual B2B corporate website for the Egyptian feed-supply market. It is not an e-commerce application.

## Technology and project principles

- Use HTML5, CSS3, and vanilla JavaScript only. Small JavaScript libraries are allowed only when they have a clear documented need.
- Do not introduce React, Vue, Angular, Bootstrap, Tailwind, jQuery, a CMS, a fake API, a database, analytics, or tracking pixels without owner approval.
- Keep pages usable from a simple static server; do not add a required build step.
- Keep maintained source readable and run Prettier before completing a change.
- Use semantic HTML, logical CSS properties, responsive layouts, and native controls before ARIA.
- Preserve Arabic RTL and English LTR parity. The language switcher must always link to the equivalent page.

## Brand identity

### Names

- Arabic: **شركة النسور للأعلاف**
- English: **Al Nesour Feeds**

Do not invent a legal company suffix.

The current Facebook identity uses an eagle head, dark green, gold, and a circular badge. A future digital logo should evolve this family into a simpler, small-size-ready mark. Do not create a fake official logo, mascot, or aggressive eagle illustration.

Until a final approved asset exists, use a deliberate text wordmark that can be replaced without redesigning the header. It should include the Arabic name and may include the English name as supporting text.

### Visual character

The intended character is modern Egyptian B2B feed supply: commercial, practical, calm, trustworthy, product-led, and supply-chain-focused. It should feel premium without becoming luxury, editorial, or startup-like.

Use deep industrial green, warm neutral surfaces, and a restrained brass/gold conversion accent. Gold is never a dominant surface. Avoid metallic treatments, neon, glassmorphism, purple/blue AI gradients, decorative leaf motifs, cartoon livestock, generic farm templates, fake dashboards, excessive shadows, and arbitrary numbered cards.

Use image subjects such as feed materials, factories, warehouses, manufacturing, transport, bulk handling, product textures, and unbranded feed sacks. Photography must feel natural, documentary, and commercial—not glossy CGI or synthetic AI artwork.

`DESIGN.md` becomes authoritative only after its direction is owner-approved. Until then, do not treat its existing tokens or layouts as final.

## Confirmed business facts

### Positioning and audiences

Al Nesour Feeds is a reliable B2B supply business for feed raw materials and manufactured finished feed in Egypt. Primary audiences, in priority order, are:

1. Feed traders.
2. Feed factories.
3. Large farms.

The owner/management has more than 20 years of experience in the feed market. Phrase this as market experience, never as an unverified company founding date.

Approved public strengths include:

- more than 20 years of market experience;
- competitive pricing and product availability;
- direct supply from factories;
- flexible sourcing and large commercial quantities;
- wholesale supply;
- supply for traders, factories, and farms;
- logistics and delivery coordination across Egyptian governorates;
- access to imported products and local/external sources; and
- manufactured finished feed.

### Claims and wording boundaries

`توريد مباشر من المصدر` means direct supply from factories. Use wording such as `توريد مباشر من المصانع` or `توريد مباشر حسب المنتج والكمية`. Do not imply exclusive agreements, agency, or a source relationship that was not confirmed.

Al Nesour deals with imported products and external supply sources. Do not claim that it directly performs every import operation. Prefer wording such as `منتجات مستوردة`, `مصادر توريد محلية وخارجية`, and `حسب التوافر ومصدر التوريد`.

Do not publish client, supplier, or partner names/logos—including United Oil, Al Haditha, or Al Kenana—without explicit owner approval, the exact verified name, an authorized asset, and accurate relationship wording. Never imply endorsement, certification, exclusivity, or a strategic partnership.

Do not publish unsupported customer counts, tonnage, delivery times, warehouse sizes, product origin, nutritional values, protein/moisture figures, package weights, reviews, awards, certifications, ratings, or legal/founding history.

### Products

Current confirmed raw-material products are:

1. قشر صويا ناعم
2. قشر صويا وسط
3. قشر صويا خشن
4. قشر فول
5. زيت منزوع

The product architecture must represent the soybean-hull variants without a later redesign. Do not expose unconfirmed products as available stock.

Known manufactured finished-feed categories are cattle feed, duck feed, and sheep feed. Do not invent formulas, stages, bag sizes, nutritional specifications, or variants.

The exact English commercial name for `زيت منزوع` remains an owner confirmation item. Do not present `Degummed Soybean Oil` as final until confirmed.

Future product data must support at least `enabled`, `featured`, `category`, `variants`, Arabic and English names, description, image, and availability state. Disabled or unconfirmed entries must never render publicly by default.

## Content and conversion

### Tone

Arabic is the primary content source. Write it as a direct, natural Egyptian B2B feed company: professional, commercial, confident, short, clear, specific, and easy to scan. English should preserve the same claims and information architecture without an awkward literal translation.

Public copy should answer real buying questions: what is supplied, availability, commercial quantity, customer type, delivery governorate, factory-direct supply, recurring requirements, and how to ask for today's price.

Avoid generic claims such as `الجودة والتميز والابتكار`, `شريك نجاحك الأول`, `الأفضل في مصر`, and `رقم واحد في السوق`. Do not place internal caveats, compliance prose, or implementation notes in public page copy.

### Quote action

WhatsApp is the primary conversion action:

- Display: `+20 10 2223 2052`
- Destination: `201022232052`
- URL base: `https://wa.me/201022232052`

The main call to action must consistently be a price/quote inquiry such as `اطلب سعر اليوم` or `اطلب عرض سعر`; choose one per approved design system and use it consistently. Product and form flows must create a localized structured message with `encodeURIComponent()` and must not claim that a message was sent before WhatsApp opens.

Confirmed public links:

- Facebook: `https://www.facebook.com/AlNesourFeeds`
- Location: `https://maps.app.goo.gl/C7hu8ZJvP3u15MHq7`

Do not invent an email address, postal address, city, or map label from the coordinates. Use `موقعنا على الخريطة` / `View our location` until a written address is confirmed.

## Scope, page structure, and localization

Required pages:

- Arabic: `index.html`, `about.html`, `products.html`, `services.html`, `contact.html`
- English: `en/index.html`, `en/about.html`, `en/products.html`, `en/services.html`, `en/contact.html`

Arabic documents use `<html lang="ar" dir="rtl">`; English documents use `<html lang="en" dir="ltr">`. Use CSS logical properties (`padding-inline`, `margin-inline`, `inset-inline`, `border-inline`, and `text-align: start`) rather than locale-specific duplicate stylesheets.

Do not add a cart, checkout, login, registration, dashboard, product-detail pages, blog, news, careers, testimonials, or a client-logo strip without a new approved task.

The homepage should guide a procurement visitor through: clear value proposition, approved trust proof, product preview, categories/capabilities, audiences, supply and delivery, simple quote process, final conversion CTA, and footer. Exact copy, hierarchy, and visual composition must follow the approved content and brand direction—not an inherited layout.

## Images and assets

Use approved, properly licensed, local assets only. Never hotlink, scrape Facebook, or use competitor images. Record third-party provenance in `IMAGE_SOURCES.md`.

For every future generated or commissioned image, document its purpose, page/section, crop, target dimensions, subject, visual direction, and approved use before adding it. Do not generate final image assets during a planning/foundation task without an owner-led image-generation conversation and approval.

Do not use one generic image to represent unrelated products. Give below-the-fold images intrinsic dimensions and lazy loading where appropriate; use responsive sources when useful.

## Accessibility, performance, and SEO

- Target WCAG 2.2 AA where practical.
- Include a skip link, semantic landmarks, visible keyboard focus, valid labels, understandable errors, adequate contrast, keyboard-operable filters, and touch targets around 44px.
- Use an accessible mobile menu with correct button semantics and `aria-expanded` state.
- Respect `prefers-reduced-motion`; use only short, purposeful feedback motion.
- Keep JavaScript minimal and deferred. Avoid layout shift, large dependencies, autoplay media, decorative parallax, and unnecessary carousels.
- Give every page a unique title, description, single H1, logical headings, descriptive links, and suitable image alt text.
- Add reciprocal `hreflang` links for equivalent Arabic and English pages. Do not invent a canonical domain or an `x-default` URL.
- GitHub Pages is a testing/preview environment, not the production-domain source. Keep `robots.txt` and `sitemap.xml` domain-neutral until a real production domain is supplied.

## Required execution process

1. Read the relevant task brief and inspect the current worktree before editing.
2. Use OpenDesign when it is available for meaningful visual-direction exploration. Discover its actual capabilities before choosing tools; treat output as input for review, not unquestioned truth.
3. Define and document business facts, content strategy, visual direction, and image requirements before implementing a new page design.
4. Present major decisions—hero/copy, logo, typography, colors, product presentation, generated images, and feed-bag design—for owner review before treating them as approved.
5. Implement one scoped task at a time, validate it, document what changed, and then progress.
6. Before final handoff, test responsive Arabic and English behavior at 1440×900, 1024×768, 768×1024, and 390×844 using rendered screenshots; inspect and fix actual visual issues.

## Documentation hierarchy

- `AGENTS.md`: durable technical, business, and publication rules.
- `README.md`: local run instructions and maintenance entry points.
- `DESIGN.md`: approved visual system only.
- `IMAGE_SOURCES.md`: asset provenance and replacement information only.
- `tasks/`: task scope, audit, review, and decision records.

## Outstanding owner confirmations

Before production launch, confirm:

1. Final logo/brand asset.
2. Exact English commercial name for `زيت منزوع`.
3. Any separate soybean-hull variants that should be individually marketed.
4. Written business address, if it should be displayed.
5. Production domain for canonical, hreflang, and sitemap URLs.
6. Any client/supplier name or logo permitted for public use.
7. Documented certifications, capacities, dates, statistics, or product specifications. -->
