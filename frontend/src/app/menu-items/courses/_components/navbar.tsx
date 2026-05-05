import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "@/components/logo";

export default function Navbar() {
  const scrolled = useScrollTop();
  const navigate = useNavigate();

  // ✅ Simple redirect logic
  const handleLMSRedirect = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/lms"); // user authenticated
    } else {
      navigate("/login"); // user not authenticated
    }
  };

  return (
    <div
      className={cn(
        "fixed w-full border-b border-gray-800 bg-[#0F1115] z-9999",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="grid grid-cols-3 pl-10">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link to="/institutions">Schools & Institutions</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Add submenu items here if needed */}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white w-20">
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link to="/gallery">Gallery</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* LMS Button */}
        <Button
          variant="ghost"
          size="lg"
          onClick={handleLMSRedirect}
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-12 px-6"
        >
          LMS
        </Button>
      </div>
    </div>
  );
}