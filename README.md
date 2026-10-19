# GeoPETS — Checkpoint 040 Stage 1 candidate

This is an incremental patch of the existing gold-and-blue G-P Device. It is NOT approved for production. No live GitHub changes have been made.

Open `index.html` to review. Use HTTP hosting for reliable origin-based browser storage; moving between file URLs and a hosted site does not automatically transfer local saves. Export a save before changing environments.

## Changes
- Entry screen inside the rounded device screen, keyboard focus contained until entry.
- Player labels remain a local chooser with shared saves, not authentication.
- Replace competing 038/039 layout contracts with one final responsive contract.
- Keep mobile text readable; allow document scrolling rather than shrinking the device to viewport height.
- Centre header uses separate rows; action buttons have readable labels and larger targets.
- Back returns to previous pages and restores ordinary input fields/scroll.
- Existing game engine, species, move profiles, storage keys and embedded assets preserved.
- Release metadata corrected to 040 candidate.

## Tests
`npm test` runs static and lightweight DOM smoke tests (no dependencies required).
For real browser testing, `npm install`, `npx playwright install chromium`, then `npm run test:browser`.
The browser suite checks five viewports, entry containment, eleven OS pages, label/target checks, Back navigation, a battle turn and refresh persistence. It writes screenshots/reports into `test-results/`.
A real iPhone/Safari check is still required; Chromium emulation is not iPhone certification.

## Approval and deployment
Branch: `work/stage-1-responsive-qa` (local only).
Do not upload/merge this into live main until browser tests and user acceptance pass.
The repository as cloned contained only README.md, index.html and package.json: the source package's advertised test files/deploy workflow were NOT present in main.
No deployment workflow is added by this patch.

See work-stage1/STATUS.md, BASELINE_COMPARISON.md and the original 400-row tracker.
