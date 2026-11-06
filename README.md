# Ragdoll Sandbox Guide

Unofficial English fan guide for [Ragdoll Sandbox](https://www.roblox.com/games/113398609378596/Ragdoll-Sandbox) on Roblox (universe **10771155665**, root place **113398609378596**), aimed at **ragdollsandbox.wiki**.

Not affiliated with Roblox Corporation or the Rise To Top group. The site does not redeem codes, sell Robux, or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://ragdollsandbox.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/ragdoll/site.config.ts` | Domain, universe id, theme, nav |
| Ads | `sites/ragdoll/ads.config.ts` | Adsterra Native Banner for this domain |
| Active site | `sites/active` → `ragdoll` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/ragdoll/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load Google Analytics. The Adsterra Native Banner after Quick Answer is enabled for ragdollsandbox.wiki with this domain’s own Get Code. See [ADS.md](ADS.md).

Roblox art lives in `public/images/official/roblox/` with `ATTRIBUTION.txt`. `public/favicon.ico` is a 32×32 crop of the official experience icon. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

## Pages

- `/` homepage
- `/codes` redeem code copied from the 6 Nov 2026 game description, plus how guides say to redeem it
- `/guide` short gameplay overview from that description
- `/about` disclaimer, privacy, image credits
- 404
