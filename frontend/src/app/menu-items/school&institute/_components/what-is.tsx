export default function WhatIs() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-3xl font-bold mb-6">
        What is AlgoAscend Program?
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto">
        AlgoAscend is a structured, industry-aligned learning program that equips students with real-world skills through live sessions, hands-on projects, and expert mentorship.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12">

        {["Live Classes", "Projects", "Mentorship", "Certification"].map((item) => (
          <div key={item} className="bg-[#18181B] p-6 rounded-2xl border border-gray-800">
            <p className="font-semibold">{item}</p>
          </div>
        ))}

      </div>
    </section>
  );
}