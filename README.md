# Payroll Vault Frederick: concept site

A front-end-only concept site for Payroll Vault Frederick (Mike and Lisa Taylor), built by Lee Enterprises Unlimited.
Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion (Checkup readout only), lucide-react.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start   # production build
npm run images         # re-run the sharp pipeline: public/images/raw -> public/images, favicons
```

## Launch switch

| Variable | Values | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_MODE` | `demo` (default) / `live` | demo: `noindex, nofollow`, empty sitemap, no sitemap in robots.txt, concept footer line. live: `index, follow`, sitemap listed. |
| `NEXT_PUBLIC_SITE_URL` | base URL | canonicals, Open Graph, sitemap, JSON-LD |

The deployed demo stays in demo mode. See `SEO-LAUNCH.md` for launch day.

## Where things live

- `lib/business.ts`: every business fact, service, FAQ and sample review.
- `lib/checkup.ts`: the Payroll Checkup questions, readout copy and the Maryland rules, with official source URLs in comments.
- `lib/schema.ts`: JSON-LD (AccountingService, WebSite, FAQPage, Service, BreadcrumbList).
- `lib/site.ts`: the launch switch.
- `components/sections/*`: one file per section. `components/SwitchPlanner/*`: the quote form. `components/PayrollCheckup/*`.
- `components/VaultDial.tsx`: the SVG vault dial (hero Vault Lock and final band). `components/SpiresLine.tsx`: the Frederick spires line art.
- `app/opengraph-image.tsx`: the 1200x630 link preview. `public/llms.txt`: plain facts for AI answer engines.

## Before launch

Search the code for `DRAFT` and `Sample`. Every item is listed in `SEO-LAUNCH.md`, section 5.

## Deploy to Vercel

Import the repository as its own project. Framework preset: Next.js. No environment variables are needed for the demo.
Vercel Web Analytics loads only on Vercel deployments.
