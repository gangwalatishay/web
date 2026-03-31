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

import ActionButton from "./_components/action-button";
import { Link } from "react-router-dom";
import { Logo } from "@/components/logo";

export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed w-full border-b border-gray-800 bg-[#0F1115] z-9999",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex flex-row items-center justify-between pl-20">
        
        {/* Logo */}
        <Logo />
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            
            {/* Courses */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#0F1115] border-gray-800 text-white">
                <div>
                  <ul className="grid w-50 gap-0.5 md:w-125 md:grid-row-4 lg:w-100 h-40">
                    
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Foundations Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Software Engineering Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Data & Analytics Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <p className="text-gray-400 text-sm font-light">
                        For other courses&nbsp;
                        <Link
                          to="/courses"
                          className="underline text-gray-400 text-sm font-light"
                        >
                          visit course page
                        </Link>
                      </p>
                    </div>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Schools */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Schools & Institutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#0F1115] border-gray-800 text-white">
                <div>
                  <ul className="grid w-50 gap-0.5 md:w-125 md:grid-row-4 lg:w-100 h-40">
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Foundations Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Software Engineering Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <a>Data & Analytics Track</a>
                    </div>
                    <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                      <p className="text-gray-400 text-sm font-light">
                        For other courses&nbsp;
                        <Link
                          to="/institutions"
                          className="underline text-gray-400 text-sm font-light"
                        >
                          visit institutions page
                        </Link>
                      </p>
                    </div>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Students
            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent />
            </NavigationMenuItem> */}
            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white w-20">
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Gallery */}
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-[#1A1D23] hover:text-white">
                <Link to="/gallery">Gallery</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right Side Actions */}
        <ActionButton />
      </div>
    </div>
  );
}