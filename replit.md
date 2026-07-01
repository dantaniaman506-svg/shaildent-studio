# ShailDent — The Dental Studio Website

A multi-page marketing website for ShailDent, Dr. Shailaja's aesthetic dental clinic in Rajkot, Gujarat.

## Stack

- **Framework**: React 19 + TanStack Start (SSR-capable, file-based routing)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Animations**: Framer Motion
- **Build tool**: Vite 8 via `@lovable.dev/vite-tanstack-config`
- **Package manager**: Bun

## Running the app

```bash
bun run dev
```

Runs on port 5000. The workflow "Start application" handles this automatically.

## Project structure

```
src/
  routes/          # Pages (file-based routing via TanStack Router)
    index.tsx      # Home page
    services.tsx   # Services page
    gallery.tsx    # Gallery page
    reviews.tsx    # Reviews page
    about.tsx      # About page
    contact.tsx    # Contact / booking form
  components/      # Shared UI components
    ui/            # shadcn/ui primitives
  lib/
    site.ts        # Site-wide constants (name, phone, address, hours, links)
    data.ts        # Services, reviews, gallery data
  styles.css       # Global styles + CSS variables
```

## Key files for content edits

- **Contact info, clinic name, social links**: `src/lib/site.ts`
- **Services, reviews, gallery items**: `src/lib/data.ts`
- **Page content**: `src/routes/*.tsx`
- **Images/videos**: `public/images/` and `public/videos/`

## Notes

- Originally built with [Lovable](https://lovable.dev) — avoid force-pushing or rebasing published history (see AGENTS.md).
- No external API keys or secrets required for the dev server.
