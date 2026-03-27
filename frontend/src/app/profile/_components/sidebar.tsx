import { Link } from "react-router-dom";

export default function Sidebar() {
  const linkStyle =
    "text-[#A1A1AA] hover:text-[#3B82F6] transition duration-200";

  return (
    <aside className="w-64 border-r border-zinc-800 px-6 py-10">

      <h2 className="text-lg font-semibold text-[#970747] mb-10">
        Student Panel
      </h2>

      <nav className="flex flex-col gap-5 text-sm">

        <Link to="/profile" className={linkStyle}>
          Dashboard
        </Link>

        <Link to="/profile/courses" className={linkStyle}>
          My Courses
        </Link>

        <Link to="/profile/certificates" className={linkStyle}>
          Certificates
        </Link>

        <Link to="/profile/wishlist" className={linkStyle}>
          Wishlist
        </Link>

        <Link to="/profile/billing" className={linkStyle}>
          Billing
        </Link>

        <Link to="/profile/settings" className={linkStyle}>
          Settings
        </Link>

      </nav>

    </aside>
  );
}