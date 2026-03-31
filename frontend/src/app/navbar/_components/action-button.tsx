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
import { useEffect, useState } from "react";

import { SlUser } from "react-icons/sl";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";

import axios from "axios";

type User = {
  name: string;
  email: string;
  role: "admin" | "user" | "student" | "professional";
  id?: string;
  _id?: string;
};

const ActionButton = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (response.data.user) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        } else {
          // Token might be invalid
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

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

    setIsAuthenticated(false);
    setUser(null);

    navigate("/");
  };

  return (
    <div>
      {/* Not logged in */}
      {!isAuthenticated && (
        <Button
          asChild
          size="lg"
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-12 px-6">
          <Link to="/login">Login</Link>
        </Button>
      )}
      {/* Logged in */}
      {isAuthenticated && user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative cursor-pointer">
              <SlUser className="h-8 w-8 text-[#3B82F6]" />
              {isAdmin && (
                <RiVipCrownLine className="absolute -top-2 -right-2 size-3.5 text-[#3B82F6]" />
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
                <span className="text-xs text-[#3B82F6] font-medium">
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
                    <MdAdminPanelSettings className="size-5 text-[#3B82F6]" />
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
                <RiVipCrownLine className="size-5 text-[#3B82F6]" />
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