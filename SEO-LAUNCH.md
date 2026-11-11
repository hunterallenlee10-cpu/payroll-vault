# Launch day checklist: Payroll Vault Frederick

The deployed demo stays in demo mode (`noindex, nofollow`, no sitemap, concept footer line). Do these in order on launch day.

## 1. Flip the switch

- [ ] In Vercel, Project Settings, Environment Variables (Production):
  - `NEXT_PUBLIC_SITE_MODE=live`
  - `NEXT_PUBLIC_SITE_URL=https://the-real-domain` (no trailing slash)
- [ ] Redeploy (the values are read at build time).

## 2. Confirm it took

- [ ] View source on `/` and `/contact`: `<meta name="robots" content="index, follow">`.
- [ ] `https://the-real-domain/robots.txt` lists `Sitemap: https://the-real-domain/sitemap.xml`.
- [ ] `https://the-real-domain/sitemap.xml` lists `/` and `/contact`.
- [ ] Canonicals and `og:url` use the real domain. The concept footer line is gone.
- [ ] Paste the URL into a link preview (Slack, iMessage) and check the Open Graph image.
- [ ] Run Rich Results Test on `/` and `/contact`. Expect AccountingService, FAQPage, Service and BreadcrumbList with no errors.
- [ ] Lighthouse on the production URL, mobile and desktop: SEO 100, everything else 90+.

## 3. Tell the search engines

- [ ] Google Search Console: add the domain property, verify by DNS, submit `sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console or add the site, submit `sitemap.xml`.
- [ ] Google Business Profile: set the website field to the new domain. Keep it a service-area profile with no street address.
- [ ] Ask Payroll Vault corporate to point the old franchise page (and its duplicate URL) at the new site, or at least link to it.

## 4. Brand and franchise sign-off

- [ ] Confirm with Payroll Vault corporate that the domain and site meet franchise brand standards, including logo use and the "It's Time to Rethink Payroll®" line.
- [ ] Confirm the required franchise disclosure wording in the footer.

## 5. Replace every DRAFT and sample item

Search the code for `DRAFT` and the word `Sample`. Before launch, each one must be confirmed or replaced:

- [ ] Whether 301.479.0433 takes texts (Text links, mobile bar, planner "Text now").
- [ ] Team size (four payroll processors) and a real team photo for the Meet Mike placeholder.
- [ ] Towns served (footer, `/contact` map, JSON-LD `areaServed`, `llms.txt`).
- [ ] Onboarding wording ("Switching is on us", FAQ answer) and the three switching steps.
- [ ] 401GO tax credit claim ("Up to $16,500 in available tax credits").
- [ ] Chamber of Commerce and BNI membership, and the BNI chapter name.
- [ ] Real Google reviews to replace the three sample cards. Do not add review schema for anything that is not a real, on-page review.
- [ ] LinkedIn or Facebook links, if any (add to `lib/business.ts` and `sameAs` in `lib/schema.ts`).
- [ ] Bio wording in Meet Mike, and the success message "Mike will call you back during business hours".
- [ ] Maryland rules in `lib/checkup.ts`: re-check each source URL. Frederick County local rates and the Worker Freedom Act poster date change over time.
