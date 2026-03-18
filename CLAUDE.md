# Nicole Yu — Portfolio

## Project Overview
Personal portfolio site for Nicole Yu, a UX designer. Deployed automatically to Vercel on every push to `main` via GitHub integration.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (utility classes only — no custom CSS files unless unavoidable)
- **Language**: TypeScript
- **Deploy**: Vercel (auto-deploy on push to `main`)
- **Package manager**: npm

## Commands
- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint check
- `git push origin main` — triggers Vercel auto-deploy

## Brand
- **Primary color**: `#e13400` (orange-red) — used for name, section labels, accents
- **Text**: `#1a1a1a`
- **Muted text**: `#666`
- **Background**: `#ffffff`
- **Font**: Helvetica Neue / Helvetica / Arial (sans-serif)
- **Logo**: `N.png` in `/public/`

## File Structure
- `src/app/` — Next.js pages and layout
- `src/components/` — reusable components (Navbar, Sidebar, etc.)
- `public/` — static assets (images, fonts)

## Code Conventions
- Components go in `src/components/` with PascalCase filenames
- Use server components by default; only add `"use client"` when needed (event handlers, hooks)
- Tailwind utility classes for all styling — avoid inline styles
- TypeScript with explicit prop types for all components
- Named exports for components

## Design Conventions
- Fixed navbar at top (padding: 24px 40px)
- Fixed left sidebar starting at top: 140px, left: 40px
- Section labels in brand orange `#e13400`, navigation items in muted `#666`
- Hover states: opacity 0.5 for name/logo, color `#1a1a1a` for nav items
- Clean, minimal aesthetic — white backgrounds, generous spacing

## IMPORTANT
- Never commit `.env.local` or any API keys
- Always run `npm run lint` before committing
- The old `index.html` and `style.css` files in root are legacy — ignore them
