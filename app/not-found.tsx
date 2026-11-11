import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import VaultDial from "@/components/VaultDial";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Payroll Vault Frederick" },
  robots: { index: false, follow: true },
};

// Next.js serves this with a real 404 status.
export default function NotFound() {
  return (
    <>
      <main id="main" tabIndex={-1} className="ledger flex min-h-[70vh] items-center outline-none">
        <div className="wrap flex flex-col items-start gap-6 py-24">
          <VaultDial idPrefix="vd-404" className="size-20" />
          <p className="eyebrow">Error 404</p>
          <h1 className="text-[2.5rem] font-semibold leading-[1.05] sm:text-6xl">This page isn&rsquo;t in the vault.</h1>
          <p className="max-w-lg text-[1.0625rem] text-ink/80">The link may be old or mistyped. Everything about payroll in Frederick County starts on the home page.</p>
          <Link href="/" className="btn btn-primary">
            Go to the Payroll Vault Frederick home page
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
