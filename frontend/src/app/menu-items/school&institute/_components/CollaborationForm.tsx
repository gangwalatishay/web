export default function CollaborationForm() {
  return (
    <section className="px-6 md:px-16 py-20">
      <div className="bg-[#1a1a2e] p-8 rounded-xl border border-gray-800 max-w-3xl mx-auto">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Collaborate with AlgoAscend
        </h2>

        <form className="grid md:grid-cols-2 gap-4">

          <input placeholder="School Name" className="input-dark" />
          <input placeholder="Contact Person" className="input-dark" />
          <input placeholder="Email" className="input-dark" />
          <input placeholder="Phone" className="input-dark" />
          <input placeholder="City" className="input-dark md:col-span-2" />

          <textarea
            placeholder="Message"
            className="input-dark md:col-span-2 h-24"
          />

          <button className="bg-blue-600 py-3 rounded-xl md:col-span-2">
            Submit Request
          </button>

        </form>
      </div>
    </section>
  );
}