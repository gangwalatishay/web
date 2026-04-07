export default function PythonSection() {
  return (
    <section className="py-20 px-6 bg-[#111827]">

      <h2 className="text-4xl font-bold mb-6 text-blue-400">
        Class 9–10: Advanced AI & Python Program
      </h2>

      <p className="text-gray-300 mb-6 max-w-4xl">
        Covers Data Science, Machine Learning, and real-world AI applications with strong coding foundation.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-gray-300">
        <p>✔ Data Structures & Python</p>
        <p>✔ Data Science & Visualization</p>
        <p>✔ Machine Learning Basics</p>
        <p>✔ 6–8 Projects + Capstone</p>
        <p>✔ Career pathway clarity</p>
      </div>

      {/* PROJECTS */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">
          Real-World Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <p>🤖 AI Chatbot</p>
          <p>🎨 AI Image Generator</p>
          <p>📊 Data Dashboard</p>
          <p>🧠 ML Prediction System</p>
          <p>🚦 AI Traffic System</p>
          <p>🌱 Plant Detection AI</p>
        </div>
      </div>

    </section>
  );
}