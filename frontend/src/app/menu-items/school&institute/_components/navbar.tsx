import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-[#0F1115]/80 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between">

      {/* LEFT: BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* CENTER: LOGO / TITLE */}
      <h1 className="text-lg font-semibold text-white">
        AlgoAscend
      </h1>

      {/* RIGHT: EMPTY / FUTURE ACTIONS */}
      <div className="w-16" />
    </nav>
  );
}