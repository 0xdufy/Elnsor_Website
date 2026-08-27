# ST-10 — TASK-001 Final Review

**Status:** Review pending — not approved for implementation  
**Review date:** 2026-08-27

## Completion evidence

| Requirement                                               | Evidence                                                                                                                                             | Status                                    |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Entire repository audited; every file classified          | [ST-01 Repository Audit](ST-01-repository-audit.md)                                                                                                  | Complete                                  |
| Approved obsolete content removed                         | 16 stale screenshots and 3 stale test scripts removed; recorded in [Progress](PROGRESS.md)                                                           | Complete                                  |
| Maintained source formatted                               | `.prettierrc.json`, `.prettierignore`, and passing `npx prettier --check`                                                                            | Complete                                  |
| Documentation contradictions resolved                     | Consolidated `AGENTS.md`; removed `AGENTS_V2.md`; updated `README.md`                                                                                | Complete                                  |
| Single durable implementation source of truth             | Documentation hierarchy in `AGENTS.md` and `README.md`                                                                                               | Complete                                  |
| Confirmed business facts and safe claims documented       | [ST-05 Business & Content Foundation](ST-05-business-content-foundation.md)                                                                          | Complete                                  |
| Current catalogue corrected and unconfirmed stock removed | `assets/js/products-data.js`: 5 confirmed raw materials, 3 confirmed finished-feed categories; optional soybean-meal and yellow-corn entries removed | Complete                                  |
| Factory-direct and import wording corrected               | Arabic/English public source now says factory-direct supply and imported/diverse sources; obsolete wording search returned no matches                | Complete                                  |
| Arabic content tone defined                               | ST-05 content voice guidance                                                                                                                         | Complete                                  |
| Homepage architecture and Arabic copy prepared            | [ST-06 & ST-07 Homepage Architecture and Arabic Copy](ST-06-07-homepage-content-and-copy.md)                                                         | Proposed — owner review required          |
| Existing eagle identity and future lockup addressed       | [ST-08 Brand Direction](ST-08-brand-direction.md)                                                                                                    | Proposed — owner review required          |
| Typography and colour direction selected                  | Proposed `DESIGN.md` and ST-08                                                                                                                       | Proposed — owner review required          |
| Future image and feed-bag requirements documented         | [ST-09 Future Image Requirements](ST-09-image-requirements.md)                                                                                       | Complete; asset approval remains separate |
| No final AI images generated                              | No new raster assets added; ST-09 documents the owner-led workflow                                                                                   | Complete                                  |
| GitHub Pages remains preview-only                         | `AGENTS.md` and `README.md`                                                                                                                          | Complete                                  |
| Current static-site smoke checks pass                     | `node tests/redesign-check.mjs`: 42 checks, 0 failures                                                                                               | Complete                                  |
| OpenDesign design exploration used and recorded           | Codex cannot reach the registered OpenDesign daemon at `127.0.0.1:7456`; repeated discovery attempts failed                                          | **Blocked**                               |
| Explicit owner approval for content and visual decisions  | Awaiting review of ST-06/07 and ST-08                                                                                                                | **Blocked**                               |

## Owner review package

Please review these decisions before any new page/layout implementation begins:

1. **Hero**: `خامات أعلاف وأعلاف جاهزة بكميات تناسب نشاطك` and its supporting copy.
2. **Primary CTA**: use `اطلب سعر اليوم` consistently.
3. **Proof**: publish “more than 20 years of feed-market experience,” factory-direct supply, nationwide delivery coordination, and raw/finished feed scope.
4. **Catalogue**: present soybean hulls as fine, medium, and coarse variants; use the safe temporary English label `Feed-Related Oil Product` until the exact commercial name is confirmed.
5. **Visual direction**: Operational Green—deep green, warm neutrals, brass conversion accent, IBM Plex Sans Arabic/IBM Plex Sans, and a future simplified eagle + Arabic wordmark lockup.
6. **Images**: retain current AI images only temporarily and use the ST-09 brief for future owner-approved final assets.

## Required before TASK-001 can close

1. Make OpenDesign reachable from Codex and complete its capability discovery/design exploration.
2. Approve or revise the homepage content, primary CTA, product-family presentation, visual direction, typography, palette, and logo approach.
3. Confirm the exact English commercial name for `زيت منزوع`, or keep the temporary safe label until the later English-content task.

No homepage, global-layout, product-page, service-page, about-page, contact-flow, English rewrite, production SEO, final logo, feed-bag, or final-image implementation has been started as part of TASK-001.
