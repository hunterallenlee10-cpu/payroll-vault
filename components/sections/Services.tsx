import {
  Clock,
  HardHat,
  Landmark,
  PiggyBank,
  Plus,
  Receipt,
  ScrollText,
  SearchCheck,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { services, type Service, type ServiceId } from "@/lib/business";
import QuoteButton from "../QuoteButton";

const icons: Record<ServiceId, LucideIcon> = {
  payroll: Receipt,
  "payroll-tax": Landmark,
  hr: Users,
  "time-attendance": Clock,
  "employee-portal": Smartphone,
  "workers-comp": HardHat,
  "labor-law": ScrollText,
  screening: SearchCheck,
  retirement: PiggyBank,
};

const by = (id: ServiceId) => services.find((s) => s.id === id)!;

function Tile({ service, className = "", children }: { service: Service; className?: string; children?: React.ReactNode }) {
  const Icon = icons[service.id];
  const big = service.size === "lg";
  // The 401(k) tile has no id: #retirement belongs to the retirement band below.
  const id = service.id === "retirement" ? undefined : service.id;
  return (
    <article
      id={id}
      className={`card group relative flex flex-col p-6 transition-colors hover:border-vault/50 ${big ? "lg:p-10" : ""} ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center rounded-full border border-vault/40 text-vault ${big ? "size-14" : "size-11"}`}
      >
        <Icon className={big ? "size-6" : "size-5"} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className={`font-semibold leading-tight ${big ? "mt-8 text-[2rem] lg:mt-auto lg:pt-16 lg:text-[2.75rem]" : "mt-5 text-[1.3125rem]"}`}>
        {service.name}
      </h3>
      <p className={`mt-2 leading-relaxed text-ink/80 ${big ? "max-w-md text-lg" : "text-[1rem]"}`}>{service.line}</p>
      {children}
      <div className={big ? "pt-6" : "mt-auto pt-5"}>
        <QuoteButton
          preset={{ services: [service.id], source: `service-${service.id}` }}
          className="text-link !min-h-11 text-[0.9375rem] after:absolute after:inset-0 after:content-['']"
          ariaLabel={`Add ${service.name} to my quote`}
        >
          <Plus className="size-4" strokeWidth={1.5} aria-hidden="true" />
          Add to my quote
        </QuoteButton>
      </div>
    </article>
  );
}

export default function Services() {
  const small: ServiceId[] = ["employee-portal", "workers-comp", "labor-law", "screening", "retirement"];
  return (
    <section id="services" aria-labelledby="services-title" className="ledger section">
      <div className="wrap">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] sm:text-5xl">
              Everything payroll touches, in one place.
            </h2>
          </div>
          <p className="max-w-sm text-[1.0625rem] text-ink/80">Pick what you need. Tap any service to add it to your quote.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          <Tile service={by("payroll")} className="md:col-span-2 lg:col-span-6 lg:row-span-2">
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 border-t border-rule text-[0.9375rem]" aria-label="Pay schedules we run">
              {["Weekly", "Every two weeks", "Twice a month", "Monthly"].map((f) => (
                <li key={f} className="flex items-center gap-2 border-b border-dashed border-rule py-2.5 text-ink/85">
                  <span className="size-1.5 rounded-full bg-vault" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Tile>
          <Tile service={by("payroll-tax")} className="md:col-span-2 lg:col-span-6" />
          <Tile service={by("hr")} className="lg:col-span-3" />
          <Tile service={by("time-attendance")} className="lg:col-span-3" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {small.map((id) => (
            <Tile key={id} service={by(id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
