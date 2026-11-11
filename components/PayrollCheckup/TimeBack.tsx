"use client";

import { HOURS_MAX, HOURS_MIN, HOURS_STEP, formatHours, payrollFrequencies, type FrequencyValue } from "@/lib/checkup";

export default function TimeBack({
  frequency,
  hoursEach,
  onFrequency,
  onHours,
}: {
  frequency: FrequencyValue;
  hoursEach: number;
  onFrequency: (f: FrequencyValue) => void;
  onHours: (h: number) => void;
}) {
  const pct = ((hoursEach - HOURS_MIN) / (HOURS_MAX - HOURS_MIN)) * 100;
  return (
    <div className="rounded-[6px] border border-paper/12 bg-paper/[0.04] p-5 sm:p-6">
      <h3 className="font-display text-[1.375rem] font-medium text-paper">Time back</h3>
      <fieldset className="mt-4">
        <legend className="text-[0.9375rem] font-semibold text-paper">How often do you run payroll?</legend>
        <div className="mt-3 grid grid-cols-2 gap-1 rounded-[6px] border border-paper/15 bg-ink p-1 sm:grid-cols-4">
          {payrollFrequencies.map((f) => {
            const checked = frequency === f.value;
            return (
              <label
                key={f.value}
                className={`flex min-h-11 cursor-pointer items-center justify-center rounded-[4px] px-2 text-center text-[0.9375rem] font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#8fd18f] ${
                  checked ? "bg-vault text-white" : "text-paper/85 hover:bg-paper/[0.07]"
                }`}
              >
                <input type="radio" name="checkup-frequency" value={f.value} checked={checked} onChange={() => onFrequency(f.value)} className="sr-only" />
                {f.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="checkup-hours" className="text-[0.9375rem] font-semibold text-paper">
            Hours you spend each payroll
          </label>
          <output htmlFor="checkup-hours" className="font-display text-lg font-medium text-paper tabular-nums">
            {formatHours(hoursEach)}
          </output>
        </div>
        <input
          id="checkup-hours"
          type="range"
          min={HOURS_MIN}
          max={HOURS_MAX}
          step={HOURS_STEP}
          value={hoursEach}
          onChange={(e) => onHours(Number(e.target.value))}
          aria-valuetext={`${formatHours(hoursEach)} each payroll`}
          className="checkup-range mt-3 h-11 w-full cursor-pointer"
          style={{ ["--pct" as string]: `${pct}%` }}
        />
        <div className="flex justify-between text-[0.8125rem] text-paper-muted" aria-hidden="true">
          <span>30 min</span>
          <span>8 hours</span>
        </div>
      </div>
    </div>
  );
}
