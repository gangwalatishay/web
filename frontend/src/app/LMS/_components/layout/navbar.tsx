import React from 'react';
import { Search, Bell, Mail, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  // You can dynamically generate this date or pass it as a prop
  const currentDate = "April 7, 2026 - Monday";

  return (
    <header className="h-20 bg-[#0b0c10] border-b border-gray-800 flex items-center justify-between px-8 fixed top-0 left-64 right-0 z-10">
      
      {/* Left Section: Date & Title */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">{currentDate}</span>
        <h2 className="text-2xl font-bold text-white mt-1">Dashboard</h2>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-800 rounded-lg leading-5 bg-[#12141a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            placeholder="Search courses, assignments..."
          />
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center space-x-4">
        
        {/* Notification Icons */}
        <button className="relative p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0b0c10]"></span>
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800">
          <Mail className="h-5 w-5" />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-800 mx-2"></div>

        {/* Small Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all">
          AJ
        </div>

        {/* Enroll Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + Enroll Course
        </button>

        {/* Settings Icon */}
        <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 transition-colors border border-gray-800 ml-2">
          <Settings className="h-5 w-5" />
        </button>
        
      </div>
    </header>
  );
};

export default Navbar;