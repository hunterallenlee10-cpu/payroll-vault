// The Frederick County Payroll Checkup: questions, readout copy and the rules behind them.
// Every figure below was checked on an official source on 2026-11-11. Source URLs sit beside each rule.
// If a rule cannot be confirmed, set `confirmed: false` and the readout shows FALLBACK instead of a figure.
// General guide only, not legal or tax advice.

export type Answer = "yes" | "no" | "unsure";

export type CheckupItem = {
  id: string;
  question: string;
  hint?: string;
  /** Short label used in the Switch Planner and the mobile pill. */
  label: string;
  /** Muted line under "Looks covered" when answered Yes. */
  covered: string;
  /** One plain sentence (or two) under "Worth a closer look" when answered No or Not sure. */
  closerLook: string;
  confirmed: boolean;
};

export const FALLBACK = "Worth a quick call. Rules here depend on your situation.";

export const DISCLAIMER = "General guide, not legal or tax advice. Rules change; we'll confirm what applies to you.";

export const checkupItems: CheckupItem[] = [
  {
    // RECIPROCITY. Comptroller of Maryland, 2026 Form MW507 (Employee's Maryland Withholding Exemption Certificate):
    //   https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/forms/2026/mw507.pdf
    //   Reciprocity with DC, Virginia, West Virginia and Pennsylvania. DC, VA and WV residents claim exemption on line 4
    //   (no Maryland place of abode for 183 days or more). PA residents (line 5) are exempt from the state portion only and
    //   are still withheld at the local rate of the Maryland county where they work, unless they live in York or Adams
    //   County (line 6) or a PA locality that does not tax Maryland residents (line 7).
    // 2026 Employer Withholding Guide:
    //   https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/instructions/withholding/2026/withholding-guide.pdf
    id: "cross-state",
    question: "Is withholding set up correctly for employees who live in Pennsylvania, West Virginia, Virginia or DC?",
    hint: "Frederick sits near three state lines. If nobody lives out of state, answer Yes.",
    label: "Cross-state withholding",
    covered: "Cross-state staff withheld correctly.",
    closerLook:
      "Maryland has reciprocal agreements with PA, VA, WV and DC, so withholding for cross-state staff depends on where they live. Most Pennsylvania residents still owe Frederick County's local tax.",
    confirmed: true,
  },
  {
    // FREDERICK COUNTY LOCAL INCOME TAX, tax year 2026 (unchanged from 2025).
    //   Single / MFS: 2.25% $1 to $25,000; 2.75% $25,001 to $50,000; 2.96% $50,001 to $150,000; 3.20% over $150,000.
    //   MFJ / HOH: 2.25% $1 to $25,000; 2.75% $25,001 to $100,000; 2.96% $100,001 to $250,000; 3.20% over $250,000.
    // Comptroller Tax Alert on 2025 legislative changes (rev. Dec 22, 2025; only Allegany and Kent change for 2026):
    //   https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/alerts/tax-alert-changes-to-standard-and-itemized-deductions-and-to-state-and-local-income-tax-rates-from-the-2025-legislative-session.pdf
    // Comptroller Central Payroll Bureau, 2026 Maryland state and local withholding information (Feb 4, 2026):
    //   https://www.marylandcomptroller.gov/content/dam/mdcomp/md/state-payroll/memos/2026/2026-maryland-state-and-local-withholding-information.pdf
    // Historical local rates: https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/publications/local-rates.pdf
    id: "local-tax",
    question: "Are you withholding the Frederick County local income tax at the current rate?",
    label: "Frederick County local tax",
    covered: "Frederick County local tax withheld at the current rate.",
    closerLook:
      "For 2026, Frederick County's local income tax runs 2.25%, 2.75%, 2.96% or 3.20%, depending on the employee's taxable income. A rate set years ago may now be wrong.",
    confirmed: true,
  },
  {
    // HEALTHY WORKING FAMILIES ACT (Maryland Earned Sick and Safe Leave). Maryland Department of Labor:
    //   https://labor.maryland.gov/paidleave/
    //   https://labor.maryland.gov/paidleave/paidleavefaqs.shtml
    //   Statute: https://mgaleg.maryland.gov/2026RS/Statute_Web/gle/3-1304.pdf
    //   15 or more employees: paid leave. 14 or fewer: unpaid. At least 1 hour for every 30 hours worked.
    //   Employers need not allow more than 40 hours earned or 64 hours used in a year, or more than 64 hours accrued.
    id: "sick-leave",
    question: "Do you track paid sick and safe leave under Maryland's Healthy Working Families Act?",
    label: "Sick and safe leave",
    covered: "Sick and safe leave tracked.",
    closerLook:
      "Maryland employers with 15 or more employees must offer paid sick and safe leave, and smaller employers unpaid leave. Staff earn 1 hour for every 30 hours worked, up to 40 hours a year.",
    confirmed: true,
  },
  {
    // MARYLANDSAVES. MarylandSaves employer page: https://www.marylandsaves.org/employers
    //   Fee waiver: https://www.marylandsaves.org/claim-fee-waiver
    //   Statute: https://mgaleg.maryland.gov/2026RS/Statute_Web/gle/12-101.pdf and .../gle/12-402.pdf
    //   Maryland Department of Labor bulletin (Dec 15, 2025): https://content.govdelivery.com/accounts/MDDLLR/bulletins/3fffa7d
    //   Covers employers that pay staff through a payroll system or service, have been in business at least two years and
    //   offer no qualified retirement plan. No minimum employee count. The consequence of not complying is losing the
    //   waiver of the state (SDAT) annual report fee, $300 for most businesses. Employers with their own plan certify yearly.
    id: "retirement",
    question: "Do you offer a retirement plan, or know whether Maryland's MarylandSaves program applies to you?",
    label: "Retirement plan or MarylandSaves",
    covered: "Retirement plan or MarylandSaves handled.",
    closerLook:
      "Maryland employers that run payroll, have been in business at least two years and offer no retirement plan must register with MarylandSaves. Doing it keeps the state annual report fee waived, $300 for most businesses.",
    confirmed: true,
  },
  {
    // NEW HIRE REPORTING. Maryland New Hire Registry reporting form (Rev 03/18): https://www.mdnewhire.com/downloads/MD_FORM.pdf
    //   "Reports must be submitted within 20 days of the date of hire or rehire."
    //   Maryland DHS new hire FAQs: https://dhs.maryland.gov/child-support-services/report-new-hires/new-hires-faqs/
    id: "new-hire",
    question: "Do you report every new hire to Maryland within the required deadline?",
    label: "New-hire reporting",
    covered: "New hires reported on time.",
    closerLook: "Maryland requires every new hire and rehire to be reported to the Maryland New Hire Registry within 20 days of the hire date.",
    confirmed: true,
  },
  {
    // LABOR LAW POSTERS. Maryland Department of Labor, Employment Related Posters and Notices:
    //   https://labor.maryland.gov/oeope/poster.shtml
    //   Maryland Worker Freedom Act notice, posting required from Nov 1, 2026:
    //   https://www.labor.maryland.gov/labor/wages/mdworkerfreedomact.shtml
    //   Federal posters (US DOL): https://www.dol.gov/general/topics/posters
    id: "posters",
    question: "Are your posted Maryland and federal labor law notices current?",
    label: "Labor law posters",
    covered: "Labor law notices current.",
    closerLook: "Maryland and federal law each require workplace notices. A new Maryland Worker Freedom Act notice has had to be posted since November 1, 2026.",
    confirmed: true,
  },
];

