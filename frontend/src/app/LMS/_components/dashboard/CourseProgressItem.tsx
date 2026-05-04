import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityData = {
  [key: string]: number; // YYYY-MM-DD => activity count
};

export default function CourseProgressItem() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [activityData, setActivityData] = useState<ActivityData>({});

  useEffect(() => {
    const storedData: ActivityData = JSON.parse(
      localStorage.getItem("dailyActivityData") || "{}"
    );

    const todayKey = today.toISOString().split("T")[0];

    // Example functional increment:
    // Every visit increases today's count by 1
    storedData[todayKey] = (storedData[todayKey] || 0) + 1;

    localStorage.setItem("dailyActivityData", JSON.stringify(storedData));
    setActivityData(storedData);
  }, []);

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0).getDate();

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1; // Monday start

    const calendar = [];

    // Empty slots before month starts
    for (let i = 0; i < startDay; i++) {
      calendar.push({ num: null, shade: 0 });
    }

    // Actual month days
    for (let day = 1; day <= lastDate; day++) {
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

      const count = activityData[key] || 0;

      let shade = 0;
      if (count > 0 && count <= 2) shade = 1;
      else if (count > 2 && count <= 5) shade = 2;
      else if (count > 5 && count <= 8) shade = 3;
      else if (count > 8) shade = 4;

      calendar.push({
        num: day,
        shade,
      });
    }

    return calendar;
  };

  const dates = generateCalendar();

  const getShadeColor = (shade: number) => {
    switch (shade) {
      case 1:
        return "bg-green-900 text-green-300";
      case 2:
        return "bg-green-700 text-white";
      case 3:
        return "bg-green-600 text-white";
      case 4:
        return "bg-green-500 text-white";
      default:
        return "bg-[#1c1e29] text-gray-400";
    }
  };

  const changeMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl overflow-hidden">
      <CardHeader className="pb-4 pt-5 px-5 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-bold flex items-center gap-1.5 text-white">
          <span>🔥</span> Daily Streak
        </CardTitle>

        <div className="flex items-center space-x-3 text-sm text-gray-300 font-medium bg-[#161822] px-3 py-1.5 rounded-lg border border-[#1e2235]">
          <button
            className="hover:text-white"
            onClick={() => changeMonth("prev")}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span>{monthYear}</span>

          <button
            className="hover:text-white"
            onClick={() => changeMonth("next")}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-5">
        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3">
          {days.map((d) => (
            <div key={d} className="text-gray-400 font-medium">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-2">
          {dates.map((d, i) => (
            <div
              key={i}
              className={`h-7 w-8 rounded-md flex items-center justify-center text-xs font-semibold mx-auto ${d.num === null
                ? "bg-[#1c1e29] opacity-50"
                : getShadeColor(d.shade)
                }`}
            >
              {d.num}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-1.5 text-[10px] text-gray-500 font-medium flex-wrap">
          <div className="px-1.5 py-0.5 rounded-sm bg-[#1c1e29]">
            0%
          </div>
          <div className="px-1.5 py-0.5 rounded-sm bg-green-900 text-green-300">
            1-20%
          </div>
          <div className="px-1.5 py-0.5 rounded-sm bg-green-700 text-white">
            20-50%
          </div>
          <div className="px-1.5 py-0.5 rounded-sm bg-green-600 text-white">
            50-70%
          </div>
          <div className="px-1.5 py-0.5 rounded-sm bg-green-500 text-white">
            70-100%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}