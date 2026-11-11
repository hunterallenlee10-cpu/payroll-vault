import { ArrowRight, Check } from "lucide-react";
import { retirement } from "@/lib/business";
import QuoteButton from "../QuoteButton";

export default function Retirement() {
  return (
    <section id="retirement" aria-labelledby="retirement-title" className="border-y border-rule bg-bond py-16 lg:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Retirement, built in · with our partner 401GO</p>
          <h2 id="retirement-title" className="mt-3 text-[2rem] font-semibold leading-[1.1] sm:text-[2.5rem]">
            A 401(k) that runs with your payroll.
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {retirement.lines.map((l) => (
              <li key={l} className="flex gap-2.5 text-[1rem] leading-relaxed text-ink/85">
                <Check className="mt-1 size-4 shrink-0 text-vault" strokeWidth={1.5} aria-hidden="true" />
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-rule pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {/* DRAFT: confirm claim wording with Mike */}
          <p className="font-display text-[3rem] font-semibold leading-none text-vault tabular-nums sm:text-[3.5rem]">
            {retirement.creditFigure}
          </p>
          <p className="mt-2 text-[1.0625rem] text-ink">{retirement.creditLabel}.</p>
          <div className="mt-4">
            <QuoteButton preset={{ services: ["retirement"], source: "retirement-band" }} className="text-link" ariaLabel="Add a 401(k) to my payroll quote">
              Add a 401(k) to my quote
              <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </QuoteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
