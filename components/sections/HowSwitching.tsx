import { switchSteps } from "@/lib/business";

// Three numbered nodes on a horizontal ledger line. DRAFT: confirm process steps.
export default function HowSwitching() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section border-t border-rule bg-bond">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">How switching works</p>
          <h2 id="how-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] sm:text-5xl">
            Switching takes three steps.
          </h2>
        </div>
        <div className="relative mt-14">
          {/* the ledger line */}
          <span aria-hidden="true" className="absolute bottom-7 left-[27px] top-7 w-px bg-rule md:bottom-auto md:left-7 md:right-[calc((100%-64px)/3-28px)] md:top-[27px] md:h-px md:w-auto" />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {switchSteps.map((s) => (
            <li key={s.n} className="relative flex gap-5 md:block">
              <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-vault bg-bond font-display text-[1.375rem] font-semibold text-vault tabular-nums">
                {s.n}
              </span>
              <div className="md:mt-7 md:pr-6">
                <h3 className="text-[1.5rem] font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink/80">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
