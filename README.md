# BSP Group — Landing Page

Static marketing site for [bspgroup.nl](https://bspgroup.nl).

## Stack

- Vite + React 18
- framer-motion (hero animation)
- Plain CSS + inline styles (no Tailwind, no shadcn — site is single-page)
- Hosted on Vercel

## Develop

```bash
npm install
npm run dev      # http://localhost:5174
```

## Deploy

```bash
npm run build    # outputs ./dist
```

Vercel auto-deploys on push to `main`. Domain `bspgroup.nl` points to the Vercel project.

## Structure

- `src/pages/Landing.jsx` — composes the page sections
- `src/components/bsp/` — section components (Navbar, Hero, About, Capabilities, ImageBreak, Categories, Geography, Contact, Footer)
- `index.html` — page meta + OG tags

## Edit copy

All copy lives inside the section components. Hero headline is in `src/components/bsp/Hero.jsx`. Categories list is in `src/components/bsp/Categories.jsx`. Email is in `src/components/bsp/Contact.jsx`.
