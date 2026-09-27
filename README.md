# Shehab Abedrabuh — personal portfolio

A complete responsive English portfolio built with React, TypeScript, a Next-compatible Vinext static export, CSS and a dynamically imported Three.js scene.

## Run

Use Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

Preview: http://localhost:5173

```sh
npm run build
```

The portable production output is `dist/client/`. Serve that folder using any static web server. For example: `python -m http.server 4173 --directory dist/client`.

## What is included

- Light-default and persistent dark themes.
- A real WebGL sculpture, orbit, pointer response, pause control, and CSS fallback.
- Reduced-motion support; limited pixel density and lower frame rate on phones.
- Content, experience, skills, learning and projects grounded in the supplied CV.
- Original PDF, byte-for-byte intact; optimized natural portrait.
- Nova1st preview image and silent 19-second video excerpt, loaded on demand.
- EmuPath, DevOps services and Odoo services explicitly marked coming soon.
- Mobile navigation, accessible dialogs, keyboard focus styles, validated contact composer.
- Canonical URL, social image, Person structured data, sitemap and robots.txt for shehab.bio.

## Contact form

This is an email composer, not a hosted inbox. It validates locally, then offers a mailto link. The visitor must open their email app, review and send. The page never claims an email was sent. No form data is stored or posted to a server.

## Editing

- `app/page.tsx`: navigation and hero.
- `app/kinetic-scene.tsx`: lazily loaded Three.js sculpture.
- `app/portfolio-content.tsx`: portfolio content and contact validation.
- `app/globals.css`, `app/sections.css`, `app/premium.css`: shared foundations, section layouts and final art direction.
- `app/layout.tsx`: page and social metadata.
- `public/`: original CV and optimized assets.

## Deployment

Upload the contents of `dist/client/` to a static host. The custom domain shehab.bio is declared in SEO metadata but DNS/domain connection is a separate hosting operation. A Sites project identity is retained in `.openai/hosting.json` for the private deployment.

## Asset provenance

Portrait and original CV: provided by Shehab. Nova1st still and video: extracted from his supplied recording. Manrope: Fontsource, OFL license. Icons: Lucide (ISC) and simple brand marks. The social card was produced with the built-in Image Generation tool; see ASSET-NOTES.md.

No Lighthouse score is claimed. Production TypeScript, build output, assets, responsive layouts and core interactive flows were checked.
