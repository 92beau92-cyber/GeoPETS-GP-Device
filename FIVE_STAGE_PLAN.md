# 02 — FIVE STAGES / 400 REVIEWED IMPROVEMENTS

**400 is the number of reviewed proposals, not 400 independent implementation tasks.** Reconcile duplicate proposals and group dependent work into bricks. The 80-number bands below are **tracking allocations only**, not proof of the subject of every original numbered improvement. Reassign only with a documented mapping to recovered original proposal IDs; maintain all 400 IDs and decisions.

| Stage | Tracking IDs | Scope / deliverables | Difficulty 1–5 | Relative Work-credit demand | Approval gate |
|---|---|---|---|---|---|
| 1 — Baseline, responsive UI, login/QA | 001–080 | Source audit, 039 acceptance, mobile/desktop/landscape layout system, header/buttons/main-panel fixes, correct entry workflow, navigation/accessibility, visual regression harness, preserved game save/battle baseline | 3–4 | MED | User confirms device and entry pass on iPhone and desktop; save/battle regression passes |
| 2 — Core GeoPETS RPG | 081–160 | Battle/party/moves/status/VFX, capture/rewards/encounters, BAG/GeoDEX, progression, deterministic game-state and persistence, performance; dedupe rather than rebuild existing systems | 4–5 | HIGH | Automated + manual gameplay tests and saved-game compatibility |
| 3 — Command Centre, T.A.I. and project work | 161–240 | CC/Home DECK, cards, briefcases, S.M.A.R.T AI, project orchestration, uploads/transcription where feasible, permissions, free asset discovery; design secure backend boundaries before promising live AI | 4–5 | HIGH | Functional demo and explicit approval for external AI or backend services |
| 4 — HOME OS, profiles, Store and publishing | 241–320 | Household/cleaner roles, private data boundaries, Home Treasury, Store workflow, approvals, products, audit trails, no public secrets, deployable backend only if authorized | 5 | HIGH | Security/privacy review, role tests, no real transactions without approval |
| 5 — Device quality, portability and final release | 321–400 | Save portability, export/import, asset registry/license audit, device/performance/accessibility/audio compatibility, crash recovery, cross-platform QA, final integration and launch | 4–5 | HIGH | End-to-end regression and explicit final launch approval |

## Within each stage
- Brick 0: verify baseline + enumerate exact feature IDs and existing code ownership.
- Brick 1: tests that reproduce current bugs or establish preserved behavior.
- Bricks 2–N: smallest dependency-ordered feature groups; each brick has source mapping, acceptance tests, rollback and change log.
- Brick N+1: device matrix: iPhone small/large, Android representative, Windows desktop, portrait/landscape, zoom, keyboard, touch.
- Brick N+2: review evidence and approval; NO automatic merge to main.

## Dependency order
1. Integrity, GitHub deploy baseline and saved data compatibility.
2. Common responsive design and navigation architecture.
3. Game-state model and battle/persistence tests.
4. AI/role/backend permission model (before private data or live worker actions).
5. Product/Store security gates and user approval flows.
6. Device accessibility, performance, offline/export, release automation and end-to-end tests.

## Credit efficiency
- Work sessions should be scoped to a single stage/brick and run existing tests first.
- Prefer test-first minimal diffs and batch evidence captures (do not reopen the same pages repeatedly).
- Avoid speculative feature development when original improvement wording is unavailable.
- Use free assets only unless the user sets a spending limit before the project.
- Keep working on branches and ZIP previews; only deploy approved changes.
- Do not estimate exact Emergent/Work credit counts as if measured. If the platform exposes usage, record actual observed values.
- After a failed test, correct that brick before starting a new stage.

## Definition of done for each reviewed improvement
Original text recovered + decision KEEP/ADJUST/REMOVE preserved + duplicates/dependencies identified + code change (or reason existing implementation meets it) + automated test + visual/manual acceptance where applicable + evidence + release version. REMOVE means do not implement. ADJUST means use the revised scope, not the original as-is.
