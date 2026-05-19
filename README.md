# crawlertoll-docs

The crawlertoll.com docs hub. Next.js 15 + MDX + Tailwind. Deployable to Vercel, Cloudflare Pages, or any Next.js host.

- **License**: Apache-2.0
- **Stack**: Next 15 (App Router) + @next/mdx + Tailwind v4 + Shiki syntax highlighting via rehype-pretty-code
- **Runtime**: Node 20+ (also runs at Vercel Edge — no Node-only APIs in the pages)

## Develop

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
# Or deploy:
# Vercel:        `vercel deploy`
# Cloudflare:    `npx wrangler pages deploy .next` (after `next build`)
```

## What's in here

```
app/
  layout.tsx                  # Root layout + metadata
  page.tsx                    # Marketing landing
  globals.css                 # Tailwind base + Shiki tweaks
  docs/
    layout.tsx                # Docs shell with sidebar
    page.mdx                  # Docs overview
    getting-started/
      express/page.mdx
      fastify/page.mdx
      hono/page.mdx
      next/page.mdx
      wordpress/page.mdx
    standards/
      rsl-1-0/page.mdx
      web-bot-auth/page.mdx
      http-402/page.mdx
      x402/page.mdx
      context-license/page.mdx
    concepts/
      decision-tree/page.mdx
      settlement-rails/page.mdx
      privacy/page.mdx
components/
  TopNav.tsx
  Footer.tsx
  Sidebar.tsx
  AdapterCard.tsx
  StandardCard.tsx
  CodeTabs.tsx
mdx-components.tsx            # Global MDX component overrides
next.config.ts                # @next/mdx + rehype-pretty-code + rehype-slug
```

## Routes

| Route | Content |
|---|---|
| `/` | Marketing landing — hero, 4 standards, 60-second snippets, adapters grid, templates grid, privacy, CTA |
| `/docs` | Overview |
| `/docs/getting-started/{express,fastify,hono,next,wordpress}` | 5 quick-start guides |
| `/docs/standards/{rsl-1-0,web-bot-auth,http-402,x402,context-license}` | 5 spec deep-dives |
| `/docs/concepts/{decision-tree,settlement-rails,privacy}` | 3 design-decision pages |

## Adding a page

Create `app/docs/<section>/<slug>/page.mdx` with frontmatter:

```mdx
export const metadata = {
  title: "Your page title",
  description: "Short description for OG + nav.",
};

# Your page

Content...
```

Add the route to the `NAV` array in `components/Sidebar.tsx` to surface it in the left sidebar.

## License

Apache-2.0. Content is also Apache-2.0 unless otherwise noted.
