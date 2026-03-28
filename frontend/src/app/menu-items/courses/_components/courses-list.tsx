import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { courseGroups } from "./data/course-data";

export default function CoursesList() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="mt-20 md:mt-30 w-full flex flex-col items-center coursespage gap-16 md:gap-32 px-4 md:px-8 lg:px-12">
      
      {courseGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          id={group.slug}
          className="w-full scroll-mt-24 md:scroll-mt-32"
        >

          {/* GROUP TITLE */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-10 text-start text-muted-foreground">
            {group.groupName}
          </h2>

          {/* GROUP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            
            {group.courses.map((course) => (
              <div
                className="card cursor-pointer"
                key={course.id}
                onClick={() => navigate(`/course/${course.id}`)}
              >
                {/* IMAGE */}
                <div
                  className="imgBx"
                  style={{ backgroundImage: `url(${course.image})` }}
                >
                </div>
                {/* CONTENT */}
                <div className="content">
                  {/* PRICE */}
                  <span className="price">
                    <a href="#">{course.price}</a>
                  </span>
                  {/* FEATURES */}
                  <ul>
                    {course.features.map((item, index) => (
                      <li key={index} className="text-xl text-gray-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  {/* ACTION BUTTONS */}
                  <div className="flex flex-row justify-between items-center mt-8 gap-x-2">
                    <Button
                      variant="default"
                      size="lg"
                      className="text-white bg-[#970747] hover:bg-[#970747] text-md px-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Added to wishlist!");
                      }}
                    >
                      WishList
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-[#970747] hover:text-[#970747] bg-[#232949] hover:bg-[#232949] border-[#970747] text-md px-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Added to cart!");
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}