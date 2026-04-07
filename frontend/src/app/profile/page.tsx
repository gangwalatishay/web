import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileSidebar from "./_components/sidebar";
import ProfileHeader from "./_components/profile-header";
import StudentDashboard from "./_components/student-dashboard";
import ProfessorDashboard from "./_components/professor-dashboard";
import ProfileSettings from "./_components/profile-settings";

import type { User } from "./_components/types/user";

export default function ProfilePage() {

  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get(
          "http://127.0.0.1:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setUser(res.data.user);

      } catch (err) {
        console.error("Fetch user error:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // ✅ Loading state
  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen w-full bg-[#0F1115] text-white">

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