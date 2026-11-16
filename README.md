# Shehab Abedrabuh — personal portfolio

A complete responsive English portfolio built with React, TypeScript, a Next-compatible Vinext static export, CSS and a lightweight profile workbench.

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

- Dark-default cyan/navy identity on every page load, with a light-mode toggle for the current visit.
- A portrait-led profile workbench and an illustrated EmuPath platform overview.
- Reduced-motion support and responsive mobile, tablet and desktop layouts.
- Content, experience, skills, learning and projects grounded in the supplied CV.
- Downloadable PDF updated to match the supplied resume; optimized natural portrait.
- EmuPath tools, software downloads, AI utilities and learning resources.
- Infrastructure learning clearly distinguished from current IT support services.
- Mobile navigation, accessible dialogs, keyboard focus styles, validated contact composer.
- Canonical URL, social image, Person structured data, sitemap and robots.txt for shehab.bio.

## Contact form

This is an email composer, not a hosted inbox. It validates locally, then offers a mailto link. The visitor must open their email app, review and send. The page never claims an email was sent. No form data is stored or posted to a server.

## Editing

- `app/page.tsx`: navigation and hero.
- `app/workbench.tsx`: lightweight profile and approach panels.
- `app/portfolio-content.tsx`: portfolio content and contact validation.
- `app/redesign.css`: current visual system and responsive overrides. Base styles remain in `app/globals.css`, `app/sections.css` and `app/premium.css`.
- `app/layout.tsx`: page and social metadata.
- `public/`: updated CV and optimized assets.

## Deployment

Upload the contents of `dist/client/` to a static host. The custom domain shehab.bio is declared in SEO metadata but DNS/domain connection is a separate hosting operation. A Sites project identity is retained in `.openai/hosting.json` for the private deployment.

## Asset provenance

Portrait and resume content: provided by Shehab. Manrope: Fontsource, OFL license. Icons: Lucide (ISC) and simple brand marks. The current social card is a locally rendered typographic composition; see ASSET-NOTES.md.

No Lighthouse score is claimed. Production TypeScript, build output, assets, responsive layouts and core interactive flows were checked.
