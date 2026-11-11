import { ArrowRight, FileSignature, Headset, Route } from "lucide-react";
import type { PlannerPreset } from "@/lib/planner";
import QuoteButton from "../QuoteButton";

const cards: {
  icon: typeof Headset;
  title: string;
  body: string;
  cta: string;
  preset: PlannerPreset;
  featured?: boolean;
}[] = [
  {
    icon: Headset,
    title: "A real person, not a queue.",
    body: "Call during business hours and the team that runs your payroll picks up. You'll never wait on hold.",
    cta: "Get My Payroll Quote",
    preset: { reasons: ["faster"], source: "why-person" },
    featured: true,
  },
  {
    icon: Route,
    title: "Switching is on us.",
    // DRAFT: confirm what onboarding includes
    body: "We move your employees, rates and year-to-date totals over and run your first payroll with you. Simple and stress-free.",
    cta: "Plan my switch",
    preset: { current: "provider", source: "why-switch" },
  },
  {
    icon: FileSignature,
    title: "No contracts.",
    body: "Stay because it works, not because you're locked in.",
    cta: "Get My Payroll Quote",
    preset: { reasons: ["contract"], source: "why-contract" },
  },
];

export default function WhySwitch() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section bg-bond">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Why us</p>
          <h2 id="why-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] sm:text-5xl">
            Why Frederick businesses switch to us.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {cards.map(({ icon: Icon, title, body, cta, preset, featured }) => (
            <article
              key={title}
              className={`card flex flex-col bg-paper/40 p-7 lg:min-h-[420px] lg:p-9 ${featured ? "card-featured" : ""}`}
            >
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-vault/40 text-vault">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-[1.75rem] font-semibold leading-[1.15] lg:mt-20">{title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink/80">{body}</p>
              <div className="mt-6 lg:mt-auto lg:pt-6">
                <QuoteButton preset={preset} className="text-link" ariaLabel={`${cta}: ${title}`}>
                  {cta}
                  <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </QuoteButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
