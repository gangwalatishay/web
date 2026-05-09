import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileEdit,
  PieChart,
  Award,
  FileText,
  Briefcase,
} from "lucide-react";

import { Logo } from "@/components/logo";

type User = {
  name: string;
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<User | null>(null);

  // ✅ Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err) {
        console.error("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  // ✅ Sidebar items with routes
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/lms" },
    { label: "Courses", icon: BookOpen, path: "/courses" },
    { label: "Live Classes", icon: Video, path: "/lms/liveClasses", badge: true },
    { label: "Assignments", icon: FileEdit, path: "/lms/assignments" },
    { label: "Progress", icon: PieChart, path: "/lms/progress" },
    { label: "Certificates", icon: Award, path: "/lms/certificates" },
    { label: "Resume", icon: FileText, path: "/lms/resume" },
    { label: "Placement", icon: Briefcase, path: "/lms/placement", highlight: true },
  ];

  // ✅ Profile click
  const handleProfileClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <aside className="w-64 h-screen bg-[#12141a] text-gray-400 flex flex-col fixed left-0 top-0 border-r border-gray-800">

      {/* Logo */}
      <div className="flex items-center ml-6 w-full">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path === "/lms" && location.pathname === "/lms");

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600/10 text-blue-500"
                  : item.highlight
                  ? "text-pink-500 hover:bg-gray-800/50"
                  : "hover:bg-gray-800/50 hover:text-gray-200"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}

              {item.badge && (
                <span className="ml-auto w-2 h-2 rounded-full bg-red-500"></span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Profile */}
      <div
        className="p-4 border-t border-gray-800 hover:cursor-pointer"
        onClick={handleProfileClick}
      >
        <div className="flex items-center bg-blue-600/20 text-blue-500 p-3 rounded-xl">

          {/* Initials */}
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {user?.name
              ? user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
              : "U"}
          </div>

          {/* Name */}
          <span className="ml-3 font-medium text-sm">
            {user?.name || "Guest User"}
          </span>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;