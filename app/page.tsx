import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqSchema, localBusinessSchema, serviceSchemas, websiteSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import WhySwitch from "@/components/sections/WhySwitch";
import Checkup from "@/components/sections/Checkup";
import Services from "@/components/sections/Services";
import Retirement from "@/components/sections/Retirement";
import MeetMike from "@/components/sections/MeetMike";
import HowSwitching from "@/components/sections/HowSwitching";
import Accountants from "@/components/sections/Accountants";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

const title = "Payroll Services in Frederick, MD | Payroll Vault Frederick";
const description =
  "Locally owned payroll, payroll tax and HR services for small businesses in Frederick, MD. No contracts, and a real person answers. Get your payroll quote.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema(), ...serviceSchemas()]} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <WhySwitch />
        <Checkup />
        <Services />
        <Retirement />
        <MeetMike />
        <HowSwitching />
        <Accountants />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
