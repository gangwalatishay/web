import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";

export default function Navbar() {
  const scrolled = useScrollTop();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/lms');
    }
  };

  return (
    <div className={cn(
      "fixed w-full border-b border-gray-800 bg-[#0F1115] z-9999",
      scrolled && "border-b shadow-sm"
    )}>
      <div className="grid grid-cols-3 pl-10">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link
                  to="/"
                >
                  Home
                </Link>
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
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white w-20">
                <Link
                  to="/about"
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link
                  to="/gallery"
                >
                  Gallery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="ghost"
          size="lg"
          onClick={handleAuth}
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-12 px-6">
          LMS
        </Button>
      </div>
    </div>
  )
}
