# ST-01 — Repository Audit

**Task:** TASK-001 — Brand, Content & Visual Direction  
**Status:** Complete — owner approved 2026-08-27
**Audit date:** 2026-08-27  
**Scope:** All tracked and working-tree files, excluding Git internals.

## Executive findings

- The repository contains a complete, older static-site implementation. It remains the correct base to **update**, not a release candidate to preserve unchanged.
- `AGENTS.md`, `AGENTS_V2.md`, and `DESIGN.md` overlap and disagree with the current TASK-001 brief. In particular, the v2 brief instructs a full redesign and exposes optional/unconfirmed products; TASK-001 explicitly prohibits both during this task.
- The product data exposes unconfirmed optional products and collapses the confirmed soybean-hull variants into one generic item. It must be replaced in the later product-data task.
- Screenshot assets are stale: visual inspection shows a materially different page structure from the checked-in source. They are not valid visual-regression baselines.
- Three of the four test scripts use stale selectors or assumptions. The scripts should be replaced after the approved global layout and product architecture exist.
- The existing documentation truth is the combination of the current `AGENTS.md` and TASK-001. TASK-001 takes precedence for this foundation task because it supplies newer, confirmed product and claims data.

## Decision key

| Action | Meaning                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------ |
| KEEP   | Retain as-is for the next task.                                                                  |
| UPDATE | Retain, but revise in a scoped future task.                                                      |
| MERGE  | Preserve selected useful content in the consolidated source of truth, then remove the duplicate. |
| DELETE | Remove only after this audit is approved.                                                        |

## File-by-file audit

