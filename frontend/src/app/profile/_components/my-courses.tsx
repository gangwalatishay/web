import CourseCard from "./course-card";

export default function MyCourses() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <CourseCard title="React Mastery" progress={70} />
        <CourseCard title="Node.js API" progress={50} />
        <CourseCard title="MongoDB Basics" progress={30} />
      </div>
    </div>
  );
}