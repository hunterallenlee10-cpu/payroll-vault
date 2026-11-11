"use client";

import { Check, CircleAlert } from "lucide-react";
import { DISCLAIMER, formatHours, type ReadoutLine } from "@/lib/checkup";
import AnimatedNumber from "./AnimatedNumber";

export default function Readout({
  closer,
  covered,
  answered,
  hours,
  hoursEach,
  frequencyLabel,
  onQuote,
  headingId,
}: {
  closer: ReadoutLine[];
  covered: ReadoutLine[];
  answered: number;
  hours: number;
  hoursEach: number;
  frequencyLabel: string;
  onQuote: () => void;
  headingId: string;
}) {
  return (
    <div className="card relative overflow-hidden text-ink">
      <div className="border-b border-rule px-6 py-4">
        <h3 id={headingId} className="flex items-baseline justify-between gap-4 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">
          <span className="whitespace-nowrap">Your ledger</span>
          <span className="whitespace-nowrap tabular-nums">{answered} of 6 answered</span>
        </h3>
      </div>

      <div className="px-6 pb-6 pt-5" aria-live="polite">
        <p className="text-[0.9375rem] font-medium text-muted">Your estimate, based on your answers.</p>
        <p className="mt-2 border-b border-rule pb-5">
          <span className="sr-only">About {hours} hours a year back</span>
          <span aria-hidden="true" className="flex items-baseline gap-2.5">
            <span className="text-[1rem] text-ink">About</span>
            <AnimatedNumber value={hours} className="font-display text-[3.5rem] font-semibold leading-none text-vault" />
          </span>
          <span aria-hidden="true" className="mt-1 block font-display text-[1.375rem] font-medium leading-tight text-ink">
            hours a year back
          </span>
          <span aria-hidden="true" className="mt-1 block text-[0.875rem] text-muted">
            {frequencyLabel} × {formatHours(hoursEach)} each payroll
          </span>
        </p>

        <div className="mt-5">
          <h4 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink">
            Worth a closer look <span className="tabular-nums text-vault">({closer.length})</span>
          </h4>
          {closer.length === 0 ? (
            <p className="mt-2 text-[0.9375rem] text-muted">
              {answered === 0 ? "Answer the six questions and anything to check lands here." : "Nothing flagged so far."}
            </p>
          ) : (
            <ul className="mt-3 space-y-3">
              {closer.map((l) => (
                <li key={l.id} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                  <CircleAlert className="mt-1 size-[18px] shrink-0 text-vault" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">{l.label}.</strong> {l.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {covered.length > 0 && (
          <div className="mt-5 border-t border-dashed border-rule pt-4">
            <h4 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-muted">Looks covered</h4>
            <ul className="mt-2 space-y-1.5">
              {covered.map((l) => (
                <li key={l.id} className="flex items-start gap-2.5 text-[0.9375rem] text-muted">
                  <Check className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {l.text}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="button" onClick={onQuote} aria-haspopup="dialog" className="btn btn-primary mt-6 w-full">
          Get My Payroll Quote
        </button>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{DISCLAIMER}</p>
      </div>
    </div>
  );
}
