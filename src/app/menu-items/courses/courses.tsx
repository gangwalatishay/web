import CoursesList from "./_components/courses-list";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Slider from "./_components/slider";

import "../../../styles/courses.css";

export default function Courses() { 
  return (
    <div className="flex flex-col w-full items-center justify-center md:justify-start">
      <Navbar />
      <Slider />
      <CoursesList />
      <Footer />
    </div>
  );
};