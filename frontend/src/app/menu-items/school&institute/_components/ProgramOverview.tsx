export default function ProgramOverview() {
  return (
    <section className="py-20 px-6">

      {/* VIDEO */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">Program Introduction</h2>

        <div className="flex justify-center">
          <iframe
            className="w-full md:w-2/3 h-64 md:h-96 rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* CURRICULUM */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Curriculum Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "AI Foundations & Ethics",
          "Python Programming",
          "Prompt Engineering",
          "AI Tools (ChatGPT, Canva)",
          "Machine Learning Basics",
          "Capstone Projects"
        ].map((item, i) => (
          <div key={i} className="p-6 bg-[#18181B] rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}