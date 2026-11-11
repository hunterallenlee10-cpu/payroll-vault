import { business } from "@/lib/business";
import {
  currentOptions,
  frequencyOptions,
  labelOf,
  reasonOptions,
  roleOptions,
  serviceOptions,
  timingOptions,
  type Current,
  type Frequency,
  type PlannerPreset,
  type Reason,
  type Role,
  type Timing,
} from "@/lib/planner";
import type { ServiceId } from "@/lib/business";

export type PlannerData = {
  role: Role | "";
  company: string;
  employees: string;
  current: Current | "";
  frequency: Frequency | "";
  reasons: Reason[];
  services: ServiceId[];
  checkupHelp: boolean;
  flagged: string[];
  timing: Timing | "";
  name: string;
  phone: string;
  email: string;
  callTime: string;
  notes: string;
};

export const initialData = (p: PlannerPreset): PlannerData => ({
  role: p.role ?? "business",
  company: "",
  employees: "",
  current: p.current ?? "",
  frequency: p.frequency ?? "",
  reasons: p.reasons ?? [],
  services: p.services ?? [],
  checkupHelp: (p.flagged?.length ?? 0) > 0,
  flagged: p.flagged ?? [],
  timing: "",
  name: "",
  phone: "",
  email: "",
  callTime: "",
  notes: "",
});

export const STEPS = ["About you", "How you run payroll today", "What you need", "Timing", "Your info"] as const;

export const phoneDigits = (v: string) => {
  const d = v.replace(/\D/g, "");
  return d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
};

export function validate(step: number, d: PlannerData): Record<string, string> {
  const e: Record<string, string> = {};
  if (step === 0) {
    if (!d.employees) e.employees = "Pick the closest size.";
  }
  if (step === 1) {
    if (!d.current) e.current = "Pick the one closest to how you do it now.";
    if (!d.frequency) e.frequency = "Pick how often you pay your team.";
  }
  if (step === 3) {
    if (!d.timing) e.timing = "Pick a timing, even if it's just exploring.";
  }
  if (step === 4) {
    if (!d.name.trim()) e.name = "Who should Mike ask for?";
    const digits = phoneDigits(d.phone);
    if (!digits) e.phone = "Mike needs a number to call you back.";
    else if (digits.length < 10) e.phone = "That number looks short. Mind checking it?";
    else if (digits.length > 10) e.phone = "That number looks long. Mind checking it?";
    if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "That email doesn't look right. Mind checking it?";
  }
  return e;
}

export const formatPhone = (v: string) => {
  const d = phoneDigits(v);
  return d.length === 10 ? `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}` : v.trim();
};

export function needsList(d: PlannerData) {
  const list = d.services.map((s) => labelOf(serviceOptions, s));
  if (d.checkupHelp) list.push(d.flagged.length ? `help with ${d.flagged.join(", ")}` : "help with something the Checkup flagged");
  return list;
}

export function summaryRows(d: PlannerData): [string, string][] {
  const rows: [string, string][] = [
    ["You are", labelOf(roleOptions, d.role)],
    ["Company", d.company.trim() || "Not given"],
    ["Employees", d.employees],
    ["Payroll today", labelOf(currentOptions, d.current)],
    ["Pay frequency", labelOf(frequencyOptions, d.frequency)],
  ];
  if (d.reasons.length) rows.push(["What matters", d.reasons.map((r) => labelOf(reasonOptions, r)).join(", ")]);
  rows.push(["Needs", needsList(d).join(", ") || "Not sure yet"]);
  rows.push(["Timing", labelOf(timingOptions, d.timing)]);
  rows.push(["Name", d.name.trim()]);
  rows.push(["Phone", formatPhone(d.phone)]);
  if (d.email.trim()) rows.push(["Email", d.email.trim()]);
  if (d.callTime) rows.push(["Best time to call", d.callTime]);
  if (d.notes.trim()) rows.push(["Notes", d.notes.trim()]);
  return rows;
}

// "Hi Mike, payroll quote request: [company], [employees] employees, currently [current setup], paid [frequency],
//  needs [services], timing [timing]. [name], [phone]."
export function smsBody(d: PlannerData) {
  const company = d.company.trim() || (d.role === "accountant" ? "a client I'm referring" : "my business");
  const needs = needsList(d).join(", ") || "not sure yet";
  const referral = d.role === "accountant" ? " (accountant referral)" : "";
  return (
    `Hi ${business.ownerFirst}, payroll quote request${referral}: ${company}, ${d.employees} employees, ` +
    `currently ${labelOf(currentOptions, d.current).toLowerCase()}, paid ${labelOf(frequencyOptions, d.frequency).toLowerCase()}, ` +
    `needs ${needs.toLowerCase()}, timing ${labelOf(timingOptions, d.timing).toLowerCase()}. ${d.name.trim()}, ${formatPhone(d.phone)}.`
  );
}

// "?&body=" works on both iOS and Android messaging apps.
export const smsHref = (d: PlannerData) => `${business.sms}?&body=${encodeURIComponent(smsBody(d))}`;
