import { services, type ServiceId } from "./business";

export type Role = "business" | "accountant";
export type Frequency = "weekly" | "biweekly" | "semimonthly" | "monthly";
export type Current = "self" | "accountant" | "provider" | "software" | "first";
export type Timing = "next-payroll" | "next-quarter" | "january" | "exploring";
export type Reason = "faster" | "mistakes" | "time" | "contract";

export type PlannerPreset = {
  role?: Role;
  current?: Current;
  frequency?: Frequency;
  services?: ServiceId[];
  reasons?: Reason[];
  /** Checkup items flagged "No" or "Not sure", as short labels. */
  flagged?: string[];
  source?: string;
};

export const roleOptions: { value: Role; label: string }[] = [
  { value: "business", label: "I run a business" },
  { value: "accountant", label: "I'm an accountant referring a client" },
];

export const employeeOptions = ["1 to 4", "5 to 14", "15 to 49", "50 or more"] as const;

export const currentOptions: { value: Current; label: string }[] = [
  { value: "self", label: "I do it myself" },
  { value: "accountant", label: "My accountant or bookkeeper" },
  { value: "provider", label: "Another payroll company" },
  { value: "software", label: "Payroll software I run myself" },
  { value: "first", label: "Starting my first payroll" },
];

export const frequencyOptions: { value: Frequency; label: string; runs: number }[] = [
  { value: "weekly", label: "Weekly", runs: 52 },
  { value: "biweekly", label: "Every two weeks", runs: 26 },
  { value: "semimonthly", label: "Twice a month", runs: 24 },
  { value: "monthly", label: "Monthly", runs: 12 },
];

export const reasonOptions: { value: Reason; label: string }[] = [
  { value: "faster", label: "Faster answers" },
  { value: "mistakes", label: "Fewer payroll mistakes" },
  { value: "time", label: "Getting my time back" },
  { value: "contract", label: "No long-term contract" },
];

export const serviceOptions = services.map((s) => ({ value: s.id, label: s.short }));

export const timingOptions: { value: Timing; label: string }[] = [
  { value: "next-payroll", label: "Before my next payroll" },
  { value: "next-quarter", label: "Next quarter" },
  { value: "january", label: "January 1" },
  { value: "exploring", label: "Just exploring" },
];

export const callTimeOptions = ["Morning", "Midday", "Afternoon"] as const;

export const labelOf = <T extends string>(opts: { value: T; label: string }[], v?: T | "") =>
  opts.find((o) => o.value === v)?.label ?? "";
