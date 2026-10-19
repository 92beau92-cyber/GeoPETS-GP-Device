# Baseline comparison

Repository: https://github.com/92beau92-cyber/GeoPETS-GP-Device
Live: https://92beau92-cyber.github.io/GeoPETS-GP-Device/

Both repository index.html and the fetched live HTML match failed Checkpoint 038 exactly.
Git HEAD: f4a8b4f5de6394893843f6a9ea35beb99ec882cd.

| Source | SHA-256 | Status |
|---|---|---|
| Protected 036 | 26dec6b3b235264a9dc2e991303c4e0f8e85766cc207a83e0331ff862130966c | preserved |
| Failed 038 / live / main | 37c115de12f62822515923a57aa41648e4e8a0dc0055906a90f86431385f14a8 | user reported failure |
| Candidate 039 | 123ad450d602db4578b4894e559241ea2101ed946f22fcc7145075abb35b165c | unaccepted; not live |

039 moves the entry gate earlier in the document but still outside the device; introduces extra CSS with !important declarations, viewport-height shrink rules and an outside-device badge. Its README/package still identify older releases.
040 reuses the 039 source, removes the conflicting 038/039 responsive contracts and gate handlers, adds one contained entry and final layout contract. All nine unique embedded image assets and the full battle engine section match 039. The original uploaded floorplan remains embedded without modification.

Current main has only three tracked files; its package.json references tests/validate.mjs, which was missing. This patch adds the test files. No deployment workflow from the handover has been silently enabled.
