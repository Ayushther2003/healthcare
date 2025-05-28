import React from 'react'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import { 
  Search, 
  Bell, 
  Plus, 
  Grid3X3, 
  Clock, 
  Calendar, 
  Users, 
  BarChart3, 
  Wrench, 
  MessageCircle, 
  Phone, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Activity
} from 'lucide-react';

const navigationLinks = [
  { icon: Grid3X3, label: 'Dashboard', active: true },
  { icon: Clock, label: 'History', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: Users, label: 'Appointments', active: false },
  { icon: BarChart3, label: 'Statistics', active: false },
  { icon: Wrench, label: 'Tests', active: false },
  { icon: MessageCircle, label: 'Chat', active: false },
  { icon: Phone, label: 'Support', active: false },
  { icon: Settings, label: 'Setting', active: false }
];

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar navigationLinks={navigationLinks} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardMainContent />
      </div>
    </div>
  );
};
export default App;