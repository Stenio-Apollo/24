# 24 Hour Express (Next.js)

Modern, SEO-focused marketing site built with Next.js + TypeScript + Tailwind + daisyUI + shadcn-style components + GSAP page animation.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- daisyUI
- shadcn-style UI components
- GSAP (with ScrollTrigger)

## Route structure

- `/hero`
- `/services`
- `/about`
- `/coverage`
- `/pricing`
- `/contact`

Each route is a full-screen section and wheel/touch navigation moves between routes for a continuous scroll-like experience.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## SEO included

- App Router metadata in `src/app/layout.tsx`
- JSON-LD local business schema in `src/app/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
