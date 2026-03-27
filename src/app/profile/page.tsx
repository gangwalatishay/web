import CourseCard from "./_components/course-card";
import ProfileLayout from "./_components/profile-layout";
import StatsCard from "./_components/stats-card";


export default function ProfilePage() {
  return (
    <ProfileLayout>

      <div className="w-full mx-auto">

        <h1 className="text-3xl font-semibold text-white mb-10">
          My Profile
        </h1>

        {/* Stats Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

          <StatsCard title="Courses Enrolled" value="12" />
          <StatsCard title="Courses Completed" value="5" />
          <StatsCard title="Certificates" value="3" />
          <StatsCard title="Learning Hours" value="48h" />

        </div>

        {/* Continue Learning */}

        <h2 className="text-xl font-semibold text-white mb-6">
          Continue Learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <CourseCard
            title="React Mastery"
            progress={70}
          />

          <CourseCard
            title="Machine Learning Basics"
            progress={45}
          />

          <CourseCard
            title="Next.js Course"
            progress={90}
          />

        </div>

      </div>

    </ProfileLayout>
  );
}