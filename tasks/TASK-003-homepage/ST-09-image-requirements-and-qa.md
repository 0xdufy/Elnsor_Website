# ST-09 — Image Requirements and QA

**Status:** Complete — 2026-08-27

## Temporary image inventory

| Section | Current asset | Status | Future requirement | Recommended aspect ratio |
| --- | --- | --- | --- | --- |
| Hero | `assets/images/hero/feed-handling-1600.webp` with 960px responsive source | Temporary visual context; not approved final photography | Documentary industrial feed-supply activity with a clear Arabic-copy safe zone, natural light, bulk materials/loading, no brands, logos, or fake text | 16:9 desktop; related mobile crop |
| Soybean-hulls family | `assets/images/products/soybean-hulls.webp` | Temporary product study | Product-specific material-handling image that can represent the family without implying a specification | 16:10 |
| Fava-bean hulls | No image rendered | Deliberately image-free to avoid misrepresentation | Separate raw-material documentary study | 16:10 |
| Oil product | `assets/images/products/degummed-soybean-oil.webp` | Temporary working-name illustration | Unbranded industrial oil-handling image after its exact English commercial name is confirmed | 16:10 |
| Finished-feed family | `assets/images/products/finished-feed-documentary.png` | Temporary category image | Unbranded, documentary finished-feed handling image; do not depict unconfirmed formulations or packaging | 16:10 |

No new final image was generated for this task.

## Responsive inspection

The Arabic homepage was rendered and visually inspected at 1440×900, 1024×768, 768×1024, and 390×844.

- Hero copy remained readable and actions stayed visible.
- The 390px layout stacked actions and grids without horizontal overflow.
- Product, process, header, footer, and shared mobile-navigation behavior remained usable.
- The English Homepage was smoke-tested at the same viewport set to verify compatibility with shared CSS.

Review captures:

- `qa/homepage-1440x900.png`
- `qa/homepage-1024x768.png`
- `qa/homepage-768x1024.png`
- `qa/homepage-390x844.png`
