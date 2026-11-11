# Payroll Vault Frederick: implementation kickstart

Concept site for Payroll Vault Frederick (Mike and Lisa Taylor), built by Lee Enterprises Unlimited as a spec demo.
Front end only. Next.js App Router + TypeScript + Tailwind CSS v4. Framer Motion only for the Checkup readout count-up
(the Vault Lock uses CSS keyframes so it starts before hydration and never delays the headline).

## The one goal

Every action leads to **Get My Payroll Quote**, which opens the Switch Planner. Call or text 301.479.0433 is the
always-visible second path. The only other nav link is a quiet "Client login".

## Design direction: Spires and Ledger

Downtown Frederick at 9 am. Ledger paper, deep ink, one vault green from the logo. A private bank that knows your name.

### Tokens

| Token | Value | Use |
|---|---|---|
| `paper` | `#F7F5EF` | page background |
| `bond` | `#FFFFFF` | cards, with 1px `rule` border |
| `rule` | `#E3DFD3` | borders, ledger lines (35% opacity) |
| `vault` | `#3A781E` (aligned to the Payroll Vault logo green #498B2A, darkened to pass AA) | primary button, padlock, key numbers, active states, Paid stamp, toggles |
| `vault-bright` | `#498B2A` | logo file and large padlock fill in the dial only |
| `ink` | `#14212B` | text, Checkup band and final CTA band |
| `muted` | `#5B6670` | secondary text |

- Fonts: Fraunces (500, 600, opsz on, SOFT 0) for display; Public Sans (400, 500, 600) for body. `tabular-nums` on every figure.
- Cards: bond white, 1px rule border, 6px radius, 2px vault top rule on featured card only. No shadows except the sticky nav (0 1px 2px).
- Ledger texture: horizontal rule every 32px, `#E3DFD3` at 35%, masked to fade at the edges.
- Spacing: 8px grid. Sections 112 to 128px desktop, 72px mobile.
- Icons: lucide-react, 1.5 stroke. No emoji, no shields, no handshakes.
- Motion: Vault Lock (hero) and Checkup (readout count-up + one demo pass). Nothing else. Respects reduced motion.

## Structure

- `app/page.tsx` landing, `app/contact/page.tsx`, `app/not-found.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`
- `components/sections/*` one file per section; `components/SwitchPlanner/*`; `components/PayrollCheckup/*`; `components/VaultDial.tsx`; `components/SpiresLine.tsx`
- `lib/business.ts` all facts; `lib/checkup.ts` questions, readout copy, sourced rules; `lib/site.ts` launch switch; `lib/schema.ts` JSON-LD
- No file over 500 lines.

## Launch switch

`NEXT_PUBLIC_SITE_MODE` = `demo` (default) or `live`; `NEXT_PUBLIC_SITE_URL` base URL.
Demo: `noindex, nofollow`, robots allows crawl and lists no sitemap, sitemap empty, concept footer line shows.
Live: `index, follow`, robots lists the sitemap, sitemap lists both pages, concept line hidden.

## Build checklist

- [x] Phase 1: scaffold, tokens, fonts, ledger texture, spires line art, nav, hero with the Vault Lock, footer
- [x] Phase 2: Why switch cards, Frederick County Payroll Checkup with every rule sourced in `lib/checkup.ts`
- [x] Phase 3: services bento, retirement band
- [x] Phase 4: Meet Mike, how switching works, accountants band, reviews, FAQ, final CTA
- [x] Phase 5: Switch Planner modal, pre-selects, prefilled SMS, mobile sticky bar, `/contact` with county map
- [x] Phase 6: launch switch, titles, descriptions, h1, JSON-LD, robots, sitemap, llms.txt, OG image, favicon, 404, `SEO-LAUNCH.md`
- [x] Phase 6b: Lighthouse mobile and desktop, live and demo, against a production build
- [x] Phase 7: final review, commit, ready for GitHub and Vercel

## Final review checklist

- [x] Hero sells the job. Vault Lock plays once. At 375px headline and primary button visible without scrolling.
- [x] Checkup readout correct for every combination; hours = runs x hours; mouse, touch and keyboard.
- [x] Every Maryland and Frederick County rule sourced in comments, "General guide" line present, no unsourced numbers.
- [x] Every "Get My Payroll Quote" opens the planner with the right pre-selects. Phone, text, email, client login links work.
- [x] Every "only this business has" item on the page.
- [x] Zero em dashes, zero "--", zero stock or AI images, zero invented facts, no street address.
- [x] DRAFT and Sample items labelled.
- [x] 2 fonts, 3 colours plus text, motion in 2 places only.
- [x] 375px: no overflow, burger, sticky bar, Checkup pill.
- [x] Footer on both pages; demo noindex; live index + sitemap, no concept line.
- [x] OG image and favicon are his. Logo used exactly as supplied.
- [x] Lighthouse SEO 100 live; others 90+; demo only fails the indexing audit.
- [x] One h1 per page; unique titles and descriptions; meaningful link and image text; JSON-LD valid and true.
