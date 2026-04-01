export default function ProgramOverview() {
  return (
    <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-8">

      {/* GENAI */}
      <div className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-semibold mb-3">GenAI Programme</h2>

        <div className="aspect-video bg-black rounded-lg mb-3">
          {/* Replace with iframe */}
        </div>

        <p className="text-gray-400 text-sm">
          Learn AI tools, prompt engineering, and real-world applications.
        </p>
      </div>

      {/* PYTHON */}
      <div className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-semibold mb-3">Python Innovation</h2>

        <div className="aspect-video bg-black rounded-lg mb-3">
          {/* Replace with iframe */}
        </div>

        <p className="text-gray-400 text-sm">
          Build strong programming and logical thinking skills using Python.
        </p>
      </div>

    </section>
  );
}