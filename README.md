# The Method Library — v2

A personal reference site for Pilates and Lagree teaching.
**Language:** English, with technical terms in French.
**Aesthetic:** Soft editorial — rose poudré & cream, serif elegance.

## How to use it

1. Unzip the folder anywhere on your computer.
2. Double-click `index.html` — it opens in your browser. That's it.
3. Online deployment: drop the folder on Cloudflare Pages, Netlify, or GitHub Pages.

## What's new in v2

- **New pastel aesthetic:** rose/cream palette, elegant Fraunces serif + Outfit sans, soft shadows, gradients, refined micro-interactions
- **Advanced filter system** on the Exercises page — multi-select chips for Method, Level, Body Focus + real-time text search, with live result count and "clear all" button
- **Animated hover effects** on cards, search bar with search glyph, dark mode with deep rose tones
- **Card-based browsing** — no more ugly dropdowns

## Adding content

Everything lives in `js/data.js`. Open it in any text editor, copy an existing exercise block, modify the values, save, refresh the browser.

Required fields:
```js
{
  id: "unique-slug",
  method: "pilates-mat" | "pilates-reformer" | "lagree",
  nameEn: "Exercise Name",
  nameFr: "Nom français",
  level: "fundamental" | "intermediate" | "advanced",
  duration: "1-2 min",
  reps: "10 reps",
  focus: ["core", "spine"],  // any tags — the filter builds dynamically
  objective: "...",
  starting: "...",
  breathing: "...",
  execution: ["step 1", "step 2"],
  muscles: { prime, synergists, stabilizers, antagonists },
  cues: [{ en: "...", fr: "..." }],
  errors: [{ title: "...", detail: "..." }],
  variations: [{ type: "...", detail: "..." }],
  contraindications: ["..."],
  note: "optional"
}
```

The focus tags auto-populate the filter chips — you can add any new tag (e.g. `"breathing"`, `"balance"`, `"coordination"`) and it will appear in the filter.

## Currently loaded

- **7 exercises:** The Hundred, Roll-Up, Single Leg Circles, Rolling Like a Ball, Single Leg Stretch, Footwork (Reformer), The Bear (Lagree)
- **1 program:** Foundation — 8 Weeks

## Next steps

1. Validate design + filter system
2. Expand exercise database (target: ~170 total)
3. Build out the 60 programs
4. Bilingual glossary
5. Minimal theory pages
6. Illustration prompts + generation
