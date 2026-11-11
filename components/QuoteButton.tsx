"use client";

import type { ReactNode } from "react";
import type { PlannerPreset } from "@/lib/planner";
import { useQuote } from "./QuoteProvider";

// Anything that opens the Switch Planner is a real <button>.
export default function QuoteButton({
  preset,
  className = "btn btn-primary",
  children = "Get My Payroll Quote",
  ariaLabel,
}: {
  preset?: PlannerPreset;
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
}) {
  const { openPlanner } = useQuote();
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      aria-label={ariaLabel}
      onClick={() => openPlanner(preset)}
    >
      {children}
    </button>
  );
}
