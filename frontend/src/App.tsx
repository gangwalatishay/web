import {
  Route,
  Routes
} from "react-router-dom";

import Page from "./app/page";

import Courses from "./app/menu-items/courses/courses";
import Gallery from "./app/menu-items/gallery/gallerypage";

// import ProfilePage from "./app/profile/page";
import CourseDetail from "./app/menu-items/courses/_components/course-detail";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import About from "./app/menu-items/about-us/about";
import InstitutionsPage from "./app/menu-items/school&institute/page";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex flex-col items-center justify-center md:justify-start">
        <Routes>
          <Route path="/" element={<Page />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/institutions" element={<InstitutionsPage />} />
        </Routes>
      </div>
    </div>
  );
}
