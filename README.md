# GeoPETS G-P Device — GitHub Pages launch package

This package contains the **original Checkpoint 036 browser game** as `index.html`, without replacing the gameplay with a mockup or demo. The site is static and can be hosted on GitHub Pages.

## Publish to GitHub Pages

1. Extract the ZIP locally. Upload **all contents** to the **root** of the intended GitHub repository, including the hidden `.github` folder and `.nojekyll` file. Do not upload the ZIP as the only repository file.
2. On GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Ensure the default branch is `main`, or edit the workflow's branch name if necessary.
4. Commit and push. The GitHub Actions workflow runs `npm test`, then deploys the website.
5. Open the GitHub Pages URL shown under Settings → Pages. The typical project URL format is `https://USERNAME.github.io/REPOSITORY/`.

## Local launch

Open `index.html` in a browser. For a local HTTP origin (recommended for browser storage consistency), from this folder run `python -m http.server 8000` and open `http://localhost:8000/`.

## What is and is not verified

- Static validation: original game shell, inline JavaScript parsing, key gameplay markers and packaging integrity.
- NOT verified in this package: real-device gameplay testing, cross-browser save restoration, security penetration tests, online multiplayer, live AI agent APIs, live store/payment processing or all 400 proposed improvements.
- GitHub Pages is **static hosting**, not a private authentication backend. Do not publish passwords, API keys, private household records, or sensitive snapshots in this public repository.
- Browser save data typically belongs to the browser + website origin. A save from `file://` or another site may **not** automatically appear on GitHub Pages. Use the game's existing export/import controls where available and test them before relying on them.
- A public GitHub repository exposes its source to visitors. Treat any in-browser role switches as UI controls, not secure server-side access control.

## Release baseline

`index.html` preserves the uploaded GeoPETS Checkpoint 036 source. Any future 400-improvement work must be separately implemented and accepted with regression testing before being marked complete.

## Testing

Run `npm test` with Node.js 22+. It validates the static source but does not execute a graphical browser.
