# Sugandhan S — Portfolio

A production-grade personal portfolio built to read like the work of a senior full-stack engineer, not a template. Deep slate-navy palette, a restrained teal accent, a mono/utility face for data, subtle scroll-reveal motion, and a light/dark theme.

**Stack:** React 18 · TypeScript (strict) · MUI v5 · React Router v6 · Framer Motion · Vite

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) then production build to /dist
npm run preview    # serve the production build locally
npm run typecheck  # type-check only, no emit
```

Node 18+ is recommended.

---

## Project structure

```
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

Components are presentational; every piece of résumé content lives in `src/data`, typed by `src/types`. To update the portfolio, edit the data files — not the components.

---

## A few deliberate decisions

- **No Redux.** A portfolio has no shared server state or complex client state, so a global store would be over-engineering. The only real state is the color mode, handled with a small, persisted Context (`ColorModeContext`).
- **Light routing.** The site is effectively one page, so React Router carries a single content route plus a catch-all 404; in-page navigation smooth-scrolls to section ids. The structure is ready for `/work/:id` case-study routes later.
- **Centralized theme.** `theme.ts` is the single source of truth for palette, typography (Space Grotesk / Inter / JetBrains Mono), and component overrides. Change the look there, globally.
- **Accessibility & motion.** Semantic landmarks, a keyboard skip link, visible focus, and `prefers-reduced-motion` respected (reveal animations disable, scrolling goes instant).

---

## Customizing

- **Content:** edit the files in `src/data/`.
- **Résumé download:** replace `public/Sugandhan_Resume.pdf` (already included) and/or update `profile.links.resumeUrl`.
- **Colors & type:** adjust the token objects at the top of `src/theme/theme.ts`.
- **Add project links:** give any item in `src/data/projects.ts` an `href` and a "View project" button appears automatically.

---

## Deploying

Works on any static host (Vercel, Netlify, GitHub Pages).

For a **GitHub Pages project site** served from a subpath (`/RepoName/`), set the base so assets and routes resolve:

```ts
// vite.config.ts
export default defineConfig({ plugins: [react()], base: '/RepoName/' });
```

The router already reads `import.meta.env.BASE_URL`, so it follows the same base automatically. For SPA fallback on GitHub Pages, copy `index.html` to `404.html` in the build output (or use a small deploy action).
