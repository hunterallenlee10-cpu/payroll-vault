"use client";

import Image from "next/image";
import { Check, MessageSquareText, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { business } from "@/lib/business";
import { smsHref, summaryRows, type PlannerData } from "./plannerData";

export default function Success({ d, idp }: { d: PlannerData; idp: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => headingRef.current?.focus(), []);
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="relative shrink-0">
          <Image
            src="/images/01-mike-taylor-owner-headshot-BEST.webp"
            alt="Mike Taylor, owner of Payroll Vault Frederick"
            width={480}
            height={480}
            sizes="48px"
            className="size-12 rounded-full border border-rule object-cover"
          />
          <span className="absolute -bottom-1 -right-1 inline-flex size-6 items-center justify-center rounded-full border-2 border-bond bg-vault text-white">
            <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
          </span>
        </span>
        {/* DRAFT: confirm reply method and timing */}
        <h2 id={`${idp}-title`} ref={headingRef} tabIndex={-1} className="text-[1.625rem] font-semibold leading-tight outline-none sm:text-[1.875rem]">
          Thanks. Mike will call you back during business hours.
        </h2>
      </div>

      <div className="mt-6 rounded-[6px] border border-rule bg-paper/60">
        <p className="border-b border-ink/70 px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
          Your quote request
        </p>
        <dl className="px-5 pb-2 text-[0.9375rem]">
          {summaryRows(d).map(([k, v]) => (
            <div key={k} className="flex gap-4 border-b border-dashed border-rule py-2.5 last:border-0">
              <dt className="w-28 shrink-0 text-muted sm:w-36">{k}</dt>
              <dd className="min-w-0 flex-1 break-words text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-5 text-[0.9375rem] text-muted">
        Want to talk sooner? Call now, or send these details to Mike by text in one tap.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <a href={business.tel} className="btn btn-primary min-h-14 text-[1.0625rem]">
          <Phone className="size-5" strokeWidth={1.5} aria-hidden="true" />
          Call now
        </a>
        <a href={smsHref(d)} className="btn btn-ghost min-h-14 text-[1.0625rem]">
          <MessageSquareText className="size-5 text-vault" strokeWidth={1.5} aria-hidden="true" />
          Text now
        </a>
      </div>
    </div>
  );
}
