import { useState } from "react";
import CourseCard from "./_components/course-card";
import ProfileLayout from "./_components/profile-layout";
import StatsCard from "./_components/stats-card";

interface ProfileData {
  role: "student" | "professional";
  institution?: string;
  batchYear?: string;
  companyName?: string;
}

export default function ProfilePage() {

  const [profileData, setProfileData] = useState<ProfileData>({
    role: "student"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(profileData);
  };

  return (
    <ProfileLayout>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-white mb-10">
          My Profile
        </h1>

        {/* PROFILE CARD */}
        <div className="bg-[#18181B] p-8 rounded-3xl border border-gray-800 mb-12">

          <h2 className="text-xl font-semibold text-white mb-6">
            Complete Your Profile
          </h2>

          {/* ROLE DISPLAY */}
          <div className="mb-6 text-sm text-gray-400">
            Role: <span className="text-white font-medium">{profileData.role}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {profileData.role === "student" && (
              <>
                <input
                  name="institution"
                  placeholder="Institution Name"
                  onChange={handleChange}
                  className="input-dark"
                />

                <input
                  name="batchYear"
                  placeholder="Batch Year"
                  onChange={handleChange}
                  className="input-dark"
                />
              </>
            )}

            {profileData.role === "professional" && (
              <input
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
                className="input-dark"
              />
            )}
          </div>
          <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold"
          >
            Save Profile
          </button>
        </div>
        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <StatsCard title="Courses Enrolled" value="12" />
          <StatsCard title="Completed" value="5" />
          <StatsCard title="Certificates" value="3" />
          <StatsCard title="Hours" value="48h" />
        </div>
        {/* LEARNING */}
        <h2 className="text-xl font-semibold text-white mb-6">
          Continue Learning
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <CourseCard title="React Mastery" progress={70} />
          <CourseCard title="Machine Learning" progress={45} />
          <CourseCard title="Next.js" progress={90} />
        </div>
      </div>
    </ProfileLayout>
  );
}