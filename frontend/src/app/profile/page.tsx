import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileSidebar from "./_components/sidebar";
import ProfileHeader from "./_components/profile-header";
import StudentDashboard from "./_components/student-dashboard";
import ProfessorDashboard from "./_components/professor-dashboard";
import ProfileSettings from "./_components/profile-settings";

import type { User } from "./_components/types/user";

export default function ProfilePage() {

  const navigate = useNavigate();

  // ✅ Lazy initialization (no useEffect needed)
  const [user] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");

      if (!storedUser) {
        navigate("/login");
        return null;
      }

      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState("dashboard");

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-[#0F1115] text-white">

      <ProfileSidebar
        role={user.role}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-10">

          <ProfileHeader user={user} />

          {activeTab === "dashboard" && (
            user.role === "student"
              ? <StudentDashboard />
              : <ProfessorDashboard />
          )}

          {activeTab === "settings" && (
            <ProfileSettings role={user.role} />
          )}

        </div>
      </main>
    </div>
  );
}