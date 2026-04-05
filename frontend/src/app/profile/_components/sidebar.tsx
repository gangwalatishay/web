import {
  User,
  BookOpen,
  Settings,
  GraduationCap
} from "lucide-react";

export default function ProfileSidebar({
  role,
  activeTab,
  setActiveTab
}: {
  role: "student" | "professor";
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <aside className="w-72 bg-[#0B0D12] border-r border-gray-800 p-6 flex flex-col">

      {/* LOGO */}
      <h2 className="text-xl font-bold mb-10">
        <span className="text-blue-500">ALGO</span>ASCEND
      </h2>

      {/* NAV */}
      <nav className="flex flex-col gap-3 text-sm">

        {/* DASHBOARD */}
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            activeTab === "dashboard"
              ? "bg-blue-600/20 text-blue-400"
              : "hover:bg-[#1a1a2e]"
          }`}
        >
          <User size={18} />
          Dashboard
        </button>

        {/* STUDENT ONLY */}
        {role === "student" && (
          <>
            <button
              onClick={() => setActiveTab("courses")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                activeTab === "courses"
                  ? "bg-blue-600/20 text-blue-400"
                  : "hover:bg-[#1a1a2e]"
              }`}
            >
              <BookOpen size={18} />
              My Courses
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                activeTab === "certificates"
                  ? "bg-blue-600/20 text-blue-400"
                  : "hover:bg-[#1a1a2e]"
              }`}
            >
              <GraduationCap size={18} />
              Certificates
            </button>
          </>
        )}

        {/* PROFESSOR ONLY */}
        {role === "professor" && (
          <button
            onClick={() => setActiveTab("teachings")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "teachings"
                ? "bg-blue-600/20 text-blue-400"
                : "hover:bg-[#1a1a2e]"
            }`}
          >
            <BookOpen size={18} />
            My Teachings
          </button>
        )}

        {/* SETTINGS */}
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
            activeTab === "settings"
              ? "bg-blue-600/20 text-blue-400"
              : "hover:bg-[#1a1a2e]"
          }`}
        >
          <Settings size={18} />
          Settings
        </button>

      </nav>
    </aside>
  );
}