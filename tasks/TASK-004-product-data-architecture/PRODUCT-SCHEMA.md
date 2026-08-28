# Product Catalogue Schema

`assets/js/products-data.js` exposes `window.ALNESOUR_CATALOG`. It is static, browser-readable data with `schemaVersion: 1`; no build step or API is required.

## Top-level model

```js
{
  schemaVersion: 1,
  availability: {},
  categories: {},
  families: {},
  products: [],
}
```

`categories` and `families` are keyed by stable IDs. IDs are lowercase, hyphenated where needed, locale-independent, and should not change after publication without a clear migration reason.

## Categories

Each category has `id`, localized `name`, and a stable `sortOrder`.

- `raw` — خامات أعلاف / Feed Raw Materials
- `finished` — أعلاف جاهزة / Finished Feed

## Families

A family groups related individual product records for intentional presentations such as the homepage. Required fields are `id`, `categoryId`, `enabled`, `sortOrder`, localized `name` and `description`, and an `image` object. `placement.homepage: true` permits a grouped homepage card when it has public member products.

The current families are `soybean-hulls` and `finished-feed`. The latter is a family because it has a real grouped homepage presentation while its three member products remain separately renderable in the catalogue.

## Products

Each product record contains:

| Field                 | Meaning                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                  | Stable machine ID.                                                                                               |
| `categoryId`          | Required reference to a category.                                                                                |
| `familyId`            | Optional reference to a family.                                                                                  |
| `variant`             | Optional `{ id, name: { ar, en } }`; soybean-hull variants use this.                                             |
| `enabled`             | Explicit public-catalogue approval. Only `true` can render. It is not a stock flag.                              |
| `featured`            | Indicates the item is suitable for highlighted presentation; it does not guarantee stock or render it by itself. |
| `placement.homepage`  | Explicit standalone homepage placement. Families use the same field for grouped placement.                       |
| `sortOrder`           | Numeric, spaced ordering value.                                                                                  |
| `availability`        | Controlled availability state.                                                                                   |
| `name`, `description` | Required localized public text for enabled products.                                                             |
| `image`               | `{ src?, status }`; public rendering uses `src` only when present.                                               |
| `internal`            | Never rendered. Holds confirmation and asset-review metadata.                                                    |

## Controlled states

`availability` permits `on-request` and `unavailable`. All current public products use `on-request`, which means buyers should ask about current availability. It must never be interpreted as immediate stock.

`image.status` permits `temporary`, `approved`, and `missing`. A `missing` image requires no source and renders a text-only card; the renderer never substitutes an unrelated image. Image status is internal and never displayed.

`internal.englishNameStatus` records `confirmed` or `temporary`. `Feed-Related Oil Product` is intentionally marked `temporary` for `زيت منزوع` until the owner confirms its exact English commercial name.

## Validation and safe rendering

`window.ALNESOUR_VALIDATE_CATALOG(catalogue)` is a small test helper. It detects invalid schema versions, duplicate product IDs and ambiguous sort orders, broken category/family references, invalid `enabled` or availability values, missing localized public fields, and invalid images.

The renderer independently fails closed: it only renders records with `enabled === true`, a known category, a known availability value, and localized name and description. Internal metadata is never read for public copy.

## Future product workflow

1. Confirm the Arabic commercial name and category.
2. Decide whether it belongs to an existing or new family.
3. Confirm its English name, or mark the internal English status `temporary`.
4. Add short, safe localized descriptions.
5. Set explicit `enabled` and availability values.
6. Decide standalone or family homepage placement.
7. Add an approved image, or use `status: 'missing'`.
8. Run the catalogue and site tests, then review before publishing.

To remove a public offering, first set `enabled: false`; this preserves the record but removes it from all public rendering. Do not toggle `enabled` for temporary stock changes—use the controlled availability model and approved public wording instead.
