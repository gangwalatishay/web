import type { User } from "./types/user";

export default function ProfileHeader({ user }: { user: User }) {
  return (
    <div className="bg-[#18181B] border border-gray-800 rounded-3xl p-6 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center text-xl font-bold">
          {user.name?.charAt(0) || "U"}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>

      <div className="text-sm text-muted-foreground capitalize">
        Role: <span className="text-white bg-[#3B82F6] p-2 rounded-lg">{user.role}</span>
      </div>
    </div>
  );
}