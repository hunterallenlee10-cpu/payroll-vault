import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/business";

// Native <details> accordion: works without JavaScript and is keyboard accessible.
// The FAQPage JSON-LD is built from the same array, so it always matches word for word.
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section border-t border-rule bg-bond">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] sm:text-5xl">
            Straight answers.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-ink/80">Payroll questions Frederick County owners ask us most.</p>
        </div>
        <div className="lg:col-span-8">
          <ul className="border-t border-rule">
            {faqs.map((f) => (
              <li key={f.q} className="border-b border-rule">
                <details className="group">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[1.25rem] font-medium leading-snug text-ink [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-[1.25rem] font-medium">{f.q}</h3>
                    <ChevronDown
                      className="size-5 shrink-0 text-vault transition-transform duration-200 group-open:rotate-180"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-2xl pb-6 pr-10 text-[1.0625rem] leading-relaxed text-ink/80">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
