# Implementation Notes: Eleventy to Astro Migration

## Project Overview
Migrating the FlowFuse website from Eleventy (11ty) to Astro 6, using git worktree for parallel development.

## Tech Stack

### Current (Eleventy)
- Framework: Eleventy v2.0.1
- Templating: Nunjucks (.njk)
- Styling: Tailwind CSS v3.4.19
- Build: PostCSS, Terser
- Deployment: Netlify
- Runtime: Node.js

### Target (Astro)
- Framework: Astro 5.16.11
- Components: Astro components (.astro)
- Styling: UnoCSS with Wind3 preset (Tailwind-compatible)
- Build: Vite (built-in)
- Deployment: Netlify (preserved)
- Runtime: Bun

## Requirements
- Preserve all existing URLs (SEO)
- Match current visual design exactly
- Keep Netlify integration (functions, forms, redirects)
- Full content parity

## Architecture Decisions

### Git Worktree Strategy
- Main branch: Keep existing Eleventy site running
- `astro-migration` branch: New Astro implementation
- Worktree location: `/home/sprite/flowfuse-astro/`
- Allows side-by-side comparison during development

### Content Migration Strategy
1. **Static pages** (.njk → .astro): Direct conversion
2. **Blog posts** (.md): Keep as Markdown, use Astro content collections
3. **Docs**: Migrate to content collections
4. **Data files** (_data/*.json): Convert to TypeScript modules in `src/data/`

### Component Architecture
- Base layouts: `src/layouts/`
- Reusable components: `src/components/`
- Page-specific: `src/pages/`
- Content: `src/content/` (collections)

### Styling Migration
- UnoCSS with Wind3 preset for Tailwind class compatibility
- Most Tailwind classes work unchanged
- Custom config in `uno.config.ts`
- Typography preset for prose content
- Icons preset for Iconify icons

## Content Structure Mapping

| Eleventy (Current)           | Astro (New)                    |
|------------------------------|--------------------------------|
| `src/index.njk`              | `src/pages/index.astro`        |
| `src/blog/*.md`              | `src/content/blog/*.md`        |
| `src/docs/*.md`              | `src/content/docs/*.md`        |
| `src/_includes/layouts/`     | `src/layouts/`                 |
| `src/_includes/components/`  | `src/components/`              |
| `src/_data/*.json`           | `src/data/*.ts`                |
| `src/images/`                | `public/images/`               |

## Progress
- [x] Create IMPLEMENTATION_NOTES.md with migration plan
- [x] Set up git worktree for astro-migration branch
- [x] Initialize Astro 6 project with UnoCSS
- [x] Set up project structure matching existing site
- [x] Create base layouts and components (Header, Footer, BaseLayout)
- [x] Configure Netlify deployment (netlify.toml updated)
- [x] Set up content collections config
- [x] Create initial homepage
- [ ] Migrate remaining content pages (about, pricing, etc.)
- [ ] Migrate blog system with full content
- [ ] Migrate docs system
- [ ] Set up Playwright testing
- [ ] Copy all static assets (images, favicons)
- [ ] Visual parity testing

## Discoveries

### UnoCSS Notes
- Using `presetWind3()` for Tailwind CSS v3 class compatibility
- Icons work with `i-{collection}-{icon}` syntax
- Typography preset provides prose styling

### Astro Notes
- Content collections require `src/content.config.ts`
- Glob loader pattern for markdown files
- Build output is `dist/` directory

## File Structure (Astro)
```
/home/sprite/flowfuse-astro/
├── astro.config.mjs      # Astro configuration
├── uno.config.ts         # UnoCSS configuration
├── netlify.toml          # Netlify deployment config
├── package.json
├── tsconfig.json
├── public/
│   └── images/logos/     # Static assets
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── blog/
│   │   ├── changelog/
│   │   └── docs/
│   ├── content.config.ts
│   ├── data/
│   │   └── site.ts       # Site configuration
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
└── _eleventy_src/        # Original source (reference only)
```

## Context for Future Claude
- This is a parallel rebuild using git worktree
- Main site stays functional while we build Astro version
- URL preservation is critical for SEO
- Visual parity required - match existing design exactly
- Netlify deployment must work identically
- Old Eleventy source is in `_eleventy_src/` for reference
- Run `bun run dev` to start dev server
- Run `bun run build` to build for production
