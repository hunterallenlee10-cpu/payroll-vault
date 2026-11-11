import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MessageSquareText, Phone } from "lucide-react";
import CountyMap from "@/components/CountyMap";
import JsonLd from "@/components/JsonLd";
import SwitchPlanner from "@/components/SwitchPlanner/SwitchPlanner";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import { business } from "@/lib/business";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

const title = "Contact Payroll Vault Frederick | Payroll in Frederick, MD";
const ogAlt = "Payroll Vault Frederick: Payroll, handled by your neighbors. Frederick, MD";
const description =
  "Call, text or email Payroll Vault Frederick. Payroll and HR for Frederick County businesses, Monday to Friday 9 to 5. Request your payroll quote today.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  // A page-level openGraph replaces the root one, so point at the shared link-preview image explicitly.
  openGraph: { title, description, url: "/contact", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/twitter-image", alt: ogAlt }] },
};

const tiles = [
  { icon: Phone, label: "Call", value: business.phoneDisplay, href: business.tel, note: business.hours.short },
  // DRAFT: confirm this line takes texts
  { icon: MessageSquareText, label: "Text", value: business.phoneDisplay, href: business.sms, note: "Same number. Text any time" },
  { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}`, note: "Write any time" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema()]} />
      <main id="main" tabIndex={-1} className="outline-none">
        <section aria-labelledby="contact-title" className="ledger pb-14 pt-10 lg:pb-20 lg:pt-20">
          <div className="wrap">
            <h1 id="contact-title">
              <span className="eyebrow block">Contact Payroll Vault Frederick, payroll services in Frederick, MD</span>
            </h1>
            <div className="mt-5 flex items-center gap-5">
              <Image
                src="/images/01-mike-taylor-owner-headshot-BEST.webp"
                alt="Mike Taylor, owner of Payroll Vault Frederick"
                width={480}
                height={480}
                sizes="72px"
                priority
                className="size-14 shrink-0 rounded-full border border-rule object-cover sm:size-[72px]"
              />
              <p className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Talk to Payroll Vault Frederick.
              </p>
            </div>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink/85 lg:text-lg">
              Payroll, payroll taxes and HR for small businesses across Frederick County. Call, text or email, or send the quote form below.
              Mike&rsquo;s team answers {business.hours.display}.
            </p>

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {tiles.map(({ icon: Icon, label, value, href, note }) => (
                <li key={label}>
                  <a href={href} className="card group flex h-full items-start gap-4 p-6 transition-colors hover:border-vault/60">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-vault/40 text-vault">
                      <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">{label}</span>
                      <span className="mt-1 block font-display text-[1.375rem] font-semibold leading-tight text-ink group-hover:text-vault">
                        {value.includes("@") ? (
                          <>
                            {value.split("@")[0]}
                            <wbr />@{value.split("@")[1]}
                          </>
                        ) : (
                          value
                        )}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] text-muted">{note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="quote-title" className="section border-t border-rule bg-bond !pt-16">
          <div className="wrap grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="quote-title" className="text-[2rem] font-semibold leading-tight sm:text-[2.5rem]">
                Get your payroll quote.
              </h2>
              <p className="mt-2 text-[1.0625rem] text-ink/80">Five short steps. Mike calls you back during business hours.</p>
              <div className="card mt-8 p-5 sm:p-8">
                <SwitchPlanner inline preset={{ source: "contact" }} />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-5" aria-label="Hours and service area">
              <div className="card card-featured p-6">
                <h2 className="flex items-center gap-2.5 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  <Clock className="size-4 text-vault" strokeWidth={1.5} aria-hidden="true" />
                  Hours
                </h2>
                <p className="mt-3 font-display text-[1.5rem] font-semibold leading-tight">{business.hours.display}</p>
                <p className="mt-2 text-[1rem] text-ink/80">A real person answers. Closed weekends.</p>
              </div>
              <div className="card p-6">
                <h2 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Where we work</h2>
                <p className="mt-3 text-[1.0625rem] text-ink">
                  Serving {business.serviceArea}. Based in Frederick.
                </p>
                <CountyMap className="mx-auto mt-5 h-auto w-full max-w-[420px]" />
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/80">{business.towns.join(", ")}.</p>
              </div>
            </aside>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
