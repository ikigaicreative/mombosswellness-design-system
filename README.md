# Mom Boss Wellness Design System

Everything a developer needs to build the Mom Boss Wellness website and app on brand: design tokens, a Tailwind theme, React components, fonts, logos, icons, brand elements, approved photos, and the brand rules.

The repo is laid out the way Lovable reads a design system: tokens in `src/styles/`, a `tailwind.config.ts` at the root, components in `src/components/`, and a barrel at `src/index.ts`.

## Quick start

```bash
npm install
npm run dev        # playground: sample site + icon gallery
npm run build      # typecheck + production build
```

The playground (`src/App.tsx`, `src/pages/`) is the sample marketing site from the design system, built only from these components. Lovable does not copy those files into your app.

## Use it in Lovable

1. Lovable → Design Systems → import from Git, and paste this repo's URL (the repo must be public).
2. Release a version, then attach it to the Mom Boss Wellness project.
3. If Lovable reports an empty system, ask it to run discovery again, then release.

Design Systems need a paid Lovable plan. If styles look off, the project may be on Tailwind 4: ask Lovable to wire up Tailwind 3 styling for the design system.

## Use it in any React + Vite project

```ts
// tailwind.config.ts
import { mbwPreset } from "./design-system/src/theme/tailwind.theme";
export default { presets: [mbwPreset], content: ["./index.html", "./src/**/*.{ts,tsx}"] };
```

```css
/* src/index.css */
@import "../design-system/src/styles/theme.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```tsx
import { Button, Card, Icon } from "../design-system/src";

<Button variant="primary">Book a discovery call</Button>
<Icon name="running-on-empty" size={32} />
```

Tailwind classes come from the tokens: `bg-primary`, `bg-surface-page`, `text-ink-muted`, `bg-mbw-crown-gold`, `font-display`, `font-script`, `rounded-pill`, `shadow-card`, `duration-base`.

## What is where

| Path | What it holds |
| --- | --- |
| `system.md` | **Read first.** The rules for building on brand: color, type, shape, logos, icons, voice. |
| `src/styles/tokens.css` | Every token as a CSS variable, plus `@font-face` for the brand fonts. |
| `src/styles/motion.css` | Motion durations and easing. |
| `src/styles/theme.css` | shadcn/ui variables mapped to brand colors, plus base page styles. |
| `src/styles/fonts/` | Quicksand (5 weights), Montserrat (variable, roman and italic), Parisienne. |
| `src/tokens/tokens.json` | Source of truth for every token, with a usage note on each one. |
| `src/theme/tailwind.theme.ts` | Tailwind v3 preset (`mbwPreset`) and theme object (`mbwTheme`). |
| `src/components/` | 15 React components (Avatar, Badge, Button, Card, Alert, Modal, Checkbox, Input, Radio, Select, Switch, Textarea, Footer, NavBar, Tabs) and `Icon`. |
| `src/index.ts` | Exports every component, its props type, the icon data and the Tailwind theme. |
| `src/assets/logos/` | 28 logo SVGs: full logo, brandmark, submark and workmark in every colorway. |
| `src/assets/icons/` | 48 original MBW line icons (SVG), a sprite, and `icon-guide.json` (persona and realm sets). |
| `src/assets/elements/` | 18 brand element SVGs: sun, crown and curved path in six colors. |
| `brand/` | Copy of the brand-assets repo's `Brand/` folder: print and social logos (SVG and PNG), elements (SVG and PNG), fonts, every icon set (with Illustrator sources), hero images, and the curated `website assets/` (Laura photos, stock photos, partner logos, website icons). |
| `docs/system-overview.md` | Personas, icon sets and handoff notes. |
| `docs/design-system-reference.md` | The full design system write-up: brand context, visual foundations, voice, and logo family. |
| `docs/mom-boss-wellness-design-system.html` | The design system as one standalone page. Open it in a browser. |
| `docs/components/` | One usage note per component and brand card. |
| `docs/mom-boss-brand-doc.pdf`, `docs/mbw-color-palette.png` | Original brand document and palette sheet. |
| `docs/research/` | The Sustainability Gap and The Return Gap white papers (the five mom personas come from these). |
| `docs/examples/ui-kit/` | The original browser-only UI kit the playground pages were ported from. |
| `MANIFEST.md` | Every file in this repo, where it came from, and its checksum check. |

## Not included

These stay in the brand-assets repo ([ikigaicreative/MomBossWellness](https://github.com/ikigaicreative/MomBossWellness)) because of their size:

- `Brand/Video/` (5 stock video clips, 265 MB)
- `Brand/Images/Stock Images/` and `Brand/Images/Laura Images/` (67 full-size photos, 409 MB). The curated website picks from these are included in `brand/website assets/`.

Also left out: `project-context/` (AI marketing assistant instructions, not build material).

## Notes for the developer

- Light theme only. There is no dark mode.
- The components use inline styles that read CSS variables, so they work with or without Tailwind. They need `theme.css` (or `tokens.css` + `motion.css`) loaded once.
- Stock photos and video are licensed from Adobe Stock. Confirm the license covers web use before launch.
- Change a token in `src/tokens/tokens.json` first, then mirror it in `tokens.css` and `tailwind.theme.ts`.
