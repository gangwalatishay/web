import { Route, Routes } from "react-router-dom";

import Page from "./app/page";

import Courses from "./app/menu-items/courses/courses";
import CourseDetail from "./app/menu-items/courses/_components/course-detail";
import Gallery from "./app/menu-items/gallery/gallerypage";
import About from "./app/menu-items/about-us/about";

import ProfilePage from "./app/profile/page";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";

import InstitutionsPage from "./app/menu-items/school&institute/page";

// ✅ LMS imports
import LMSLayout from "./app/LMS/layout";
import DashboardPage from "./app/LMS/_components/dashboard/page";
import AssignmentsPage from "./app/LMS/_components/assignments/page";
import LiveClassesPage from "./app/LMS/_components/liveClasses/page";
import ProgressPage from "./app/LMS/_components/progress/page";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex flex-col items-center justify-center md:justify-start">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Page />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/institutions" element={<InstitutionsPage />} />

          {/* ✅ LMS Nested Routing */}
          <Route path="/lms" element={<LMSLayout />}>

            {/* Default → /lms */}
            <Route index element={<DashboardPage />} />

            {/* Sub Pages */}
            <Route path="assignments" element={<AssignmentsPage />} />
            <Route path="liveClasses" element={<LiveClassesPage />} />
            <Route path="progress" element={<ProgressPage />} />

          </Route>

        </Routes>
      </div>
    </div>
  );
}