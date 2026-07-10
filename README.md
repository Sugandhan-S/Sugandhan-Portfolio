# Sugandhan S — Portfolio

A production-grade personal portfolio built to read like the work of a senior full-stack engineer, not a template. Deep slate-navy palette, a restrained teal accent, a mono/utility face for data, subtle scroll-reveal motion, and a light/dark theme.

**Stack:** React 18 · TypeScript (strict) · MUI v5 · React Router v6 · Framer Motion · Vite

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & Type-Check:

```bash
npm run build      # type-check (tsc -b) then production build to /dist
npm run typecheck  # type-check only, no emit

```

*Note: Node 18+ is recommended.*

---

## 🏗️ Project Structure

All components are purely presentational. Every piece of résumé content lives in `src/data`, strictly typed by `src/types`.

```text
src/
├── main.tsx                 # Entry: Router + theme provider + StrictMode
├── App.tsx                  # Layout shell: navbar, routes, footer
├── theme/
│   ├── theme.ts             # createAppTheme(mode): tokens, type, overrides
│   └── ColorModeContext.tsx # Light/dark via Context API (persisted)
├── types/
│   └── index.ts             # All content interfaces — no `any` anywhere
├── data/                    # Résumé content as typed data
│   ├── profile.ts  skills.ts  experience.ts
│   ├── projects.ts education.ts navigation.ts
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── common/              # Reveal, SectionHeading, MetricText, SkipLink
│   └── sections/            # Hero, Projects, Experience, Skills, Education, Contact
└── pages/                   # Home (composes sections), NotFound

```

---

## 🧠 Architecture & Design Decisions

* **No Redux:** A portfolio has no shared server state or complex client state, so a global store would be over-engineering. The only real state is the color mode, handled cleanly with a small, persisted Context (`ColorModeContext`).
* **Light Routing:** The site is effectively a Single Page Application (SPA), so React Router carries a single content route plus a catch-all 404. In-page navigation smooth-scrolls to section IDs. The structure is built to easily scale for `/work/:id` case-study routes later.
* **Centralized Theme:** `theme.ts` is the single source of truth for the palette, typography (Space Grotesk / Inter / JetBrains Mono), and component overrides.
* **Accessibility & Motion:** Built with semantic landmarks, a keyboard skip link, visible focus states, and native respect for `prefers-reduced-motion` (reveal animations disable, scrolling goes instant).
