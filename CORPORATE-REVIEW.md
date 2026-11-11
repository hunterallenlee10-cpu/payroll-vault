# Payroll Vault Frederick: local site proposal for corporate review

**Preview:** https://payroll-vault-frederick.vercel.app (demo mode: `noindex, nofollow`, not in search results)
**Prepared by:** Lee Enterprises Unlimited, for Mike and Lisa Taylor, Payroll Vault Frederick

## What we are asking for

Approval of this page design and content for Payroll Vault Frederick, under the Unique Domain process in the franchise agreement.
We will use whichever domain corporate assigns or approves (following the `payrollvault-<city>-<state>-<id>.com` pattern if preferred), and
we are happy for corporate to host it on its platform instead. Nothing goes live, and no domain is bought, until corporate approves it in writing.

## How the site follows the brand

- **Logo:** the supplied Payroll Vault wordmark and dial files are used unaltered, with the ™ kept. The SVG dial in the hero is a motion version of the supplied dial icon.
- **Marks:** "It's Time to Rethink Payroll®" appears with the ®, including corporate's location pattern "It's Time to Rethink Payroll® in Frederick, Maryland".
  "Locally Owned. Client-Focused. Payroll Re-Defined." is set as text from the supplied logo lockup. Please tell us whether "Payroll Re-Defined" should carry ®.
- **Color:** the accent green is the Payroll Vault logo green (#498B2A), darkened to #3A781E only so that buttons and text meet WCAG AA contrast.
- **Fonts:** the design uses Fraunces and Public Sans. If corporate prefers the payrollvault.com families (Open Sans, Noto Sans), they are a one-line change.
- **Messages:** the copy follows corporate's: real people, no phone trees or long holds, no contracts, local ownership, compliance handled.
- **Services:** the list matches corporate's Frederick page: Full-Service Payroll, State and Local Payroll Tax, HR Support and Compliance, Time and Attendance,
  Employee Self-Service Portal, Workers' Compensation, Maryland Labor Law Compliance, Background Checks and Drug Screening, and 401(k) through 401GO.
- **Links:** "Login (Employer & Employee)" goes to corporate's portal page. The footer links to the Give to Get referral program, Find a Location,
  the national site and corporate's privacy policy. The site carries no franchise-sales content.

## Compliance and claims

- **Independent ownership:** every page footer says "Each Payroll Vault location is independently owned and operated." We will replace this with the
  exact wording from the operations manual, plus the legal entity name, if you send it. The structured data lists Payroll Vault as the `brand`, not as a parent company.
- **401GO:** the claim follows corporate's wording ("up to $16,500 in tax credits") and adds a footnote explaining that it is the maximum combined
  SECURE 2.0 startup and auto-enrollment credit for eligible employers. If corporate or 401GO has approved disclosure text, we will use that instead.
- **Reviews:** there are no real reviews yet. The preview shows clearly labelled sample cards, and the site hides that section automatically in live mode
  until real Google reviews (used with permission) replace them.
- **Maryland Payroll Checkup:** each rule is sourced to an official page (Comptroller of Maryland, Maryland Department of Labor, MarylandSaves,
  Maryland New Hire Registry, US DOL). The source URLs are in `lib/checkup.ts`, and every result carries "General guide, not legal or tax advice."
- **No unapproved claims:** no awards, rankings, client counts, prices, guarantees or turnaround promises. Corporate awards are not used. We can add them
  with approved wording if you would like.
- **Privacy:** a privacy notice page (`/privacy`) covers quote requests, text messages (STOP to opt out, numbers not shared) and analytics,
  and links to corporate's policy. The quote form shows call and text consent wording before it sends.
- **Accessibility:** the site is built to WCAG 2.1 AA and scores 100 for accessibility in Lighthouse.

## Leads

The quote form currently ends in an on-screen summary and a prefilled text message to Mike. It can also send every request to corporate's
CRM or form endpoint: set `NEXT_PUBLIC_LEAD_ENDPOINT` and each request is POSTed there as JSON. Please tell us where Payroll Vault would like
local leads to go.

## Search and the existing Frederick page

The preview is not indexed, so it does not compete with payrollvault.com/payroll-vault-frederick.html. At launch we will follow corporate's
lead on canonical URLs and redirects (for example, pointing the Frederick page to the approved domain, or the reverse), so the two never compete.

## Quality

- Lighthouse (live mode, mobile and desktop): SEO 100, Accessibility 100, Best Practices 100, Performance 99 to 100.
- Structured data validated with validator.schema.org: 0 errors, 0 warnings.
- Tested at 320, 375, 414, 768, 1024 and 1440 pixels wide.

## Open items for corporate

1. Domain and hosting: the assigned domain, and whether hosting outside corporate's platform is allowed.
2. Exact "independently owned and operated" wording and the legal entity name.
3. ® on "Payroll Re-Defined".
4. Approved 401GO tax credit wording or footnote.
5. Where leads should go (CRM or form endpoint).
6. Brand fonts: keep the current pairing, or use Open Sans and Noto Sans.
7. Whether to link to Schedule a Screening or other corporate tools.
