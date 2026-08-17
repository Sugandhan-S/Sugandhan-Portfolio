# ⚡ Sugandhan S — Full-Stack Engineer Portfolio

> A production-grade personal portfolio built to read like the work of a senior engineer, not a generic template.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-ssugandhan--portfolio.vercel.app-blue?style=for-the-badge)](https://ssugandhan-portfolio.vercel.app/)

![React](https://img.shields.io/badge/React-18.x-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![MUI](https://img.shields.io/badge/MUI-v5-007FFF)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black)

👉 **Try the Live App:** [https://ssugandhan-portfolio.vercel.app/](https://ssugandhan-portfolio.vercel.app/)

---

## 🌟 Overview

This is the repository for my personal portfolio. It is designed with a deep slate-navy palette, a restrained teal accent, a mono/utility typeface for data, subtle scroll-reveal motion, and a complete light/dark theme toggle.

It aims to showcase my 3.5+ years of experience building performant web applications and fintech platforms, highlighting projects, skills, and professional history in a clean, accessible, and highly performant Single Page Application (SPA).

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎨 **Premium Aesthetics** | Custom slate-navy palette with teal accents, fluid typography, and bespoke layouts. |
| 🌗 **Light / Dark Mode** | Persistent color mode toggling handled cleanly via Context API. |
| 🚀 **High Performance** | Built with Vite for rapid development and highly optimized production builds. |
| 🛡️ **Strictly Typed Data** | All résumé content lives in strongly typed data files, ensuring zero `any` types. |
| 🎬 **Subtle Motion** | Scroll-reveal animations powered by Framer Motion, with respect for `prefers-reduced-motion`. |
| ♿ **Accessible** | Built with semantic landmarks, keyboard skip links, and visible focus states. |

---

## 🏗️ Architecture & Project Structure

The codebase is organized cleanly. All components are purely presentational. Every piece of résumé content lives in `src/data`, strictly typed by `src/types`.

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
│   ├── profile.ts           # skills.ts, experience.ts, projects.ts, etc.
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── common/              # Reveal, SectionHeading, MetricText, SkipLink
│   └── sections/            # Hero, Projects, Experience, Skills, Education, Contact
└── pages/                   # Home (composes sections), NotFound
```



## 🧠 Architecture & Design Decisions

* **No Redux:** A portfolio has no shared server state or complex client state, so a global store would be over-engineering. The only real state is the color mode, handled cleanly with a small, persisted Context (`ColorModeContext`).
* **Light Routing:** The site is effectively a Single Page Application (SPA), so React Router carries a single content route plus a catch-all 404. In-page navigation smooth-scrolls to section IDs. The structure is built to easily scale for `/work/:id` case-study routes later.
* **Centralized Theme:** `theme.ts` is the single source of truth for the palette, typography (Space Grotesk / Inter / JetBrains Mono), and component overrides.
* **Accessibility & Motion:** Built with semantic landmarks, a keyboard skip link, visible focus states, and native respect for `prefers-reduced-motion` (reveal animations disable, scrolling goes instant).

---

## 💻 Tech Stack

- **Frontend Core:** React 18, TypeScript (strict), Vite
- **Styling & UI:** Material-UI (MUI v5), Custom Theme, CSS Variables
- **Routing & State:** React Router v6, React Context API
- **Animation:** Framer Motion
- **Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (data/eyebrows)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
