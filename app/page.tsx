import Hero from "@/components/sections/Hero";
import WhySwitch from "@/components/sections/WhySwitch";
import Checkup from "@/components/sections/Checkup";
import Services from "@/components/sections/Services";
import Retirement from "@/components/sections/Retirement";
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
      </main>
      <Footer />
    </>
  );
}
