import Hero from "./_components/hero";
import MissionVision from "./_components/mission-vision";
import WhyUs from "./_components/why-us";
import Stats from "./_components/stats";
import CTA from "./_components/cta";

export default function About() {
  return (
    <div className="w-full bg-[#0F1115] text-white">
      <Hero />
      <MissionVision />
      <WhyUs />
      <Stats />
      <CTA />
    </div>
  );
}