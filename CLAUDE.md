# Project CLAUDE.md - Secret Souls

## Project Overview

"Chief Mikey x Secret Souls" — a browser-based game built with Kaboom.js (v2000). Features multiple game scenes with character content, player controls, and visual effects (fade, zoom). Koa backend serves the game with a webpack-bundled TypeScript frontend. Dockerized for deployment.

## Tech Stack

- **Language:** TypeScript (ESM, `"type": "module"`)
- **Game engine:** Kaboom.js 2000.2.10
- **Server:** Koa with koa-router, koa-bodyparser, koa-cors, koa-static (port 3005)
- **Build:** Webpack 5 with Babel + ts-loader
- **Styling:** CSS (the-new-css-reset)
- **Container:** Docker (Alpine Linux base)
- **Linting:** mikey-pro (ESLint/Prettier/Stylelint)

## Commands

```bash
npm run build:dev         # Webpack dev build with watch
npm run build:prod        # Webpack production build
npm run start:dev         # Start dev server (ts-node-esm client/app.ts)
npm run start:prod        # Start production server
npm run fix               # ESLint auto-fix all files
```

## Conventions

- ESM only (`"type": "module"`)
- Game client in `client/src/`, Webpack outputs to `docs/public/dist/`
- Scenes as numbered files in `client/src/scenes/` (1.ts, 2.ts, win.ts)
- Game functions (controls, fade, zoom, init) in `client/src/functions/`
- Character/player data in `client/src/content/`
- No test framework configured
- Conventional commits: `feat:`, `fix:`, `chore:`, etc.
