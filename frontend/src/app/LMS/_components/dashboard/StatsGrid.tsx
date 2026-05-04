import StatCard from "./StatCard";

export default function StatsGrid() {
  const stats = [
    {
      title: "Courses Enrolled",
      value: "7",
      subtitle: "3 In Progress →",
      icon: "📚",
      badgeContent: "+2 this month",
    },
    {
      title: "Total Hours Learned",
      value: "128hrs",
      subtitle: "12 hours this week",
      icon: "⏱️",
    },
    {
      title: "Assignments Done",
      value: "24/30",
      subtitle: "6 Pending 🔴",
      icon: "📝",
      badgeContent: "Due Apr 10",
    },
    {
      title: "Certificates Earned",
      value: "4",
      subtitle: "2 in progress →",
      icon: "🏆",
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          {...stat} 
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
