import { sampleReviews } from "@/lib/business";
import { isLive } from "@/lib/site";

// Sample reviews, visibly labelled. No stars, no counts, no review schema.
export default function Reviews() {
  // Never publish made-up testimonials: in live mode the section only renders once real reviews replace the samples.
  const reviews = isLive ? sampleReviews.filter((r) => !r.sample) : sampleReviews;
  if (!reviews.length) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">From Frederick business owners</p>
          <h2 id="reviews-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] sm:text-5xl">
            What local owners say.
          </h2>
        </div>
      </div>
      <div className="mt-12">
        <ul
          className="swipe-row wrap flex scroll-px-5 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:gap-6"
          aria-label="Sample reviews"
        >
          {reviews.map((r) => (
            <li key={r.who} className="card flex w-[85%] shrink-0 snap-start flex-col p-7 md:w-auto lg:p-8">
              {r.sample && (
                <span className="self-start rounded-full bg-paper px-3 py-1 text-[0.75rem] font-semibold text-muted">
                  Sample review: replace with real Google reviews
                </span>
              )}
              <blockquote className="mt-6 flex-1">
                <p className="font-display text-[1.25rem] font-medium leading-snug text-ink">{r.text}</p>
              </blockquote>
              <p className="mt-6 border-t border-rule pt-4 text-[0.9375rem] text-muted">{r.who}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
