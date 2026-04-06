export default function Certificates() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Certificates</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#18181B] p-5 rounded-2xl border border-gray-800">
          <h3 className="font-semibold">React Certificate</h3>
          <p className="text-sm text-gray-400">Issued by AlgoAscend</p>
        </div>

        <div className="bg-[#18181B] p-5 rounded-2xl border border-gray-800">
          <h3 className="font-semibold">Python Certificate</h3>
          <p className="text-sm text-gray-400">Issued by AlgoAscend</p>
        </div>

      </div>
    </div>
  );
}