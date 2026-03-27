import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, useNavigate } from "react-router-dom";

import { SlUser } from "react-icons/sl";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";

type User = {
  name: string;
  email: string;
  role: "admin" | "user";
};

const ActionButton = () => {
  const navigate = useNavigate();

  const isAuthenticated = true;
  const user: User | null = {
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  };

  const isAdmin = user?.role === "admin";

  const handleProfileClick = () => {
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {/* Not logged in */}
      {!isAuthenticated && (
        <Button className="bg-[#FF8D28] text-white hover:bg-[#FF8D28]/90 w-30 text-xl">
          <Link to="/login">Login</Link>
        </Button>
      )}

      {/* Logged in */}
      {isAuthenticated && user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative cursor-pointer">
              <SlUser className="h-8 w-8 text-[#FF8D28]" />

              {isAdmin && (
                <RiVipCrownLine className="absolute -top-2 -right-2 size-3.5 text-yellow-400" />
              )}
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-52 bg-zinc-900 border-zinc-800">
            <DropdownMenuLabel className="px-3 py-2 border-b border-zinc-800">
              <p className="text-white text-sm font-medium truncate">
                {user.name}
              </p>
              <p className="text-zinc-500 text-xs truncate">{user.email}</p>

              {isAdmin && (
                <span className="text-xs text-yellow-400 font-medium">
                  ⚡ Admin
                </span>
              )}
            </DropdownMenuLabel>

            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer text-zinc-300 hover:text-white focus:text-white focus:bg-zinc-800 rounded-lg"
                onClick={handleProfileClick}
              >
                {isAdmin ? (
                  <>
                    <MdAdminPanelSettings className="size-5 text-[#FF8D28]" />
                    Admin Panel
                  </>
                ) : (
                  <>
                    <CgProfile className="size-5" />
                    Profile
                  </>
                )}
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-zinc-300 hover:text-white focus:text-white focus:bg-zinc-800 rounded-lg">
                <RiVipCrownLine className="size-5 text-yellow-400" />
                Subscription
              </DropdownMenuItem>

              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer text-zinc-300 hover:text-white focus:text-white focus:bg-zinc-800 rounded-lg"
                onClick={() => navigate("/settings")}
              >
                <IoSettings className="size-5" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-zinc-800" />

            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer text-red-400 hover:text-red-300 focus:text-red-300 focus:bg-red-950/30 rounded-lg"
                onClick={handleLogout}
              >
                <TbLogout className="size-5" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ActionButton;