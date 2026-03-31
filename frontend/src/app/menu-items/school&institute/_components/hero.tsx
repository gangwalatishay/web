export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Transform Your Institution into a <br />
        <span className="text-blue-500">Tech-First Learning Hub</span>
      </h1>

      <p className="text-gray-400 mt-6 max-w-2xl">
        Industry-ready programs designed to bridge the gap between academics and real-world skills.
      </p>

      {/* VIDEO */}
      <div className="mt-10 w-full max-w-4xl">
        <video
          autoPlay
          muted
          loop
          className="rounded-3xl shadow-xl border border-gray-800"
        >
          <source src="/videos/institutions.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Partner With Us
        </button>
        <button className="border border-gray-600 px-6 py-3 rounded-xl">
          Book Demo
        </button>
      </div>
    </section>
  );
}