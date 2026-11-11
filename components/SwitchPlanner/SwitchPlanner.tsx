"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useId, useRef, useState } from "react";
import type { PlannerPreset } from "@/lib/planner";
import { sendLead } from "@/lib/leads";
import { STEPS, initialData, smsBody, summaryRows, validate, type PlannerData } from "./plannerData";
import { StepAbout, StepInfo, StepNeeds, StepTiming, StepToday } from "./Steps";
import Success from "./Success";

// The five-step quote form. Used inside the modal and inline on /contact.
// Front end only: on submit it shows a summary and a prefilled text message to Mike.
export default function SwitchPlanner({ preset = {}, inline = false }: { preset?: PlannerPreset; inline?: boolean }) {
  const idp = useId().replace(/:/g, "");
  const [step, setStep] = useState(0);
  const [d, setD] = useState<PlannerData>(() => initialData(preset));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const set = <K extends keyof PlannerData>(k: K, v: PlannerData[K]) => {
    setD((prev) => ({ ...prev, [k]: v }));
    if (errors[k as string]) setErrors((e) => ({ ...e, [k as string]: "" }));
  };

  const go = (n: number) => {
    setStep(n);
    setErrors({});
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => {
    const e = validate(step, d);
    if (Object.values(e).some(Boolean)) {
      setErrors(e);
      return;
    }
    if (step < STEPS.length - 1) go(step + 1);
    else {
      sendLead({ source: preset.source ?? "", summary: Object.fromEntries(summaryRows(d)), text: smsBody(d), data: d });
      setDone(true);
    }
  };

  if (done) return <Success d={d} idp={idp} />;

  const stepProps = { d, set, errors, idp };
  const pct = ((step + 1) / STEPS.length) * 100;
  const Heading = inline ? "h3" : "h2";

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      <div className="flex items-center justify-between gap-4 text-[0.875rem] font-semibold text-muted">
        <span aria-live="polite" className="tabular-nums">
          Step {step + 1} of {STEPS.length}
        </span>
        <span className="hidden sm:inline">{STEPS[step]}</span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-rule"
        role="progressbar"
        aria-label="Quote progress"
        aria-valuemin={1}
        aria-valuemax={STEPS.length}
        aria-valuenow={step + 1}
        aria-valuetext={`Step ${step + 1} of ${STEPS.length}`}
      >
        <div className="h-full rounded-full bg-vault transition-[width] duration-200 ease-out" style={{ width: `${pct}%` }} />
      </div>

      <div key={step} className="planner-step mt-7">
        <Heading
          id={`${idp}-title`}
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-[1.75rem] font-semibold leading-tight outline-none sm:text-[2rem]"
        >
          {STEPS[step]}
        </Heading>
        <div className="mt-6">
          {step === 0 && <StepAbout {...stepProps} />}
          {step === 1 && <StepToday {...stepProps} />}
          {step === 2 && <StepNeeds {...stepProps} />}
          {step === 3 && <StepTiming {...stepProps} />}
          {step === 4 && <StepInfo {...stepProps} />}
        </div>
      </div>

      {step === STEPS.length - 1 && (
        // DRAFT: confirm consent wording with Payroll Vault corporate (their privacy policy covers SMS consent).
        <p className="mt-6 text-[0.875rem] leading-relaxed text-muted">
          By sending, you agree Payroll Vault Frederick may call or text you about your quote. Message and data rates may apply. Reply
          STOP to opt out. See our{" "}
          <a href="/privacy" target="_blank" rel="noopener" className="font-semibold text-vault underline underline-offset-2">
            privacy notice
          </a>
          .
        </p>
      )}
      <div className="mt-8 flex items-center justify-between gap-3 border-t border-rule pt-5">
        {step > 0 ? (
          <button type="button" onClick={() => go(step - 1)} className="btn btn-ghost">
            <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
            Back
          </button>
        ) : (
          <span />
        )}
        <button type="submit" className="btn btn-primary">
          {step === STEPS.length - 1 ? "Send my quote request" : "Next"}
          {step < STEPS.length - 1 && <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />}
        </button>
      </div>
    </form>
  );
}
