import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import QuoteButton from "../QuoteButton";
import SpiresLine from "../SpiresLine";
import VaultDial from "../VaultDial";

export default function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="on-ink relative overflow-hidden bg-ink pb-36 pt-20 text-paper lg:pb-48 lg:pt-28">
      <div className="wrap relative z-10 flex flex-col items-center text-center">
        <VaultDial idPrefix="vd-cta" className="size-20 lg:size-24" />
        <p className="eyebrow mt-8 !text-paper-muted">{business.taglines.rethinkLocal}</p>
        <h2 id="final-title" className="mt-4 max-w-3xl text-[2.25rem] font-semibold leading-[1.08] text-paper sm:text-[3.5rem]">
          Payroll you never have to think about again.
        </h2>
        <p className="mt-4 max-w-xl text-[1.0625rem] text-paper-muted">
          {business.hours.display}. A real person answers.
        </p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <QuoteButton preset={{ source: "final-cta" }} className="btn btn-primary px-7" />
          <a href={business.tel} className="btn btn-ghost-ink px-6">
            <Phone className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
      <SpiresLine className="pointer-events-none absolute inset-x-0 bottom-0 h-[96px] w-full lg:h-[150px]" stroke="#F7F5EF" opacity={0.15} />
    </section>
  );
}
