"use client";

import {
  callTimeOptions,
  currentOptions,
  employeeOptions,
  frequencyOptions,
  reasonOptions,
  roleOptions,
  serviceOptions,
  timingOptions,
} from "@/lib/planner";
import { ChipGroup, RadioGroup, TextField } from "./Fields";
import type { PlannerData } from "./plannerData";

type StepProps = {
  d: PlannerData;
  set: <K extends keyof PlannerData>(k: K, v: PlannerData[K]) => void;
  errors: Record<string, string>;
  idp: string;
};

const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

export function StepAbout({ d, set, errors, idp }: StepProps) {
  return (
    <div className="space-y-7">
      <RadioGroup legend="Who's asking?" name={`${idp}-role`} options={roleOptions} value={d.role} onChange={(v) => set("role", v)} columns={2} />
      <TextField
        id={`${idp}-company`}
        label={d.role === "accountant" ? "Your client's company name" : "Company name"}
        value={d.company}
        onChange={(v) => set("company", v)}
        autoComplete="organization"
        optional
      />
      <RadioGroup
        legend="Number of employees"
        name={`${idp}-employees`}
        options={employeeOptions.map((e) => ({ value: e as string, label: e }))}
        value={d.employees}
        onChange={(v) => set("employees", v)}
        columns={4}
        error={errors.employees}
      />
    </div>
  );
}

export function StepToday({ d, set, errors, idp }: StepProps) {
  return (
    <div className="space-y-7">
      <RadioGroup
        legend="Who runs payroll today?"
        name={`${idp}-current`}
        options={currentOptions}
        value={d.current}
        onChange={(v) => set("current", v)}
        columns={2}
        error={errors.current}
      />
      <RadioGroup
        legend="How often do you pay your team?"
        name={`${idp}-frequency`}
        options={frequencyOptions}
        value={d.frequency}
        onChange={(v) => set("frequency", v)}
        columns={4}
        error={errors.frequency}
      />
      <ChipGroup
        legend="What matters most?"
        hint="Optional. Pick any."
        name={`${idp}-reasons`}
        options={reasonOptions}
        values={d.reasons}
        onToggle={(v) => set("reasons", toggle(d.reasons, v))}
      />
    </div>
  );
}

export function StepNeeds({ d, set, idp }: StepProps) {
  return (
    <div className="space-y-7">
      <ChipGroup
        legend="Which services do you want quoted?"
        hint="Pick any. Not sure is fine too."
        name={`${idp}-services`}
        options={serviceOptions}
        values={d.services}
        onToggle={(v) => set("services", toggle(d.services, v))}
      />
      <fieldset>
        <legend className="text-[1rem] font-semibold text-ink">From the Payroll Checkup</legend>
        <label
          className={`mt-3 flex min-h-12 cursor-pointer items-start gap-3 rounded-[6px] border px-4 py-3 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-vault ${
            d.checkupHelp ? "border-vault bg-vault/[0.06]" : "border-rule bg-bond hover:border-ink/40"
          }`}
        >
          <input
            type="checkbox"
            checked={d.checkupHelp}
            onChange={() => set("checkupHelp", !d.checkupHelp)}
            className="mt-1 size-[18px] shrink-0 accent-[#3A781E]"
          />
          <span>
            <span className="block font-semibold text-ink">Help with something the Checkup flagged</span>
            {d.flagged.length > 0 ? (
              <span className="mt-1 block text-[0.9375rem] text-muted">{d.flagged.join(" · ")}</span>
            ) : (
              <span className="mt-1 block text-[0.9375rem] text-muted">Tell us in the notes on the last step.</span>
            )}
          </span>
        </label>
      </fieldset>
    </div>
  );
}

export function StepTiming({ d, set, errors, idp }: StepProps) {
  return (
    <RadioGroup
      legend="When would you like to start?"
      name={`${idp}-timing`}
      options={timingOptions}
      value={d.timing}
      onChange={(v) => set("timing", v)}
      columns={2}
      error={errors.timing}
    />
  );
}

export function StepInfo({ d, set, errors, idp }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id={`${idp}-name`} label="Your name" value={d.name} onChange={(v) => set("name", v)} autoComplete="name" required error={errors.name} />
        <TextField
          id={`${idp}-phone`}
          label="Phone"
          type="tel"
          inputMode="tel"
          value={d.phone}
          onChange={(v) => set("phone", v)}
          autoComplete="tel"
          required
          error={errors.phone}
        />
      </div>
      <TextField
        id={`${idp}-email`}
        label="Email"
        type="email"
        inputMode="email"
        value={d.email}
        onChange={(v) => set("email", v)}
        autoComplete="email"
        optional
        error={errors.email}
      />
      <RadioGroup
        legend="Best time to call"
        name={`${idp}-calltime`}
        options={callTimeOptions.map((c) => ({ value: c as string, label: c }))}
        value={d.callTime}
        onChange={(v) => set("callTime", v)}
        columns={4}
      />
      <div>
        <label htmlFor={`${idp}-notes`} className="text-[1rem] font-semibold text-ink">
          Anything Mike should know? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id={`${idp}-notes`}
          rows={3}
          value={d.notes}
          onChange={(e) => set("notes", e.target.value)}
          className="mt-2 block w-full rounded-[6px] border border-rule bg-bond px-4 py-3 text-[1rem] text-ink outline-none focus-visible:border-vault focus-visible:outline-2 focus-visible:outline-vault"
        />
      </div>
    </div>
  );
}
