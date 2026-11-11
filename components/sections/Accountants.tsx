import { Calculator } from "lucide-react";
import QuoteButton from "../QuoteButton";

export default function Accountants() {
  return (
    <section id="accountants" aria-labelledby="cpa-title" className="border-y border-rule bg-paper py-14 lg:py-16">
      <div className="wrap flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex gap-5">
          <span className="hidden size-14 shrink-0 items-center justify-center rounded-full border border-vault/40 text-vault sm:inline-flex">
            <Calculator className="size-6" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <h2 id="cpa-title" className="text-[1.75rem] font-semibold leading-tight sm:text-[2rem]">
              CPAs and bookkeepers: let us handle your clients&rsquo; payroll.
            </h2>
            <p className="mt-2 text-[1.0625rem] text-ink/80">We work alongside you, not around you. Your clients stay yours.</p>
          </div>
        </div>
        <QuoteButton
          preset={{ role: "accountant", source: "accountants" }}
          className="btn btn-primary shrink-0"
          ariaLabel="Get My Payroll Quote for a client you are referring"
        />
      </div>
    </section>
  );
}
