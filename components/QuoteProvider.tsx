"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import type { PlannerPreset } from "@/lib/planner";

// The modal is only downloaded the first time someone asks for a quote.
const SwitchPlannerModal = dynamic(() => import("./SwitchPlanner/SwitchPlannerModal"), { ssr: false });

type Ctx = { openPlanner: (preset?: PlannerPreset) => void };
const QuoteContext = createContext<Ctx>({ openPlanner: () => {} });

export const useQuote = () => useContext(QuoteContext);

export default function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<PlannerPreset>({});
  const [session, setSession] = useState(0);
  const returnFocus = useRef<HTMLElement | null>(null);

  const openPlanner = useCallback((p: PlannerPreset = {}) => {
    returnFocus.current = (document.activeElement as HTMLElement) ?? null;
    setPreset(p);
    setSession((s) => s + 1);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => returnFocus.current?.focus?.());
  }, []);

  const value = useMemo(() => ({ openPlanner }), [openPlanner]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {open && <SwitchPlannerModal key={session} preset={preset} onClose={close} />}
    </QuoteContext.Provider>
  );
}
