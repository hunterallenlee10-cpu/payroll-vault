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

export default function Home() {
  return (
    <>
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
