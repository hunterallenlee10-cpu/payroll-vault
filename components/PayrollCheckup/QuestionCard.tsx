"use client";

import { answerOptions, type Answer, type CheckupItem } from "@/lib/checkup";

// A real radio group: fieldset + legend, one name per question. Arrow keys move between options natively.
export default function QuestionCard({
  item,
  index,
  value,
  onChange,
}: {
  item: CheckupItem;
  index: number;
  value?: Answer;
  onChange: (a: Answer) => void;
}) {
  const name = `checkup-${item.id}`;
  return (
    <fieldset className="rounded-[6px] border border-paper/12 bg-paper/[0.04] p-5 sm:px-6 sm:py-5">
      <legend className="sr-only">{item.question}</legend>
      <div className="flex gap-4" aria-hidden="true">
        <span className="font-display text-lg font-medium text-paper-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className="font-display text-[1.1875rem] font-medium leading-snug text-paper">{item.question}</p>
          {item.hint && <p className="mt-1.5 text-[0.9375rem] text-paper-muted">{item.hint}</p>}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1 rounded-[6px] border border-paper/15 bg-ink p-1 sm:ml-10 sm:max-w-[320px]">
        {answerOptions.map((o) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={`relative flex min-h-11 cursor-pointer items-center justify-center rounded-[4px] text-[0.9375rem] font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#8fd18f] ${
                checked ? "bg-vault text-white" : "text-paper/85 hover:bg-paper/[0.07]"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
