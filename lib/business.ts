// Every business fact used on the site lives here. Edit this file, not the components.
// Sources: Payroll Vault Frederick franchise page (payrollvault.com/payroll-vault-frederick.html),
// Payroll Vault press release (Dec 10, 2024), FranchiseWire owner profile (Apr 2026).

export const business = {
  name: "Payroll Vault Frederick",
  brand: "Payroll Vault",
  owners: "Mike and Lisa Taylor",
  owner: "Mike Taylor",
  ownerFirst: "Mike",
  // DRAFT: confirm this line takes texts
  phoneDisplay: "301.479.0433",
  phoneE164: "+13014790433",
  phoneSchema: "+1-301-479-0433",
  tel: "tel:+13014790433",
  sms: "sms:+13014790433",
  email: "Mike.Taylor@payrollvault.com",
  clientLogin: "https://www.payrollvault.com/employer-employee-portal-login.html",
  nationalSite: "https://www.payrollvault.com/",
  // DRAFT: add LinkedIn or Facebook if he has them
  social: [] as string[],
  founded: "2025-01-01",
  hours: {
    display: "Monday to Friday, 9:00 am to 5:00 pm",
    short: "Mon to Fri, 9 to 5",
    opens: "09:00",
    closes: "17:00",
  },
  serviceArea: "Frederick and all of Frederick County",
  county: "Frederick County, Maryland",
  // DRAFT: confirm towns served
  towns: [
    "Frederick",
    "Urbana",
    "Walkersville",
    "Middletown",
    "Brunswick",
    "Thurmont",
    "Mount Airy",
    "New Market",
    "Myersville",
    "Emmitsburg",
    "Ijamsville",
    "Adamstown",
  ],
  localPlaces: [
    "Downtown Frederick",
    "Market Street",
    "East Patrick Street",
    "the Golden Mile",
    "the Frederick Innovation Technology Center",
  ],
  // DRAFT: confirm both are current and the BNI chapter name
  memberships: ["Member, Frederick County Chamber of Commerce", "BNI member"],
  // DRAFT: confirm team size is current
  teamSize: 4,
  taglines: {
    brand: "Locally Owned. Client-Focused. Payroll Re-Defined.",
    rethink: "It's Time to Rethink Payroll®",
  },
  bio: {
    army: "US Army, 1989 to 1993.",
    insurance: "Thirty years in insurance and risk management before payroll.",
    family: "Mike and his wife Lisa live in Frederick, and launched Payroll Vault Frederick in January 2025.",
  },
  quotes: {
    military: "The military instilled a strong sense of discipline and mission focus.",
    rewarding: "Helping small-business owners is the most rewarding part of owning and operating my franchise.",
  },
} as const;

export type ServiceId =
  | "payroll"
  | "payroll-tax"
  | "hr"
  | "time-attendance"
  | "employee-portal"
  | "workers-comp"
  | "labor-law"
  | "screening"
  | "retirement";

export type Service = {
  id: ServiceId;
  name: string;
  short: string;
  line: string;
  size: "lg" | "md" | "sm";
};

export const services: Service[] = [
  { id: "payroll", name: "Full-Service Payroll", short: "Full-service payroll", line: "Every run, every pay stub, every deposit, on time.", size: "lg" },
  { id: "payroll-tax", name: "State and Local Payroll Tax", short: "State and local payroll tax", line: "Federal, Maryland and Frederick County, filed for you.", size: "md" },
  { id: "hr", name: "HR Support and Compliance", short: "HR support", line: "Help with the HR questions that come with having staff.", size: "md" },
  { id: "time-attendance", name: "Time and Attendance", short: "Time and attendance", line: "Hours flow into payroll without retyping a timesheet.", size: "md" },
  { id: "employee-portal", name: "Employee Self-Service Portal", short: "Employee portal", line: "Pay stubs and W-2s on their phone.", size: "sm" },
  { id: "workers-comp", name: "Workers' Compensation", short: "Workers' comp", line: "Pay-as-you-go quotes that follow your payroll.", size: "sm" },
  { id: "labor-law", name: "Maryland Labor Law Compliance", short: "Labor law compliance", line: "Including the posters on your break-room wall.", size: "sm" },
  { id: "screening", name: "Background Checks and Drug Screening", short: "Background checks", line: "Screen new hires before day one.", size: "sm" },
  { id: "retirement", name: "401(k) through 401GO", short: "401(k)", line: "A retirement plan that syncs with payroll.", size: "sm" },
];

// 401GO is Payroll Vault's retirement partner. Facts from his franchise page.
export const retirement = {
  lines: [
    "Payroll syncs automatically, so contributions are never retyped.",
    "A new plan is set up in about 15 minutes.",
    "A dedicated success manager. Real humans answer the phone.",
    "Helps you meet Maryland's retirement plan mandate.",
  ],
  // DRAFT: tax credit figure is the franchise page's claim; confirm wording with Mike before launch
  creditFigure: "Up to $16,500",
  creditLabel: "in available tax credits",
};

// DRAFT: confirm process steps
export const switchSteps = [
  { n: 1, title: "Tell us how you run payroll today.", body: "A short call or the quote form. Who you pay, how often, and what is bothering you." },
  { n: 2, title: "We move your data and set up your first run with you.", body: "Employees, rates and year-to-date totals come over. We sit beside you for the first payroll." },
  { n: 3, title: "Your team gets paid on time. You get your evenings back.", body: "Every run after that is ours to get right. You approve, we handle the rest." },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Do I have to sign a long-term contract?", a: "No. We do not use contracts. You stay because the work is right, and you can leave whenever you like." },
  // DRAFT: confirm what onboarding includes
  { q: "How hard is it to switch payroll providers?", a: "Not hard. We handle the move with you: your employees, pay rates and year-to-date totals, then we run your first payroll together." },
  { q: "Do you handle Maryland and Frederick County payroll taxes?", a: "Yes. State and local payroll tax is part of the service, including the Frederick County local income tax." },
  { q: "I have employees who live in Pennsylvania or West Virginia. Can you handle that?", a: "Yes. Cross-state staff are common here, and it is worth a quick call so we can look at your setup and get withholding right." },
  { q: "Can my employees see their pay stubs online?", a: "Yes. Through the employee self-service portal they can see pay stubs and W-2s on their phone or computer." },
  { q: "Do you work with my accountant?", a: "Yes. We work alongside CPAs and bookkeepers every day, and your accountant keeps the client relationship." },
  { q: "Can you help with workers' comp, background checks or a 401(k)?", a: "Yes. We offer workers' compensation administration with pay-as-you-go quotes, background checks and drug screening, Maryland labor law compliance including posters, and a 401(k) through our partner 401GO." },
  { q: "When can I reach you?", a: "Monday to Friday, 9:00 am to 5:00 pm, at 301.479.0433." },
];

// Sample reviews. Not real. Replace with real Google reviews before launch.
export const sampleReviews = [
  { who: "Owner, a retail shop on Market Street", text: "I used to lose a Sunday every month to payroll. Now I answer two questions on Thursday and it is done. When I call, someone who knows my shop picks up." },
  { who: "Owner, a downtown Frederick restaurant", text: "Tips, part-timers, people who live in Pennsylvania. Our old provider sent me to a help article. Mike's team just fixed it." },
  { who: "Owner, a Frederick County contractor", text: "We switched in the middle of the year and nobody missed a paycheck. They moved everything over and walked me through the first run." },
];
