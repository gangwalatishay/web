import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LiveClassList() {
  const classes = [
    { 
      title: "System Design Masterclass", 
      instructor: "Raj Kapoor", 
      time: "Today 8:00 PM", 
      initials: "RK",
      avatarColor: "bg-[#339af0]",
      active: true 
    },
    { 
      title: "React Performance Patterns", 
      instructor: "Sarah Chen", 
      time: "Apr 9, 7:00 PM", 
      initials: "SC",
      avatarColor: "bg-[#845ef7]",
      active: false 
    },
    { 
      title: "DSA Interview Bootcamp", 
      instructor: "Amit Sharma", 
      time: "Apr 10, 6:00 PM", 
      initials: "AS",
      avatarColor: "bg-[#d9480f]",
      active: false 
    }
  ];

  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl overflow-hidden">
      <CardHeader className="pb-4 pt-5 px-5 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold flex items-center gap-2 text-white">
          <span className="w-3.5 h-3.5 rounded-full bg-red-600 block shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span> Live Classes
        </CardTitle>
        <span className="flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
          <span className="w-2 h-2 rounded-full bg-red-500"></span> LIVE
        </span>
      </CardHeader>
      <CardContent className="px-3 pb-4 space-y-3">
        {classes.map((cls, idx) => (
          <div 
            key={idx} 
            className={`flex items-center justify-between p-3.5 rounded-xl transition-colors ${
              cls.active ? "bg-[#1e233b]/80 border border-[#2b3a61]" : "bg-[#181a25]/80 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white ${cls.avatarColor}`}>
                {cls.initials}
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-white leading-tight">{cls.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{cls.instructor} · {cls.time}</p>
              </div>
            </div>
            
            {cls.active ? (
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                Join Now
              </button>
            ) : (
              <button className="bg-transparent border border-[#3b3e4a] text-[#8e919e] hover:text-white hover:border-gray-500 text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                Register
              </button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
