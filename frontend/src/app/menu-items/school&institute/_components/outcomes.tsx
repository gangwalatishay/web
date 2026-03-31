const stats = [
  { label: "Students Trained", value: "1000+" },
  { label: "Projects Built", value: "300+" },
  { label: "Completion Rate", value: "85%" },
  { label: "Certificates Issued", value: "500+" },
];

export default function Outcomes() {
  return (
    <section className="py-20 px-6 bg-[#0c0c12]">

      <h2 className="text-3xl font-bold text-center mb-12">
        Outcomes
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">

        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#18181B] p-6 rounded-2xl border border-gray-800">
            <p className="text-3xl font-bold text-blue-500">
              {stat.value}
            </p>
            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}