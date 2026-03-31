import Hero from "./_components/hero";
import WhatIs from "./_components/what-is";
import HowItWorks from "./_components/how-it-works";
import Benefits from "./_components/benefits";
import Outcomes from "./_components/outcomes";
import CTA from "./_components/cta";

import "../../../styles/student&instute.css";

export default function InstitutionsPage() {
  return (
    <div className="bg-[#0F1115] text-white">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Benefits />
      <Outcomes />
      <CTA />
    </div>
  );
}