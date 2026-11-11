"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

// Appears only after 1.5 screens of scrolling.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className="fixed bottom-[144px] right-4 z-30 inline-flex size-12 items-center justify-center rounded-full border border-rule bg-bond text-ink transition-colors hover:border-ink lg:bottom-8 lg:right-8"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
