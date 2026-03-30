import { useState } from "react";
import CourseCard from "./_components/course-card";
import ProfileLayout from "./_components/profile-layout";
import StatsCard from "./_components/stats-card";

import "../../styles/profile.css";

interface ProfileData {
  role: "student" | "professional" | "";
  institution: string;
  batchYear: string;
  companyName: string;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    role: "",
    institution: "",
    batchYear: "",
    companyName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Profile Data:", profileData);

    // 👉 Later connect to backend API
    // axios.post('/api/profile/update', profileData)
  };

  return (
    <ProfileLayout>
      <div className="w-full mx-auto">

        <h1 className="text-3xl font-semibold text-white mb-10">
          My Profile
        </h1>

        {/* ✅ PROFILE COMPLETION SECTION */}
        <div className="bg-[#1a1a2e] p-6 rounded-2xl mb-12 border border-gray-800">

          <h2 className="text-xl font-semibold text-white mb-6">
            Complete Your Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Role */}
            <select
              name="role"
              value={profileData.role}
              onChange={handleChange}
              className="input-dark"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
            </select>

            {/* Institution */}
            {profileData.role === "student" && (
              <input
                name="institution"
                value={profileData.institution}
                onChange={handleChange}
                placeholder="Institution Name"
                className="input-dark"
              />
            )}

            {/* Batch Year */}
            {profileData.role === "student" && (
              <input
                name="batchYear"
                value={profileData.batchYear}
                onChange={handleChange}
                placeholder="Batch Year"
                className="input-dark"
              />
            )}

            {/* Company */}
            {profileData.role === "professional" && (
              <input
                name="companyName"
                value={profileData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="input-dark"
              />
            )}

          </div>

          <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Save Profile
          </button>

        </div>

        {/* ✅ STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

          <StatsCard title="Courses Enrolled" value="12" />
          <StatsCard title="Courses Completed" value="5" />
          <StatsCard title="Certificates" value="3" />
          <StatsCard title="Learning Hours" value="48h" />

        </div>

        {/* ✅ CONTINUE LEARNING */}
        <h2 className="text-xl font-semibold text-white mb-6">
          Continue Learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <CourseCard title="React Mastery" progress={70} />
          <CourseCard title="Machine Learning Basics" progress={45} />
          <CourseCard title="Next.js Course" progress={90} />

        </div>

      </div>
    </ProfileLayout>
  );
}