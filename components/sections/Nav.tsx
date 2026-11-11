"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogIn, Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/business";
import QuoteButton from "../QuoteButton";

const anchors = [
  { href: "/#why-us", label: "Why us" },
  { href: "/#checkup", label: "Checkup" },
  { href: "/#services", label: "Services" },
  { href: "/#meet-mike", label: "Meet Mike" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = sheetRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && sheetRef.current) {
        const items = Array.from(sheetRef.current.querySelectorAll<HTMLElement>("a, button"));
        const a = items[0];
        const z = items[items.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/92 shadow-nav backdrop-blur-md supports-[backdrop-filter]:bg-paper/[0.92]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-bond focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="wrap flex h-16 items-center gap-6 lg:h-[72px]">
        <Link href="/" className="flex shrink-0 items-center py-2" aria-label="Payroll Vault Frederick home">
          <Image
            src="/images/00-logo-2-logo-wordmark-transparent.png"
            alt="Payroll Vault"
            width={320}
            height={82}
            priority
            sizes="180px"
            className="h-auto w-[148px] lg:w-[172px] xl:w-[180px]"
          />
        </Link>

        <ul className="ml-2 hidden items-center gap-1 lg:flex">
          {anchors.map((a) => (
            <li key={a.href}>
              <a
                href={a.href}
                className="inline-flex min-h-11 items-center rounded px-3 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {a.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a
            href={business.clientLogin}
            className="inline-flex min-h-11 items-center gap-1.5 px-2 text-[15px] text-muted transition-colors hover:text-ink"
          >
            Client login
          </a>
          <a
            href={business.tel}
            className="inline-flex min-h-11 items-center gap-2 px-2 text-[15px] font-semibold text-ink"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="size-4 text-vault" strokeWidth={1.5} aria-hidden="true" />
            <span className="hidden xl:inline">{business.phoneDisplay}</span>
          </a>
          <QuoteButton preset={{ source: "nav" }} className="btn btn-primary !min-h-11 !px-4 text-[15px]" />
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="ml-auto inline-flex size-12 items-center justify-center rounded text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="ledger fixed inset-0 z-50 flex flex-col overflow-y-auto bg-paper lg:hidden"
        >
          <div className="wrap flex h-16 items-center">
            <Image src="/images/00-logo-2-logo-wordmark-transparent.png" alt="Payroll Vault" width={320} height={82} className="h-auto w-[148px]" />
            <button
              type="button"
              className="ml-auto inline-flex size-12 items-center justify-center rounded"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-6" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <ul className="wrap mt-4 flex flex-col">
            {anchors.map((a) => (
              <li key={a.href} className="border-b border-rule">
                <a
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center font-display text-[28px] font-medium"
                >
                  {a.label}
                </a>
              </li>
            ))}
            <li className="border-b border-rule">
              <Link href="/contact" onClick={() => setOpen(false)} className="flex min-h-16 items-center font-display text-[28px] font-medium">
                Contact
              </Link>
            </li>
          </ul>
          <div className="wrap mt-8 flex flex-col gap-3 pb-10">
            <div onClick={() => setOpen(false)}>
              <QuoteButton preset={{ source: "menu" }} className="btn btn-primary w-full" />
            </div>
            <a href={business.tel} className="btn btn-ghost w-full">
              <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <a href={business.clientLogin} className="text-link justify-center">
              <LogIn className="size-4" strokeWidth={1.5} aria-hidden="true" />
              Client login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
