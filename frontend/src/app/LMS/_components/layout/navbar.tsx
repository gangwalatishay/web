import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, Mail, Settings } from 'lucide-react';
import axios from 'axios';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // ✅ User state
  const [user, setUser] = useState<{
    name: string;
    email?: string;
  } | null>(null);

  const location = useLocation();
  const matchRangesRef = useRef<Range[]>([]);
  const currentMatchIndexRef = useRef<number>(-1);

  // ✅ Date-Time function
  const getCurrentDateTime = () => {
    const now = new Date();

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const date = now.toLocaleDateString("en-IN", dateOptions);
    const time = now.toLocaleTimeString("en-IN", timeOptions);

    return `${date} • ${time}`;
  };

  // ✅ FIXED: initialize state properly (NO warning)
  const [currentDateTime, setCurrentDateTime] = useState(() => getCurrentDateTime());

  // ✅ FIXED: only interval inside effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Route title
  const getPageTitle = () => {
    const path = location.pathname;

    if (path === "/lms") return "Dashboard";
    if (path.startsWith("/lms/assignments")) return "Assignments";
    if (path.startsWith("/lms/live")) return "Live Classes";
    if (path.startsWith("/lms/progress")) return "Progress";
    if (path.startsWith("/profile")) return "Profile";

    return "Dashboard";
  };

  // ✅ Fetch user (same as sidebar)
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }

      try {
        const res = await axios.get(
          "http://127.0.0.1:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.user) {
          setUser(res.data.user);
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (err) {
        console.error("Navbar user fetch error:", err);
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    fetchUser();

    const handleStorage = () => fetchUser();
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // 🔍 Search logic
  useEffect(() => {
    const supportsHighlight = 'highlights' in CSS;

    if (supportsHighlight) CSS.highlights.clear();

    matchRangesRef.current = [];
    currentMatchIndexRef.current = -1;

    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    const mainElement = document.querySelector('main') || document.body;

    const treeWalker = document.createTreeWalker(
      mainElement,
      NodeFilter.SHOW_TEXT
    );

    const ranges: Range[] = [];
    let currentNode = treeWalker.nextNode();

    while (currentNode) {
      const text = currentNode.nodeValue || '';
      const lowerText = text.toLowerCase();
      let startIndex = 0;

      while ((startIndex = lowerText.indexOf(query, startIndex)) !== -1) {
        const range = new Range();
        range.setStart(currentNode, startIndex);
        range.setEnd(currentNode, startIndex + query.length);
        ranges.push(range);
        startIndex += query.length;
      }

      currentNode = treeWalker.nextNode();
    }

    if (ranges.length > 0 && supportsHighlight) {
      matchRangesRef.current = ranges;
      const highlight = new Highlight(...ranges);
      CSS.highlights.set("search-results", highlight);
    }

    return () => {
      if (supportsHighlight) CSS.highlights.clear();
    };
  }, [searchQuery, location.pathname]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ranges = matchRangesRef.current;
    if (e.key === 'Enter' && ranges.length > 0) {
      currentMatchIndexRef.current =
        (currentMatchIndexRef.current + 1) % ranges.length;

      const activeRange = ranges[currentMatchIndexRef.current];

      if ('highlights' in CSS) {
        CSS.highlights.set('search-active', new Highlight(activeRange));
      }

      const parent = activeRange.startContainer.parentElement;
      parent?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="h-20 bg-[#0b0c10] border-b border-gray-800 flex items-center justify-between px-8 fixed top-0 left-64 right-0 z-10">
      
      {/* Left */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">
          {currentDateTime}
        </span>
        <h2 className="text-2xl font-bold text-white mt-1">
          {getPageTitle()}
        </h2>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search anything on this page..."
            className="w-full pl-10 pr-3 py-2.5 bg-[#12141a] border border-gray-800 rounded-lg text-gray-300 focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">

        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 border border-gray-800">
          <Bell className="h-5 w-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 border border-gray-800">
          <Mail className="h-5 w-5" />
        </button>

        <div className="h-6 w-px bg-gray-800"></div>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
          {user?.name
            ? user.name.split(" ").map(n => n[0]).join("").toUpperCase()
            : "U"}
        </div>

        {/* Enroll Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + Enroll Course
        </button>

        {/* Settings */}
        <div className="relative">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 border border-gray-800"
          >
            <Settings className="h-5 w-5" />
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#12141a] border border-gray-800 rounded-lg">
              <div className="p-2 text-sm text-gray-300">
                {user?.name || "Guest"}
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;