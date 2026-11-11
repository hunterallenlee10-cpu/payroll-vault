"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { PlannerPreset } from "@/lib/planner";
import SwitchPlanner from "./SwitchPlanner";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';

// Modal shell: Esc closes, focus is trapped, the page behind does not scroll.
export default function SwitchPlannerModal({ preset, onClose }: { preset: PlannerPreset; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const first = panelRef.current?.querySelector<HTMLElement>("h2, h3");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (!items.length) return;
      const a = items[0];
      const z = items[items.length - 1];
      const inside = panelRef.current.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === a || !inside)) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && (document.activeElement === z || !inside)) {
        e.preventDefault();
        a.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = prevOverflow;
      document.body.style.paddingRight = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="planner-backdrop fixed inset-0 z-[70] flex items-end justify-center bg-ink/55 sm:items-center sm:p-6" onMouseDown={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
        className="planner-panel relative flex max-h-[94dvh] w-full max-w-[680px] flex-col overflow-hidden rounded-t-[10px] bg-bond sm:rounded-[8px]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-rule px-5 py-3 sm:px-8">
          <p id={labelId} className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink">
            Get my payroll quote
          </p>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded text-ink hover:bg-paper"
            aria-label="Close quote form"
          >
            <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          <SwitchPlanner preset={preset} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
