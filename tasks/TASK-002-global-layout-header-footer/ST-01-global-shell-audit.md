# ST-01 — Current Global-Shell Audit

Completed 2026-08-27.

## Baseline findings

| Concern                | Baseline                                                                                              | Canonical TASK-002 decision                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Header                 | The Arabic homepage alone had a partial mobile menu; the other nine pages used desktop-only variants. | One semantic static header on every page, with desktop navigation and a shared mobile menu.                      |
| Navigation             | Labels, CTA copy, and navigation landmarks were inconsistent.                                         | Locale-specific navigation labels, one current-page link, and `aria-label` on each primary navigation landmark.  |
| Language switch        | The equivalent routes were already correct where present.                                             | Keep the equivalent-page routing on both the header and mobile menu.                                             |
| Skip and main landmark | Only the Arabic homepage had a skip link and `#main` target.                                          | Every page uses a localized skip link and one `main#main` landmark.                                              |
| Footer                 | Only the Arabic homepage had a footer.                                                                | One locally equivalent B2B footer on all Arabic and English pages.                                               |
| Mobile controls        | No standard button semantics, control relationship, or Escape behavior existed across all pages.      | Real menu buttons with `aria-expanded`, `aria-controls`, Escape close, link close, and desktop-breakpoint close. |
| Design foundation      | Existing token names and fonts conflicted with approved TASK-001 design direction.                    | Approved Operational Green tokens and IBM Plex Sans Arabic / IBM Plex Sans typography.                           |

## Scope guardrail

The audit confirmed that homepage, product, service, about, and contact content already need later page-specific work. TASK-002 changes only the global shell and the supporting shared CSS/JavaScript; it does not implement the TASK-003 background-image Hero concept.
