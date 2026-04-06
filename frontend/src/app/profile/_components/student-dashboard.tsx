import StatsCard from "./stats-card";
import CourseCard from "./course-card";

export default function StudentDashboard() {
  return (
    <div className="space-y-10">

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard title="Courses Enrolled" value="12" />
        <StatsCard title="Completed" value="5" />
        <StatsCard title="Certificates" value="3" />
        <StatsCard title="Hours" value="48h" />
      </div>

      {/* CONTINUE LEARNING */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <CourseCard title="React Mastery" progress={70} />
          <CourseCard title="Machine Learning" progress={45} />
          <CourseCard title="Next.js Course" progress={90} />
        </div>
      </div>

    </div>
  );
}