# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for **Quiet Media** — a boutique film production company based in Wiltshire, UK, founded by Samuel and Tamy in 2020. The site prioritises booking intro calls.

## Workflow: branch, preview, then merge (always follow this)

This is the live site. Every change goes through a branch and a preview. Nothing reaches `main` until Samuel has seen it and said yes.

1. **Make a branch for each change.** Never commit or push directly to `main`. Start from the latest `main` and give the branch a short descriptive name (e.g. `fix-booking-button`), unless the session has already assigned a branch name, in which case use that.
2. **Commit and push the branch** to GitHub.
3. **Open a pull request into `main`** so the change can be reviewed in one place.
4. **Give Samuel a way to view the change before merging:**
   - A live preview link of the branch, using:
     `https://raw.githack.com/samueljjh/quietmedia/<branch-name>/index.html`
   - The pull request link, so the code changes can be seen side by side.
   - A short plain-English summary of what changed and anything to check, plus a screenshot where it helps.
5. **Wait for approval.** Do not merge the pull request until Samuel explicitly says to merge it. If tweaks are requested, make them on the same branch and share the preview again.
6. **After merging**, the live site (`www.quietmedia.co.uk`) updates from `main` via GitHub Pages.

## Running the site

No build step. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

The `.jsx` component files must be served over HTTP (not `file://`) because they're loaded via `<script type="text/babel" src="...">`. Opening `index.html` as a local file will fail to load the components.

## Architecture

Static site using **React 18 via CDN + Babel Standalone** for in-browser JSX transpilation. No build toolchain.

**Entry point:** `index.html` — loads React/ReactDOM/Babel from CDN, defines global CSS and the `QMark` SVG component, then loads the three component files as `text/babel` scripts before mounting the app.

**Component files** (loaded as globals via `Object.assign(window, {...})`):
- `Header.jsx` → `QMHeader` — fixed nav with scroll-aware opacity, mobile hamburger drawer
- `Footer.jsx` → `QMFooter` — brand values strip, nav links, contact, social
- `BookingModal.jsx` → `BookingModal` — 4-step simulated booking flow (call type → date → time → details → confirmation)

**Page routing** is client-side via `React.useState` + `sessionStorage` — no URL changes. Pages: `home`, `work`, `about`, `team`.

**Design system:** `colors_and_type.css` holds the design tokens (colors, typography scale, spacing, radii) and is loaded by `index.html`.

**Brand assets:** `assets/` — logo variants (black/white), q_glyph.png, q_mark.svg. The `QMark` component is an inline SVG (not an image), so the assets are design references only.

## Key design decisions

- **Palette:** `#0A0A0A` near-black dominant; `#EDECE8` cream for the booking CTA section
- **Typography:** DM Sans 300 (light) throughout; wordmark at 15px weight 300 letter-spacing `-0.01em`
- **Curves follow Quiet Studio:** full-bleed sections, hero and page edges stay sharp; contained things are soft. Buttons are pills (`var(--r-pill)`), cards/panels/modals/feature images use `var(--r-xl)` (22px), strip stills and option tiles `var(--r)` (14px), inputs `var(--r-s)` (10px). Tokens live in `colors_and_type.css`. Cards sit 12px apart as separate surfaces rather than joined with hairlines.
- **Film grain overlay** applied via `body::after` with an SVG filter at 3.5% opacity
- **Scroll reveal** via `.reveal` / `.reveal.visible` CSS classes, wired by `IntersectionObserver` in `useReveal()`
- Booking modal is **simulated** — `handleSubmit` shows a confirmation screen but sends nothing. Replace with Calendly/Cal.com embed when ready.
