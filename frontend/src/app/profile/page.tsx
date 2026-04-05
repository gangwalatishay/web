import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "./_components/profile-header";
import StudentDashboard from "./_components/student-dashboard";
import ProfessorDashboard from "./_components/professor-dashboard";
import ProfileSettings from "./_components/profile-settings";
import ProfileSidebar from "./_components/sidebar";

export default function ProfilePage() {

  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-[#0F1115] text-white">

      {/* ✅ PROFILE SIDEBAR */}
      <ProfileSidebar
        role={user.role}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">

        <div className="max-w-6xl mx-auto space-y-10">

          <ProfileHeader user={user} />

          {/* 🔄 TAB SWITCHING */}
          {activeTab === "dashboard" && (
            user.role === "student"
              ? <StudentDashboard />
              : <ProfessorDashboard />
          )}

          {activeTab === "courses" && <div>Courses UI here</div>}

          {activeTab === "certificates" && <div>Certificates UI here</div>}

          {activeTab === "teachings" && <div>Teachings UI here</div>}

          {activeTab === "settings" && (
            <ProfileSettings role={user.role} />
          )}

        </div>

      </main>
    </div>
  );
}