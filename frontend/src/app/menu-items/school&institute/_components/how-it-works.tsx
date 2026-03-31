const steps = [
  "Onboard Institution",
  "Student Enrollment",
  "Live + Recorded Learning",
  "Project-Based Training",
  "Assessment",
  "Certification & Placement"
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[#0c0c12]">

      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {steps.map((step, index) => (
          <div key={index} className="bg-[#18181B] p-6 rounded-2xl border border-gray-800">
            <p className="text-blue-500 font-bold mb-2">
              Step {index + 1}
            </p>
            <p>{step}</p>
          </div>
        ))}

      </div>
    </section>
  );
}