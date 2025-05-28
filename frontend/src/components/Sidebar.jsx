import React from 'react';
import {
  BarChart3,
  History,
  Calendar,
  Clock,
  MessageCircle,
  HelpCircle,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cyan-500">Health</span>
            <span className="text-2xl font-bold text-gray-800">care.</span>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            General
          </div>
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 border-r-2 border-blue-600"
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <History className="w-5 h-5 mr-3" />
              History
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <Clock className="w-5 h-5 mr-3" />
              Appointments
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Statistics
            </a>
          </div>

          <div className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 mt-8">
            Tools
          </div>
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Chat
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              Support
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 mt-8"
            >
              <Settings className="w-5 h-5 mr-3" />
              Setting
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
