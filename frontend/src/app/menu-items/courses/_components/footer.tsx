import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import course1 from "@/assets/courses/courses1.jpg";
import course2 from "@/assets/courses/courses2.jpg";

export default function Footer() {
  return (
    <>
      <div className="mt-20 bg-[#18181B] w-full h-auto py-12.5 px-25 flex justify-center flex-wrap">
        <div className="footercontainer">
          <div className="sec aboutus">
            <img src="../src/assets/logo.png" alt="Logo" className="h-20 w-20 flex" />
            <p>
              Transforming programming education with industry-aligned curriculum and expert instructors.
            </p>
          </div>
          <div className="sec quickLinks">
            <h2 className="text-2xl">Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="sec post">
            <h2 className="text-2xl mb-4">Latest Courses</h2>
            <ul className="space-y-4">
              {/* Course 1 */}
              <li className="flex items-center gap-3 group cursor-pointer">
                <img
                  src={course1}
                  alt="React Course"
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-blue-400 transition">
                    React Mastery
                  </p>
                  <span className="text-gray-400 text-xs">
                    Beginner to Advanced
                  </span>
                </div>
              </li>
              {/* Course 2 */}
              <li className="flex items-center gap-3 group cursor-pointer">
                <img
                  src={course2}
                  alt="ML Course"
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-blue-400 transition">
                    Machine Learning Basics
                  </p>
                  <span className="text-gray-400 text-xs">
                    AI & Data Science
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2 className="text-2xl">Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <Mail />
                </span>
                <p>
                  <a href="mailto:info@algoascend.in">info@algoascend.in</a>
                </p>
              </li>
              <li>
                <span>
                  <Phone />
                </span>
                <p>
                  <a href="tel:+918873368527">+91 88733 68527</a>
                </p>
              </li>
              <li>
                <span>
                  <MapPin />
                </span>
                <span>123 Main Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        <p>&copy; 2026 AlgoAscend. All rights reserved.</p>
      </div>
    </>
  )
}