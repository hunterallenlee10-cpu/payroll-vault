// A designed pay statement. No figures: neutral dash bars stand in for amounts.

const rows: { label: string; strong?: boolean; width: string }[] = [
  { label: "Gross pay", width: "w-20" },
  { label: "Federal withholding", width: "w-14" },
  { label: "Maryland withholding", width: "w-12" },
  { label: "Frederick County local tax", width: "w-10" },
];

export default function PayStub() {
  return (
    <figure
      className="vault-animate card relative overflow-hidden px-6 pb-6 pt-5 sm:px-7"
      aria-label="Illustration of a Payroll Vault Frederick pay statement stamped Paid on time"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/80 pb-3">
        <p className="text-[0.75rem] font-semibold uppercase leading-relaxed tracking-[0.12em] text-ink lg:pr-28">
          Payroll Vault Frederick <span aria-hidden="true">·</span> Pay statement
        </p>
      </div>

      <dl className="mt-4 text-[0.9375rem]">
        <div className="flex items-center justify-between border-b border-dashed border-rule py-2.5">
          <dt className="text-muted">Pay date</dt>
          <dd className="font-semibold text-ink">Friday</dd>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 border-b border-dashed border-rule py-2.5">
            <dt className="text-ink/85">{r.label}</dt>
            <dd className="flex items-center">
              <span className="sr-only">Amount on your statement</span>
              <span aria-hidden="true" className={`block h-[7px] ${r.width} rounded-full bg-rule`} />
            </dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 pt-3.5">
          <dt className="font-display text-lg font-semibold text-ink">Net pay</dt>
          <dd className="flex items-center">
            <span className="sr-only">Amount on your statement</span>
            <span aria-hidden="true" className="block h-[9px] w-24 rounded-full bg-ink/15" />
          </dd>
        </div>
      </dl>

      <div className="relative mt-6 flex h-[84px] items-end justify-between border-t border-rule pt-3">
        <div>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-muted">Direct deposit</p>
          <div className="mt-2 space-y-1.5" aria-hidden="true">
            <span className="block h-[5px] w-28 rounded-full bg-rule" />
            <span className="block h-[5px] w-20 rounded-full bg-rule" />
          </div>
        </div>
        {/* Stamp area */}
        <div className="vault-stamp-wrap absolute bottom-2 right-0 flex h-[76px] w-[176px] items-center justify-center">
          <span
            className="vault-stamp inline-flex flex-col items-center rounded-[5px] border-[2.5px] border-vault px-3 py-1.5 text-vault"
            style={{ boxShadow: "inset 0 0 0 2px #fff, inset 0 0 0 3.5px #2F7A35" }}
          >
            <span className="font-display text-[1.375rem] font-semibold leading-none tracking-[0.08em]">PAID</span>
            <span className="mt-1 text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.2em]">On time</span>
          </span>
        </div>
      </div>
    </figure>
  );
}
