export default function Hero() {
  return (
    <section className="text-center w-full py-20 px-6 bg-linear-to-r from-blue-900 to-black">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        AI & Python Bootcamp <br /> for Schools & Institutions
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
        A structured, CBSE-aligned, industry-ready program for Class 8–10 students
        to build real-world AI, Python, and problem-solving skills.
      </p>

      <div className="space-x-4">
        <button className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
          Partner With Us
        </button>

        <button className="border border-blue-400 px-6 py-3 rounded-xl hover:bg-blue-900">
          Download Brochure
        </button>
      </div>
    </section>
  );
}