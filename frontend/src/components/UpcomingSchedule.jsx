import React from 'react'
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { Heart,Brain,Eye } from 'lucide-react';

const UpcomingSchedule = () => {
  return (
    <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h3>
        
        {/* Thursday Section */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3">On Thursday</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-cardBg p-4 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-purple-900">Health checkup complete</p>
                </div>
                <div className="text-red-500 text-lg">🩺</div>
              </div>
              <p className="text-xs text-purple-700">11:00 AM</p>
            </div>
            
            <div className="bg-cardBg p-4 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-purple-900">Ophthalmologist</p>
                </div>
                <Eye className="w-5 h-5 text-amber-700" />
              </div>
              <p className="text-xs text-purple-700">14:00 PM</p>
            </div>
          </div>
        </div>

        {/* Saturday Section */}
        <div>
          <p className="text-sm text-gray-500 mb-3">On Saturday</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-purple-100 p-4 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-purple-900">Cardiologist</p>
                </div>
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-xs text-purple-700">12:00 AM</p>
            </div>
            
            <div className="bg-cardBg p-4 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-blue-900">Neurologist</p>
                </div>
                <Brain className="w-5 h-5 text-blue-700" />
              </div>
              <p className="text-xs text-blue-700">16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
  );
};


export default UpcomingSchedule