export const answerOptions: { value: Answer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

export const payrollFrequencies = [
  { value: "weekly", label: "Weekly", runs: 52 },
  { value: "biweekly", label: "Every two weeks", runs: 26 },
  { value: "semimonthly", label: "Twice a month", runs: 24 },
  { value: "monthly", label: "Monthly", runs: 12 },
] as const;

export type FrequencyValue = (typeof payrollFrequencies)[number]["value"];

export const HOURS_MIN = 0.5;
export const HOURS_MAX = 8;
export const HOURS_STEP = 0.5;

/** Hours a year back: payroll runs a year times hours spent on each run. */
export const hoursBack = (frequency: FrequencyValue, hoursEach: number) => {
  const runs = payrollFrequencies.find((f) => f.value === frequency)?.runs ?? 0;
  return Math.round(runs * hoursEach);
};

export const formatHours = (h: number) => {
  const n = Number.isInteger(h) ? String(h) : h.toFixed(1);
  return `${n} ${h === 1 ? "hour" : "hours"}`;
};

export type ReadoutLine = { id: string; text: string; label: string };

export function buildReadout(answers: Record<string, Answer | undefined>) {
  const closer: ReadoutLine[] = [];
  const covered: ReadoutLine[] = [];
  for (const item of checkupItems) {
    const a = answers[item.id];
    if (!a) continue;
    if (a === "yes") covered.push({ id: item.id, text: item.covered, label: item.label });
    else closer.push({ id: item.id, text: item.confirmed ? item.closerLook : FALLBACK, label: item.label });
  }
  return { closer, covered, answered: closer.length + covered.length };
}
