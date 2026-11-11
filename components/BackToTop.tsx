"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

// Appears only after 1.5 screens of scrolling.
export default function BackToTop({ variant = "float" }: { variant?: "float" | "bar" }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  };
  // On phones it sits in the bottom bar so it never covers content.
  if (variant === "bar")
    return (
      <button
        type="button"
        onClick={toTop}
        className="flex min-h-[56px] w-11 shrink-0 flex-col items-center justify-center rounded text-ink"
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
      </button>
    );
  return (
    <button
      type="button"
      onClick={toTop}
      className="fixed bottom-8 right-8 z-30 hidden size-12 items-center justify-center rounded-full border border-rule bg-bond text-ink transition-colors hover:border-ink lg:inline-flex"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
