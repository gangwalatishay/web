export default function Benefits() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        Benefits
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Students */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">For Students</h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Industry-ready skills</li>
            <li>• Real projects</li>
            <li>• Portfolio building</li>
            <li>• Placement support</li>
          </ul>
        </div>

        {/* Institutions */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">For Institutions</h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Better placement stats</li>
            <li>• Industry collaboration</li>
            <li>• Branding boost</li>
            <li>• Academic value add</li>
          </ul>
        </div>

        {/* Faculty */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">For Faculty</h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Upskilling</li>
            <li>• Teaching support</li>
            <li>• Modern curriculum</li>
          </ul>
        </div>

      </div>
    </section>
  );
}