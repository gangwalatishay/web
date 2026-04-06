import StatsCard from "./stats-card";

export default function ProfessorDashboard() {
  return (
    <div className="space-y-10">

      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard title="Courses Created" value="6" />
        <StatsCard title="Students Enrolled" value="320" />
        <StatsCard title="Revenue" value="₹45,000" />
        <StatsCard title="Rating" value="4.8⭐" />
      </div>

      <div className="bg-[#18181B] p-6 rounded-2xl border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Your Courses</h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>• React Advanced Bootcamp</li>
          <li>• Python for Beginners</li>
          <li>• AI Fundamentals</li>
        </ul>
      </div>

    </div>
  );
}