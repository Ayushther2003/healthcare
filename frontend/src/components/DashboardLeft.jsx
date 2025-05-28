import React from 'react'
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import { 
  Search, 
  Bell, 
  Info
} from 'lucide-react';

const activityData = [
  { day: 'Mon', bars: [22, 16] },
  { day: 'Tues', bars: [18, 18] },
  { day: 'Wed', bars: [24, 20] },
  { day: 'Thurs', bars: [16, 22] },
  { day: 'Fri', bars: [26, 14] },
  { day: 'Sat', bars: [18, 26] },
  { day: 'Sun', bars: [20, 8] }
];

const healthData = [
  { 
    id: 'lungs',
    icon: '🫁', 
    name: 'Lungs', 
    date: 'June, 26 Oct 2021',
    progress: 65,
    color: 'bg-red-500',
    status: 'warning'
  },
  { 
    id: 'teeth',
    icon: '🦷', 
    name: 'Teeth', 
    date: 'June, 26 Oct 2021',
    progress: 85,
    color: 'bg-green-400',
    status: 'good'
  },
  { 
    id: 'bone',
    icon: '🦴', 
    name: 'Bone', 
    date: 'June, 26 Oct 2021',
    progress: 70,
    color: 'bg-orange-400',
    status: 'moderate'
  }
];


const DashboardLeft = () => {
  return (
    <main className="flex-1 p-6 bg-white overflow-y-auto min-h-screen">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Bell Icon */}
        <button className="relative ml-4 p-2 text-gray-400 hover:text-gray-600">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></span>
        </button>
      </div>

      {/* Heading and Reference */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <div className="flex items-center text-sm text-gray-400 space-x-1">
          <Info className="w-4 h-4" />
          <span>This week</span>
        </div>
      </div>

      {/* Anatomy and Health Status */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-2">
        {/* Anatomy Section - 80% */}
        <div className="w-full lg:w-3/5">
          <AnatomySection healthData={healthData} />
        </div>

        {/* Health Status Cards - 20% */}
        <div className="w-full lg:w-2/5">
          <div className="bg-background rounded-2xl shadow-sm p-6 h-100">
            <HealthStatusCards healthData={healthData} />
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <ActivityFeed activityData={activityData} />
    </main>
  );
};


export default DashboardLeft