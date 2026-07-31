# Andrew A. Borkowski, M.D. — Portfolio

Single-page professional portfolio, built with React 19, Vite, and Tailwind CSS v4.
The visual style is glassmorphism: frosted translucent panels layered over an
animated mesh-gradient canvas, with light and dark themes.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Typecheck (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

No environment variables or API keys are required.

## Structure

```
index.html                   shell: fonts, no-flash theme script, #root
src/
  App.tsx                    page composition
  index.css                  design tokens, glass primitives, keyframes
  hooks/useTheme.ts          light/dark state, persisted to localStorage
  components/
    AmbientBackground.tsx    gradient mesh, drifting orbs, grain, dot grid
    Header.tsx               sticky glass nav + theme toggle
    Hero.tsx                 headings and biography
    Portrait.tsx             headshot in a glass lens with orbit rings
    Pillars.tsx              "Core Strategic Focus" cards
    CuratedLinks.tsx         "Curated Professional Links" cards
    Footer.tsx               footer and back-to-top
    SectionLabel.tsx         shared section heading
assets/NAII_Headshot.webp    portrait, 600×600
```

## Editing content

Text lives in the component that renders it. The two card sections are
data-driven — edit the `PILLARS` array in `Pillars.tsx` or the `LINKS` array in
`CuratedLinks.tsx` to add, remove, or reorder cards. Icons come from
[lucide-react](https://lucide.dev).

## Theming

Every colour, blur, border, and shadow is a CSS custom property defined twice in
`src/index.css`: once under `:root` (dark) and once under `html.light`. Adjusting
a token updates every glass surface at once. The frosted look comes from three
things used together — a translucent background, `backdrop-filter: blur()`, and
an `inset 0 1px 0` rim highlight — bundled into the `.glass`, `.glass-card`,
`.glass-chip`, and `.glass-button` classes.

Glass needs something vivid behind it, so `AmbientBackground.tsx` is doing real
work here; flattening it to a solid colour will make the panels look grey.

## Replacing the headshot

Export a square image at 600×600 and save it as `assets/NAII_Headshot.webp`
(quality ~85 keeps it near 30 KB). Any square source works — the portrait is
cropped to a circle with `object-fit: cover`. If you use a different filename or
format, update the import at the top of `src/components/Portrait.tsx`.

## Accessibility and motion

Card and button hover states are paired with visible `:focus-visible` outlines,
and all ambient animation is disabled under `prefers-reduced-motion: reduce`.