| Path                                                                      | Purpose                                   | Current status                   | Action | Reason                                                                                                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------- | -------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`                                                               | Existing website rules and business brief | Active, superseded in parts      | UPDATE | Retain core guardrails, but align facts, product list, import wording, execution sequence, and source-of-truth hierarchy with TASK-001.       |
| `AGENTS_V2.md`                                                            | Previous redesign brief                   | Duplicate and contradictory      | MERGE  | Preserve compatible visual/UX observations in `AGENTS.md`; then remove this competing instruction file.                                       |
| `DESIGN.md`                                                               | Existing v2 design system                 | Useful but pre-approval          | UPDATE | Retain as a reference, then replace after the TASK-001 brand direction receives approval.                                                     |
| `IMAGE_SOURCES.md`                                                        | Image provenance and replacement notes    | Active, partly outdated          | UPDATE | Preserve provenance. Update once approved image inventory determines which temporary assets remain.                                           |
| `README.md`                                                               | Local-run and maintenance guide           | Active but outdated              | UPDATE | Keep the operational guidance; update product and documentation references after consolidation.                                               |
| `robots.txt`                                                              | Crawl policy placeholder                  | Valid placeholder                | KEEP   | It correctly avoids inventing a production sitemap URL.                                                                                       |
| `sitemap.xml`                                                             | Domain-independent sitemap placeholder    | Valid placeholder                | KEEP   | It correctly contains no invented production URLs.                                                                                            |
| `index.html`                                                              | Arabic home page                          | Existing implementation          | UPDATE | Requires later content and design work; no redesign in TASK-001.                                                                              |
| `about.html`                                                              | Arabic about page                         | Existing implementation          | UPDATE | Requires later copy and layout work, including corrected experience wording.                                                                  |
| `products.html`                                                           | Arabic products page                      | Existing implementation          | UPDATE | Requires the future confirmed, variant-ready product architecture.                                                                            |
| `services.html`                                                           | Arabic services page                      | Existing implementation          | UPDATE | Requires corrected factory-direct and import/external-source wording.                                                                         |
| `contact.html`                                                            | Arabic quote page                         | Existing implementation          | UPDATE | Retain as the future quote-flow base; revise only in its dedicated task.                                                                      |
| `en/index.html`                                                           | English home page                         | Existing implementation          | UPDATE | Must follow approved Arabic content and visual system later.                                                                                  |
| `en/about.html`                                                           | English about page                        | Existing implementation          | UPDATE | Must follow approved Arabic content and corrected claims later.                                                                               |
| `en/products.html`                                                        | English products page                     | Existing implementation          | UPDATE | Must follow future approved product architecture.                                                                                             |
| `en/services.html`                                                        | English services page                     | Existing implementation          | UPDATE | Must follow corrected capability wording later.                                                                                               |
| `en/contact.html`                                                         | English quote page                        | Existing implementation          | UPDATE | Retain as the future quote-flow base; revise only in its dedicated task.                                                                      |
| `assets/css/tokens.css`                                                   | Existing colour tokens                    | Active, pre-approval             | UPDATE | Rebuild from the approved TASK-001 brand direction.                                                                                           |
| `assets/css/styles.css`                                                   | Global styling                            | Active, compressed               | UPDATE | Reformat and refactor only after direction approval; current styling reflects the rejected editorial treatment.                               |
| `assets/js/main.js`                                                       | Header/mobile navigation behavior         | Active, compressed               | UPDATE | Keep functional intent; rewrite accessibly as part of global layout work.                                                                     |
| `assets/js/products-data.js`                                              | Product catalogue data                    | Incorrect public data            | UPDATE | Replace later with the confirmed five raw-material items, finished-feed categories, `enabled`, `featured`, variants, and availability fields. |
| `assets/js/products.js`                                                   | Product rendering/filtering               | Existing implementation          | UPDATE | Retain the concept; rebuild against the approved data model and accessible filtering needs.                                                   |
| `assets/js/quote.js`                                                      | WhatsApp quote construction               | Existing implementation          | UPDATE | Retain the conversion pattern; adjust messages and field model in the contact-flow task.                                                      |
| `assets/images/hero/feed-handling-1600.webp`                              | Responsive hero image                     | Temporary sector illustration    | UPDATE | Keep only as an interim asset if the owner approves it; future hero imagery needs an explicit image brief.                                    |
| `assets/images/hero/feed-handling-960.webp`                               | Responsive hero image                     | Temporary responsive derivative  | UPDATE | Same decision as its 1600px source.                                                                                                           |
| `assets/images/hero/warehouse-supply-documentary.png`                     | Current hero image                        | Temporary sector illustration    | UPDATE | It may remain temporarily, but should not dictate the approved future hero art direction.                                                     |
| `assets/images/products/soybean-hulls.webp`                               | Soybean hull product illustration         | Temporary sector illustration    | UPDATE | Useful as an interim generic image; future variants need their own approved image plan.                                                       |
| `assets/images/products/degummed-soybean-oil.webp`                        | Oil product illustration                  | Temporary, terminology-dependent | UPDATE | Retain only pending confirmation of the English commercial name for `زيت منزوع`.                                                              |
| `assets/images/products/finished-feed-documentary.png`                    | Finished-feed illustration                | Temporary and over-reused        | UPDATE | Do not use one image for unrelated finished-feed types in the future design.                                                                  |
| `tests/redesign-check.mjs`                                                | Basic static-site smoke test              | Partly useful, stale coverage    | UPDATE | Replace its page assertions and add currently required navigation, language, filter, and WhatsApp behavior checks after the DOM is approved.  |
| `tests/secondary-visual.mjs`                                              | Captures selected screenshots             | Stale baseline generator         | DELETE | It records an unapproved, pre-TASK-001 design and has no visual comparison step. Recreate after visual direction approval.                    |
| `tests/site-check.mjs`                                                    | Broad UI/behavior check                   | Broken against current DOM       | DELETE | It expects `nav-open`, `#products-grid`, `#fullName`, `#phone`, and other obsolete selectors. Replace after the new DOM is established.       |
| `tests/visual-check.mjs`                                                  | Homepage screenshot capture               | Stale baseline generator         | DELETE | It only captures the old homepage and does not validate an approved baseline. Recreate after the redesigned homepage is accepted.             |
| `tests/screenshots/about-en-390.png`                                      | Old mobile screenshot                     | Stale visual baseline            | DELETE | Visual review confirms it documents the older design, not the checked-in source.                                                              |
| `tests/screenshots/contact-ar-390.png`                                    | Old mobile screenshot                     | Stale visual baseline            | DELETE | Visual review confirms it documents the older design, not the checked-in source.                                                              |
| `tests/screenshots/home-ar-1024x768.png`                                  | Old Arabic home screenshot                | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-ar-1440x900.png`                                  | Old Arabic home screenshot                | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-ar-390x844.png`                                   | Old Arabic home screenshot                | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-ar-768x1024.png`                                  | Old Arabic home screenshot                | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-ar-mobile-mid.png`                                | Old Arabic home segment                   | Stale visual baseline            | DELETE | It is an incomplete segment of an unapproved design.                                                                                          |
| `tests/screenshots/home-ar-mobile-top.png`                                | Old Arabic home segment                   | Stale visual baseline            | DELETE | It is an incomplete segment of an unapproved design.                                                                                          |
| `tests/screenshots/home-en-1024x768.png`                                  | Old English home screenshot               | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-en-1440x900.png`                                  | Old English home screenshot               | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-en-390x844.png`                                   | Old English home screenshot               | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-en-768x1024.png`                                  | Old English home screenshot               | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tests/screenshots/home-en-mobile-mid.png`                                | Old English home segment                  | Stale visual baseline            | DELETE | It is an incomplete segment of an unapproved design.                                                                                          |
| `tests/screenshots/home-en-mobile-top.png`                                | Old English home segment                  | Stale visual baseline            | DELETE | It is an incomplete segment of an unapproved design.                                                                                          |
| `tests/screenshots/products-ar-1440.png`                                  | Old Arabic products screenshot            | Stale visual baseline            | DELETE | Its UI/content does not match the checked-in current product source.                                                                          |
| `tests/screenshots/services-en-1440.png`                                  | Old English services screenshot           | Stale visual baseline            | DELETE | No approved post-TASK-001 baseline exists.                                                                                                    |
| `tasks/TASK-001-brand-content-visual-direction/README.md`                 | Approved task brief                       | Active, untracked task input     | KEEP   | It is the current task source and its newer confirmed information takes precedence for TASK-001.                                              |
| `tasks/TASK-001-brand-content-visual-direction/ST-01-repository-audit.md` | This audit                                | New task deliverable             | KEEP   | Records the reviewable decision set before cleanup begins.                                                                                    |

