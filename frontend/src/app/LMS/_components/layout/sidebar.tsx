import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  FileEdit, 
  PieChart, 
  Award, 
  FileText, 
  Briefcase 
} from 'lucide-react';
import { Logo } from '@/components/logo';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Courses', icon: BookOpen, active: false },
    { name: 'Live Classes', icon: Video, active: false, badge: true },
    { name: 'Assignments', icon: FileEdit, active: false },
    { name: 'Progress', icon: PieChart, active: false },
    { name: 'Certificates', icon: Award, active: false },
    { name: 'Resume', icon: FileText, active: false },
    { name: 'Placement', icon: Briefcase, active: false, highlight: true },
  ];

  return (
    <aside className="w-64 h-screen bg-[#12141a] text-gray-400 flex flex-col fixed left-0 top-0 border-r border-gray-800">
      {/* Logo Area */}
      <div className="flex items-center ml-6 w-full">
        <Logo />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? 'bg-blue-600/10 text-blue-500' 
                : item.highlight 
                  ? 'text-pink-500 hover:bg-gray-800/50'
                  : 'hover:bg-gray-800/50 hover:text-gray-200'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
            {item.badge && (
              <span className="ml-auto w-2 h-2 rounded-full bg-red-500"></span>
            )}
          </a>
        ))}
      </nav>

      {/* Bottom User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center bg-blue-600/20 text-blue-500 p-3 rounded-xl cursor-pointer hover:bg-blue-600/30 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            AJ
          </div>
          <span className="ml-3 font-medium text-sm">Alex Johnson</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;