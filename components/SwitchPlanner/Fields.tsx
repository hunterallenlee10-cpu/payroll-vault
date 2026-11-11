"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";

// Radio cards: a real radio group inside a fieldset with a legend.
export function RadioGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
  columns = 1,
  error,
}: {
  legend: string;
  name: string;
  options: readonly { value: T; label: string }[];
  value: T | "";
  onChange: (v: T) => void;
  columns?: 1 | 2 | 4;
  error?: string;
}) {
  const cols = columns === 4 ? "grid-cols-2 sm:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <fieldset aria-invalid={error ? true : undefined} aria-describedby={error ? `${name}-err` : undefined}>
      <legend className="text-[1rem] font-semibold text-ink">{legend}</legend>
      <div className={`mt-3 grid gap-2 ${cols}`}>
        {options.map((o) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[6px] border px-4 py-2.5 text-[1rem] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-vault ${
                checked ? "border-vault bg-vault/[0.06] font-semibold text-ink" : "border-rule bg-bond text-ink/90 hover:border-ink/40"
              }`}
            >
              <input type="radio" name={name} value={o.value} checked={checked} onChange={() => onChange(o.value)} className="sr-only" />
              <span
                aria-hidden="true"
                className={`inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border ${checked ? "border-vault" : "border-ink/30"}`}
              >
                {checked && <span className="size-2.5 rounded-full bg-vault" />}
              </span>
              {o.label}
            </label>
          );
        })}
      </div>
      {error && <FieldError id={`${name}-err`}>{error}</FieldError>}
    </fieldset>
  );
}

// Multi-select chips: real checkboxes.
export function ChipGroup<T extends string>({
  legend,
  name,
  options,
  values,
  onToggle,
  hint,
}: {
  legend: string;
  name: string;
  options: readonly { value: T; label: string; detail?: ReactNode }[];
  values: T[];
  onToggle: (v: T) => void;
  hint?: string;
}) {
  return (
    <fieldset>
      <legend className="text-[1rem] font-semibold text-ink">{legend}</legend>
      {hint && <p className="mt-1 text-[0.9375rem] text-muted">{hint}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const checked = values.includes(o.value);
          return (
            <label
              key={o.value}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[0.9375rem] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-vault ${
                checked ? "border-vault bg-vault text-white" : "border-rule bg-bond text-ink hover:border-ink/40"
              }`}
            >
              <input
                type="checkbox"
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onToggle(o.value)}
                className="sr-only"
              />
              {checked && <Check className="size-4" strokeWidth={2} aria-hidden="true" />}
              <span>{o.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  optional,
  error,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email";
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[1rem] font-semibold text-ink">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 block min-h-12 w-full rounded-[6px] border bg-bond px-4 text-[1rem] text-ink outline-none transition-colors placeholder:text-muted focus-visible:border-vault focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-vault ${
          error ? "border-[#b42318]" : "border-rule"
        }`}
      />
      {error && <FieldError id={`${id}-err`}>{error}</FieldError>}
    </div>
  );
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-2 text-[0.9375rem] font-medium text-[#b42318]">
      {children}
    </p>
  );
}
