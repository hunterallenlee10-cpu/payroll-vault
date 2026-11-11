import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import { business } from "@/lib/business";

// DRAFT: align with Payroll Vault's corporate privacy policy (business.corporatePrivacy) and have corporate approve it.
const title = "Privacy Notice | Payroll Vault Frederick";
const description =
  "How Payroll Vault Frederick handles the details you share through this site, including quote requests, calls and text messages.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "What you share with us",
    p: [
      "When you ask for a payroll quote, you may give us your name, phone number, email, company name, number of employees, how you run payroll today and anything you add in the notes. You choose what to share. Only your name and phone number are required.",
      "The Payroll Checkup runs in your browser. Your answers are not stored unless you choose to send them with a quote request.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "We use your details only to answer your request: to call, text or email you about payroll and HR services for your business. We do not sell your information.",
    ],
  },
  {
    h: "Text messages",
    p: [
      "If you text us, or ask us to text you, we will reply about your request. Message and data rates may apply. Reply STOP at any time to stop texts. Phone numbers collected for text messaging are never shared with third parties for their marketing.",
    ],
  },
  {
    h: "Analytics",
    p: [
      "This site uses Vercel Web Analytics to count page views in aggregate. It does not use cookies for advertising and does not identify you personally.",
    ],
  },
  {
    h: "Payroll Vault",
    p: [
      `${business.name} is an independently owned and operated Payroll Vault location. The employer and employee portals are run by Payroll Vault and covered by the Payroll Vault privacy policy.`,
    ],
  },
  {
    h: "Questions",
    p: [`Call or text ${business.phoneDisplay}, or email ${business.email}. We are available ${business.hours.display}.`],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main id="main" tabIndex={-1} className="ledger outline-none">
        <div className="wrap max-w-3xl py-16 lg:py-24">
          <p className="eyebrow">Payroll Vault Frederick</p>
          <h1 className="mt-3 text-[2.5rem] font-semibold leading-[1.05] sm:text-[3.25rem]">Privacy notice</h1>
          <p className="mt-4 text-[1.0625rem] text-ink/80">Last updated November 11, 2026.</p>
          <div className="mt-10 space-y-9">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-[1.5rem] font-semibold leading-tight">{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t} className="mt-3 text-[1.0625rem] leading-relaxed text-ink/85">
                    {t}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-10 text-[1rem] text-ink/85">
            Read the{" "}
            <a href={business.corporatePrivacy} className="font-semibold text-vault underline underline-offset-4">
              Payroll Vault corporate privacy policy
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
