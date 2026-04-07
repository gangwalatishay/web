export default function CollaborationForm() {
  return (
    <section className="py-20 px-6">

      {/* COLLAB MODELS */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Collaboration Models
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "School Integration",
            desc: "Part of curriculum with scheduled sessions"
          },
          {
            title: "After School",
            desc: "Flexible batches for students"
          },
          {
            title: "Workshops",
            desc: "Short-term bootcamps"
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#18181B] p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-linear-to-r from-blue-900 to-black py-16 rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Future Innovators
        </h2>

        <p className="text-gray-300 mb-6">
          Partner with AlgoAscend to bring AI education to your institution.
        </p>

        <button className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700">
          Contact Us
        </button>
      </div>

    </section>
  );
}