import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * WelcomeBanner Component
 * Renders the top greeting section of the dashboard with user name,
 * overall progress, and functional daily streak tracking.
 */
export default function WelcomeBanner() {
  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const today = new Date();
    const todayString = today.toDateString();

    const lastVisit = localStorage.getItem("lastVisitDate");
    const savedStreak = Number(localStorage.getItem("streakCount")) || 1;

    if (!lastVisit) {
      localStorage.setItem("lastVisitDate", todayString);
      localStorage.setItem("streakCount", "1");
      setStreak(1);
      return;
    }

    const lastVisitDate = new Date(lastVisit);
    const diffTime = today.getTime() - lastVisitDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      setStreak(savedStreak);
    } else if (diffDays === 1) {
      const updatedStreak = savedStreak + 1;
      localStorage.setItem("streakCount", updatedStreak.toString());
      localStorage.setItem("lastVisitDate", todayString);
      setStreak(updatedStreak);
    } else {
      localStorage.setItem("streakCount", "1");
      localStorage.setItem("lastVisitDate", todayString);
      setStreak(1);
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#1e293b] to-[#0f172a] p-8 text-white shadow-xl"
    >
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Welcome <br /> back, <br />
              <span className="text-blue-400"> Alex Johnson</span> 👋
            </h1>
            <p className="mt-2 text-gray-400">
              You're 68% through your program. 3 more weeks to graduation!
            </p>
          </div>

          <div className="max-w-md space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Overall Progress</span>
              <span className="text-blue-400">68%</span>
            </div>
            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>
            <Avatar className="h-24 w-24 border-2 border-blue-500/50 shadow-2xl transition-transform hover:scale-105">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
                alt="User Profile"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center gap-3">
            {/* On Track Badge */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>On track</span>
              <span className="text-emerald-300">✔</span>
            </div>

            {/* Streak Badge */}
            <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-300 shadow-sm backdrop-blur-sm">
              <span>🔥</span>
              <span>{streak}-day streak</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}