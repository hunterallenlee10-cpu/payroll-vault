"use client";

import type { PlannerPreset } from "@/lib/planner";

// Placeholder until Phase 5.
export default function SwitchPlannerModal({ onClose }: { preset: PlannerPreset; onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-label="Payroll quote" className="fixed inset-0 z-50 grid place-items-center bg-ink/40">
      <button type="button" className="btn btn-primary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
