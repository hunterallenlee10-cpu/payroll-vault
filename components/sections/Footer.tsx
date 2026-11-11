import Image from "next/image";
import Link from "next/link";
import { business, services } from "@/lib/business";
import { isLive } from "@/lib/site";
import SpiresLine from "../SpiresLine";

export default function Footer() {
  return (
    <footer className="ledger relative overflow-hidden border-t border-rule bg-paper pb-28 pt-16 lg:pb-16 lg:pt-24">
      <SpiresLine className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] w-full lg:h-[140px]" opacity={0.07} />
      <div className="wrap relative grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Image
            src="/images/00-logo-2-logo-wordmark-transparent.png"
            alt="Payroll Vault"
            width={320}
            height={82}
            sizes="200px"
            loading="lazy"
            className="h-auto w-[200px]"
          />
          <p className="mt-4 font-display text-lg font-medium leading-snug text-ink">{business.taglines.brand}</p>
          <p className="mt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Payroll Vault Frederick</p>
          <a href={business.tel} className="mt-1 inline-flex min-h-11 items-center font-display text-[2rem] font-semibold text-ink hover:text-vault">
            {business.phoneDisplay}
          </a>
          <ul className="mt-1 space-y-0.5">
            <li>
              <a href={business.sms} className="text-link">
                Text {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="text-link break-all">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Where we work</h2>
          <p className="mt-3 text-ink">Serving {business.serviceArea}.</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">{business.towns.join(", ")}.</p>
          <h2 className="mt-8 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Hours</h2>
          <p className="mt-3 text-ink">{business.hours.display}</p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Services</h2>
          <ul className="mt-2">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`/#${s.id}`} className="inline-flex min-h-11 items-center text-[0.9375rem] text-ink/85 hover:text-vault">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Quick links</h2>
          <ul className="mt-2">
            {[
              { href: "/contact", label: "Contact", internal: true },
              { href: business.clientLogin, label: "Login (Employer & Employee)" },
              { href: business.referralProgram, label: "Refer a client" },
              { href: business.findLocation, label: "Find another Payroll Vault location" },
              { href: business.nationalSite, label: "Payroll Vault national site" },
              { href: "/privacy", label: "Privacy notice", internal: true },
            ].map((l) => (
              <li key={l.label}>
                {l.internal ? (
                  <Link href={l.href} className="inline-flex min-h-11 items-center text-[0.9375rem] text-ink/85 hover:text-vault">
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className="inline-flex min-h-11 items-center text-[0.9375rem] text-ink/85 hover:text-vault">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap relative mt-14 border-t border-rule pt-6 text-[0.875rem] text-muted">
        <p className="font-display text-base font-medium text-ink">{business.taglines.rethink}</p>
        {/* DRAFT: confirm franchise disclosure wording required by Payroll Vault (see business.disclosure) */}
        <p className="mt-2">
          © 2026 Payroll Vault Frederick. {business.disclosure}
        </p>
        <p className="mt-1">
          Accessibility: we aim to meet WCAG 2.1 AA. If anything on this site is hard to use, call {business.phoneDisplay} and we&rsquo;ll help.
        </p>
        {!isLive && <p className="mt-1">Concept preview by Lee Enterprises Unlimited.</p>}
      </div>
    </footer>
  );
}
