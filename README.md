# Vyrix — Landing Page

A pixel-matched recreation of the Vyrix Beta 2 landing page, built with React, Tailwind CSS, and Framer Motion. Fully modular (one component per section) and responsive from mobile to desktop.

## Stack
- **React 18** + **Vite** — fast dev server & build
- **Tailwind CSS** — utility-first styling, custom design tokens in `tailwind.config.js`
- **Framer Motion** — scroll-triggered reveals, staggered hero entrance, hover micro-interactions
- **lucide-react** — icon set (menu, stars, download, socials)

## Structure
```
src/
  App.jsx                 – composes all sections
  components/
    Navbar.jsx             – sticky header, mobile menu
    Hero.jsx                – headline, CTAs, SVG illustration
    AppShowcase.jsx         – dashboard mockup preview
    WhatsNew.jsx            – Beta 2 feature cards
    Reviews.jsx             – masonry testimonial grid
    Platform.jsx            – Windows / Mac download cards
    Footer.jsx               – contact, socials, legal
  index.css                – Tailwind directives + base styles
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Notes
- All motion respects `prefers-reduced-motion`.
- Colors, type scale and spacing live in `tailwind.config.js` — tweak the `cream`, `ink`, `charcoal`, `accent` tokens to retheme quickly.
- The dashboard preview and hero illustration are hand-built with SVG/Tailwind (no external image assets), so the whole page ships with zero network dependencies besides the Inter font.
