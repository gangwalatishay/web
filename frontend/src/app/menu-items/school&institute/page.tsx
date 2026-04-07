import Hero from "./_components/hero";
import ProgramOverview from "./_components/ProgramOverview";
import GenAISection from "./_components/GenAISection";
import PythonSection from "./_components/PythonSection";
import CollaborationForm from "./_components/CollaborationForm";

import "../../../styles/student&instute.css";
import Navbar from "./_components/navbar";

export default function InstitutionsPage() {
  return (
    <div className="bg-[#0F1115] text-white w-full">
      <Navbar />
      <Hero />
      <ProgramOverview />
      <GenAISection />
      <PythonSection />
      <CollaborationForm />
    </div>
  );
}