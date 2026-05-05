import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

import { getCurrentUser } from "@/api/getUser";

// ✅ Proper Type
type User = {
  name: string;
  avatar?: string;
  progress?: number;
  weeksLeft?: number;
};

export default function WelcomeBanner() {
  const [user, setUser] = useState<User | null>(null);
  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const init = async () => {
      // 🔹 Fetch user
      const data = await getCurrentUser();
      setUser(data);

      // 🔹 Streak logic (computed first)
      const today = new Date();
      const todayString = today.toDateString();

      const lastVisit = localStorage.getItem("lastVisitDate");
      const savedStreak =
        Number(localStorage.getItem("streakCount")) || 1;

      let newStreak = 1;

      if (!lastVisit) {
        newStreak = 1;
      } else {
        const lastVisitDate = new Date(lastVisit);
        const diffTime =
          today.getTime() - lastVisitDate.getTime();
        const diffDays = Math.floor(
          diffTime / (1000 * 60 * 60 * 24)
        );

        if (diffDays === 0) {
          newStreak = savedStreak;
        } else if (diffDays === 1) {
          newStreak = savedStreak + 1;
        } else {
          newStreak = 1;
        }
      }

      // 🔹 Save + update once
      localStorage.setItem("streakCount", newStreak.toString());
      localStorage.setItem("lastVisitDate", todayString);

      setStreak(newStreak);
    };

    init();
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
              <span className="text-blue-400">
                {user?.name || "User"}
              </span>{" "}
              👋
            </h1>

            <p className="mt-2 text-gray-400">
              You're {user?.progress || 0}% through your program.{" "}
              {user?.weeksLeft || 0} more weeks to graduation!
            </p>
          </div>

          <div className="max-w-md space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Overall Progress</span>
              <span className="text-blue-400">
                {user?.progress || 0}%
              </span>
            </div>

            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${user?.progress || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>

            <Avatar className="h-24 w-24 border-2 border-blue-500/50 shadow-2xl transition-transform hover:scale-105">
              <AvatarImage
                src={
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200"
                }
              />
              <AvatarFallback>
                {user?.name?.slice(0, 2) || "U"}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>On track</span>
              <span>✔</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-300">
              <span>🔥</span>
              <span>{streak}-day streak</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}