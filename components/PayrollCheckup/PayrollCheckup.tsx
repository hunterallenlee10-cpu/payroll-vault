"use client";

import { ChevronUp, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { buildReadout, checkupItems, hoursBack, payrollFrequencies, type Answer, type FrequencyValue } from "@/lib/checkup";
import { useQuote } from "../QuoteProvider";
import QuestionCard from "./QuestionCard";
import Readout from "./Readout";
import TimeBack from "./TimeBack";

type Answers = Record<string, Answer | undefined>;

export default function PayrollCheckup() {
  const { openPlanner } = useQuote();
  const [answers, setAnswers] = useState<Answers>({});
  const [frequency, setFrequency] = useState<FrequencyValue>("biweekly");
  const [hoursEach, setHoursEach] = useState(1.5);
  const [inView, setInView] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const touched = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const { closer, covered, answered } = useMemo(() => buildReadout(answers), [answers]);
  const hours = hoursBack(frequency, hoursEach);
  const frequencyLabel = payrollFrequencies.find((f) => f.value === frequency)?.label ?? "";

  const setAnswer = (id: string, a: Answer) => {
    touched.current = true;
    setAnswers((prev) => ({ ...prev, [id]: a }));
  };

  // Show the mobile summary pill only while the Checkup is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "-30% 0px -30% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // One demo pass the first time the section scrolls into view: "Not sure" on 1 and 2, then reset.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers: number[] = [];
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const step = (fn: () => void, at: number) => timers.push(window.setTimeout(() => !touched.current && fn(), at));
        step(() => setAnswers({ "cross-state": "unsure" }), 500);
        step(() => setAnswers({ "cross-state": "unsure", "local-tax": "unsure" }), 950);
        step(() => setAnswers({}), 2900);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheetOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [sheetOpen]);

  const quote = () => {
    setSheetOpen(false);
    openPlanner({ frequency, flagged: closer.map((l) => l.label), source: "checkup" });
  };

  const readoutProps = { closer, covered, answered, hours, hoursEach, frequencyLabel, onQuote: quote };

  return (
    <div ref={rootRef} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="space-y-3 lg:col-span-7">
        {checkupItems.map((item, i) => (
          <QuestionCard key={item.id} item={item} index={i} value={answers[item.id]} onChange={(a) => setAnswer(item.id, a)} />
        ))}
        <div className="pt-3">
          <TimeBack
            frequency={frequency}
            hoursEach={hoursEach}
            onFrequency={(f) => {
              touched.current = true;
              setFrequency(f);
            }}
            onHours={(h) => {
              touched.current = true;
              setHoursEach(h);
            }}
          />
        </div>
      </div>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-[96px]">
          <Readout {...readoutProps} headingId="readout-title" />
        </div>
      </div>

      {/* Mobile: a sticky summary pill that expands to the full readout */}
      {inView && !sheetOpen && (
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          aria-expanded={false}
          aria-controls="readout-sheet"
          className="fixed inset-x-3 bottom-[80px] z-30 flex min-h-[52px] items-center justify-between gap-3 rounded-full border border-rule bg-bond px-5 text-[0.9375rem] font-semibold text-ink shadow-[0_1px_2px_rgb(20_33_43/0.12)] lg:hidden"
        >
          <span className="tabular-nums">
            <span className="text-vault">{closer.length} to review</span>
            <span className="px-2 text-muted" aria-hidden="true">·</span>
            {hours} hrs back
          </span>
          <span className="inline-flex items-center gap-1 text-[0.875rem] text-muted">
            See ledger <ChevronUp className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </button>
      )}

      {sheetOpen &&
        createPortal(
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-ink/50 lg:hidden" onClick={() => setSheetOpen(false)}>
          <div
            id="readout-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="readout-title-m"
            className="max-h-[88vh] overflow-y-auto rounded-t-[10px] bg-bond"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-end bg-bond/95 px-2 pt-2">
              <button
                type="button"
                autoFocus
                onClick={() => setSheetOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded text-ink"
                aria-label="Close ledger"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <Readout {...readoutProps} headingId="readout-title-m" />
          </div>
        </div>,
          document.body,
        )}
    </div>
  );
}
