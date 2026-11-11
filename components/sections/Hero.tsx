import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import QuoteButton from "../QuoteButton";
import SpiresLine from "../SpiresLine";
import VaultDial from "../VaultDial";
import PayStub from "./PayStub";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="ledger relative overflow-hidden">
      <div className="wrap relative grid grid-cols-1 gap-12 pb-28 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-40 lg:pt-20">
        {/* Mobile and tablet: the dial sits top right beside the eyebrow */}
        <VaultDial animate idPrefix="vd-m" className="absolute right-5 top-5 size-[88px] sm:top-9 md:right-8 lg:hidden" />

        <div className="lg:col-span-7 lg:pt-6">
          <h1 id="hero-title" className="font-display">
            <span className="eyebrow block max-w-[calc(100%-100px)] font-sans leading-[1.5] sm:max-w-none sm:pr-28 lg:pr-0">
              Payroll services in Frederick, MD · Frederick County
            </span>
            <span className="mt-4 block text-[2.375rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl lg:mt-6 lg:text-[4.5rem] xl:text-[5rem]">
              Payroll, handled by your neighbors.
            </span>
            <span className="mt-1 block text-[2.375rem] font-semibold leading-[1.05] tracking-[-0.02em] text-vault sm:text-6xl lg:mt-2 lg:text-[4.5rem] xl:text-[5rem]">
              Not a call center.
            </span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink/85 lg:mt-8 lg:text-xl">
            Payroll Vault Frederick runs payroll, payroll taxes and HR for small businesses across Frederick County.
            Locally owned. No contracts. When you call, Mike&rsquo;s team answers.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-10">
            <QuoteButton preset={{ source: "hero" }} className="btn btn-primary px-7 text-[1.0625rem]" />
            <a href={business.tel} className="btn btn-ghost px-6 text-[1.0625rem]">
              <Phone className="size-[18px] text-vault" strokeWidth={1.5} aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-y-2 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-muted">
            <li className="pr-4">Owner-run since 2025</li>
            <li className="border-l border-rule px-4">No contracts</li>
            <li className="border-l border-rule pl-4">{business.hours.short}</li>
          </ul>

          <p className="mt-6 flex items-center gap-3 text-[0.9375rem] text-ink/85">
            <Image
              src="/images/01-mike-taylor-owner-headshot-BEST.webp"
              alt="Mike Taylor, owner of Payroll Vault Frederick"
              width={480}
              height={480}
              sizes="40px"
              className="size-10 rounded-full border border-rule object-cover"
            />
            <span>
              Talk to <strong className="font-semibold text-ink">Mike Taylor</strong>, owner and Army veteran.
            </span>
          </p>
        </div>

        {/* The Vault Lock composition */}
        <div className="relative lg:col-span-5 lg:pl-6 lg:pt-10">
          <div className="relative mx-auto max-w-[420px] lg:mr-0">
            <PayStub />
            <VaultDial
              animate
              idPrefix="vd-d"
              className="absolute -right-10 -top-16 hidden size-[168px] lg:block xl:-right-14 xl:size-[184px]"
            />
          </div>
        </div>
      </div>

      <SpiresLine className="pointer-events-none absolute inset-x-0 bottom-0 h-[84px] w-full lg:h-[132px]" />
    </section>
  );
}
