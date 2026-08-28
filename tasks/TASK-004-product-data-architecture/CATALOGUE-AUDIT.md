# Catalogue Audit

## Baseline reviewed

The pre-Task-004 implementation used one flat `ALNESOUR_PRODUCTS` array. It was functional, but the renderer also owned category labels, soybean-hull and finished-feed group names/descriptions, the grouping rules, and image assumptions. The fava-bean-hulls record incorrectly reused the soybean-hulls image despite no dedicated trusted image being available.

## Coupling removed

| Concern                                 | Previous location                 | Task-004 location                                  |
| --------------------------------------- | --------------------------------- | -------------------------------------------------- |
| Categories and localized category names | `products.js`                     | catalogue `categories`                             |
| Family names and descriptions           | `products.js`                     | catalogue `families`                               |
| Product facts and descriptions          | flat product records              | catalogue `products`                               |
| Variants                                | repeated `supported` arrays       | individual variant records connected to one family |
| Homepage grouping                       | product-ID conditions in renderer | family and product `placement.homepage`            |
| Availability labels                     | renderer UI labels                | catalogue `availability`                           |
| Image state                             | undocumented strings              | structured `image` object with internal status     |
| English terminology confirmation        | public-facing field               | non-rendered `internal.englishNameStatus`          |

The renderer now selects the locale, filters only complete enabled products, groups the data for the homepage, creates DOM safely, and builds localized WhatsApp inquiries. It has no catalogue-specific business copy.

## Deferred to Task-005

The Products-page layout and visual treatment of missing images remain unchanged in scope. Task-005 can consume the individual catalogue records to design the final category and family presentation.
