# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for **Quiet Media** — a boutique film production company based in Wiltshire, UK, founded by Samuel and Tamy in 2020. The site prioritises booking intro calls.

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

**Design system:** `colors_and_type.css` is the reference file for the design tokens (colors, typography scale, spacing). It is not imported by `index.html` — use it when adding new sections to stay on-brand.

**Brand assets:** `assets/` — logo variants (black/white), q_glyph.png, q_mark.svg. The `QMark` component is an inline SVG (not an image), so the assets are design references only.

## Key design decisions

- **Palette:** `#0A0A0A` near-black dominant; `#EDECE8` cream for the booking CTA section
- **Typography:** DM Sans 300 (light) throughout; wordmark at 15px weight 300 letter-spacing `-0.01em`
- **No border-radius** on structural elements — brand is minimal/sharp
- **Film grain overlay** applied via `body::after` with an SVG filter at 3.5% opacity
- **Scroll reveal** via `.reveal` / `.reveal.visible` CSS classes, wired by `IntersectionObserver` in `useReveal()`
- Booking modal is **simulated** — `handleSubmit` shows a confirmation screen but sends nothing. Replace with Calendly/Cal.com embed when ready.
