import PayrollCheckup from "../PayrollCheckup/PayrollCheckup";

// The one "inside the vault" moment: the ink band.
export default function Checkup() {
  return (
    <section id="checkup" aria-labelledby="checkup-title" className="on-ink ledger ledger-ink section bg-ink text-paper">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow !text-paper-muted">The Frederick County Payroll Checkup</p>
          <h2 id="checkup-title" className="mt-3 text-[2.25rem] font-semibold leading-[1.1] text-paper sm:text-5xl">
            How healthy is your payroll?
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-paper-muted lg:text-lg">
            Six questions every Frederick County employer should be able to answer. About 60 seconds.
          </p>
        </div>
        <div className="mt-10 lg:mt-14">
          <PayrollCheckup />
        </div>
      </div>
    </section>
  );
}
