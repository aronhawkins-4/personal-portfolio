# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start Vite dev server with HMR
pnpm build        # Type-check (tsc -b) then production build
pnpm preview      # Preview production build locally
pnpm lint         # Biome lint
pnpm format       # Biome format (write)
pnpm check        # Biome format + lint combined (write)
```

There are no tests. There is no backend — this is a purely static client-side SPA.

## Tech Stack

- **React 19 + TypeScript** via **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite` plugin — no `tailwind.config.ts`)
- **Shadcn UI** (radix-nova style, Radix UI primitives, CVA variants)
- **Biome** for linting and formatting (replaces ESLint + Prettier)
- **Motion** (`motion/react`) for animations
- **TanStack React Query 5** (QueryClientProvider at root)
- **TanStack React Form** for the contact form

## Architecture

This is a single-page portfolio site. `src/App.tsx` composes all page sections linearly; navigation uses anchor links (`#work`, `#contact`, etc.).

```
src/
  main.tsx          # React root, QueryClientProvider
  App.tsx           # Composes all sections in order
  index.css         # Tailwind directives + CSS custom properties (palette, fonts)
  components/
    Nav.tsx
    Hero.tsx
    Services.tsx
    Work.tsx
    Process.tsx
    About.tsx
    Testimonials.tsx
    FAQ.tsx
    Contact.tsx     # TanStack React Form
    Footer.tsx
    ui/             # Shadcn components (button, etc.)
  lib/
    utils.ts        # cn() helper (clsx + tailwind-merge)
```

Path alias `@/*` maps to `./src/*`.

## Styling Conventions

Tailwind 4 uses CSS variables defined in `src/index.css` rather than a config file. The design tokens are:

- `--ink` / `--bg` / `--subtle` — primary palette
- `--red`, `--blue`, `--yellow`, `--green` — accent colors
- Dark mode and an "aged" palette variant are toggled via a `data-palette` attribute on the root

Fonts: "Instrument Serif" (serif), "Inter Variable" (sans), "JetBrains Mono Variable" (mono).

Shadcn uses oklch color tokens; components are in `src/components/ui/`.

## Linting/Formatting

Biome handles all formatting and linting (no ESLint, no Prettier). Config is in `biome.json`. Uses tab indentation. Run `pnpm check` to fix both in one pass.

VS Code CSS validation is disabled (`.vscode/settings.json`) because Biome handles it.
