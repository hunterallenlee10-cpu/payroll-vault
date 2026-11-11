import Image from "next/image";
import { Phone, Users } from "lucide-react";
import { business } from "@/lib/business";
import QuoteButton from "../QuoteButton";

// DRAFT: confirm bio wording with Mike
export default function MeetMike() {
  return (
    <section id="meet-mike" aria-labelledby="mike-title" className="ledger section">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10">
        <figure className="lg:col-span-5 lg:row-start-1">
          <Image
            src="/images/01-mike-taylor-owner-headshot-BEST.webp"
            alt="Mike Taylor, owner of Payroll Vault Frederick, in a navy blazer and glasses"
            width={480}
            height={480}
            sizes="(min-width: 1024px) 360px, (min-width: 400px) 360px, 100vw"
            loading="lazy"
            className="aspect-square w-full max-w-[360px] rounded-[6px] border border-rule object-cover"
          />
          <figcaption className="mt-3 text-[0.9375rem] text-muted">Mike Taylor, owner</figcaption>
        </figure>

        <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <h2 id="mike-title" className="eyebrow">
            <span className="sr-only">Meet Mike Taylor. </span>Your payroll team is in Frederick
          </h2>
          <blockquote className="mt-4">
            <p className="font-display text-[2rem] font-medium leading-[1.15] text-ink sm:text-[2.625rem]">
              <span aria-hidden="true">&ldquo;</span>
              {business.quotes.military}
              <span aria-hidden="true">&rdquo;</span>
            </p>
            <footer className="mt-3 text-[0.9375rem] text-muted">Mike Taylor, Army veteran</footer>
          </blockquote>

          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {[business.bio.army, business.bio.insurance, business.bio.family].map((l) => (
              <li key={l} className="py-3.5 text-[1.0625rem] text-ink/90">
                {l}
              </li>
            ))}
          </ul>

          <blockquote className="mt-8 border-l-2 border-vault pl-5">
            <p className="font-display text-[1.25rem] font-medium leading-snug text-ink">
              <span aria-hidden="true">&ldquo;</span>
              {business.quotes.rewarding}
              <span aria-hidden="true">&rdquo;</span>
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton preset={{ source: "meet-mike" }} />
            <a href={business.tel} className="btn btn-ghost">
              <Phone className="size-[18px] text-vault" strokeWidth={1.5} aria-hidden="true" />
              Call Mike: {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:max-w-[360px]">
          <ul className="flex flex-wrap gap-2" aria-label="Memberships">
            {business.memberships.map((m) => (
              <li key={m} className="rounded-[6px] border border-ink/25 bg-bond px-3.5 py-2 text-[0.8125rem] font-semibold text-ink">
                {m}
              </li>
            ))}
          </ul>

          {/* No team photo yet: a labelled placeholder in the design system. DRAFT: replace with a real team photo */}
          <div className="mt-8 flex items-center gap-4 rounded-[6px] border border-dashed border-ink/25 bg-bond/60 p-5">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-[4px] bg-paper text-muted">
              <Users className="size-7" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Photo: the Payroll Vault Frederick team</p>
              <p className="mt-1 text-[1.0625rem] font-medium text-ink">Mike and four payroll processors.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
