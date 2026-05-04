import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DeadlineList() {
  const deadlines = [
    { title: "React Final Project", date: "Apr 10 · 2 days left", color: "bg-[#ff6b6b]", tag: "HOT" },
    { title: "ML Model Submission", date: "Apr 12 · 4 days left", color: "bg-[#ffa94d]" },
    { title: "AWS Quiz #3", date: "Apr 15 · 7 days left", color: "bg-[#ffd43b]" },
    { title: "UI/UX Case Study", date: "Apr 18 · 10 days left", color: "bg-[#20c997]" }
  ];

  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl overflow-hidden">
      <CardHeader className="pb-4 pt-5 px-6 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold flex items-center gap-2 text-white">
          <span>⏰</span> Deadlines
        </CardTitle>
        <span className="text-xs font-bold text-[#ff6b6b] bg-[#ff6b6b]/15 px-3 py-1 rounded-full">
          5 Due
        </span>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-6">
        {deadlines.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start">
            <div className="flex gap-4">
              <span className={`block w-2.5 h-2.5 rounded-full mt-1.5 ${item.color}`}></span>
              <div>
                <h4 className="text-sm font-medium text-gray-100">{item.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </div>
            {item.tag && (
              <span className="text-[10px] font-bold text-[#ff6b6b] bg-[#ff6b6b]/15 px-2.5 py-0.5 rounded-sm">
                {item.tag}
              </span>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