## Required approvals before ST-02

1. Approve the deletion of the 16 screenshot files and the three obsolete test scripts.
2. Approve merging `AGENTS_V2.md` into a single updated `AGENTS.md`, then deleting the duplicate.
3. Approve the proposed documentation hierarchy:
   - `AGENTS.md` — durable implementation rules and confirmed business guardrails.
   - `README.md` — how to run and maintain the site.
   - `DESIGN.md` — approved visual-system specification.
   - `IMAGE_SOURCES.md` — provenance only.
   - `tasks/` — scoped task briefs, audits, and review records.
4. Confirm whether the older original AI images should remain as temporary placeholders until a separate owner-led image-generation task.

## OpenDesign discovery note

OpenDesign MCP tools are registered in this Codex session, but the local daemon at `http://127.0.0.1:7456` is unavailable. Project, skill, plugin, agent, and design-system discovery could therefore not run. Start the daemon before ST-08 so the required design exploration can be performed and recorded.

## No-change guarantee

This subtask created only this audit. No existing source, asset, test, screenshot, or configuration file was changed or deleted.

## Post-audit reconciliation

**Reconciled:** 2026-08-27 after ST-02 through ST-10 created their deliverables. The table above records the initial audit state; this section classifies every tracked file added or materially changed during TASK-001 so the audit remains complete for the current worktree.

| Path                                                                    | Purpose                                                        | Status                                  | Action | Reason                                                                                                         |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| `.prettierignore`                                                       | Minimal formatter exclusions                                   | Active                                  | KEEP   | Keeps Git internals and binary image assets out of source formatting.                                          |
| `.prettierrc.json`                                                      | Shared source-formatting configuration                          | Active                                  | KEEP   | Applies a lightweight, repeatable formatting baseline without adding a build system.                           |
| `tasks/TASK-001-brand-content-visual-direction/PROGRESS.md`            | Task execution record                                          | Active                                 | UPDATE | Keep current completion evidence and update only as the outstanding review gate changes.                       |
| `tasks/TASK-001-brand-content-visual-direction/ST-05-business-content-foundation.md` | Confirmed business and content guardrails | Active proposal                         | KEEP   | Preserves the reviewed factual foundation for later page tasks.                                                 |
| `tasks/TASK-001-brand-content-visual-direction/ST-06-07-homepage-content-and-copy.md` | Proposed Arabic content architecture and copy | Owner review required | KEEP   | Retain as the approval package; it is not implementation authorization.                                        |
| `tasks/TASK-001-brand-content-visual-direction/ST-08-brand-direction.md` | Proposed brand direction                                     | Owner review and OpenDesign review required | UPDATE | Keep as the provisional direction and finalize only after the required exploration and owner decision.         |
| `tasks/TASK-001-brand-content-visual-direction/ST-09-image-requirements.md` | Future image inventory                                      | Active plan                             | KEEP   | Provides the asset brief and owner-led approval workflow; it adds no final images.                             |
| `tasks/TASK-001-brand-content-visual-direction/ST-10-final-review.md`  | Completion and approval record                                | Review pending                          | UPDATE | Retain and update when the remaining review evidence and owner decision are available.                         |

### Test review reconciliation

| Test or asset set                    | Classification | Current decision                                                                                                                     |
| ------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `tests/redesign-check.mjs`           | KEEP           | Rewritten as a self-contained 42-check smoke test: it starts and closes its own local static server and verifies page and quote flow basics. It is not a full future QA suite. |
| `tests/secondary-visual.mjs`         | DELETE         | Removed as a stale screenshot generator with no approved visual baseline.                                                            |
| `tests/site-check.mjs`               | DELETE         | Removed because its selectors described a superseded DOM.                                                                             |
| `tests/visual-check.mjs`             | DELETE         | Removed because it captured an unapproved old homepage only.                                                                          |
| `tests/screenshots/` former contents | DELETE         | The 16 stale screenshot files were removed; the empty directory remains available for future approved regression captures.           |
