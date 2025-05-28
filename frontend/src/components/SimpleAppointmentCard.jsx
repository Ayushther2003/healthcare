import React from 'react'

const SimpleAppointmentCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Dentist Appointment */}
        <div className="bg-blue-600 text-white p-4 rounded-2xl">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm">Dentist</h3>
            </div>
            <div className="text-white text-lg">🦷</div>
          </div>
          <div className="text-xs opacity-90 mb-1">09:00-11:00</div>
          <div className="text-xs opacity-75">Dr. Cameron Williamson</div>
        </div>

        {/* Physiotherapy Appointment */}
        <div className="bg-purple-100 text-purple-900 p-4 rounded-2xl">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm">Physiotherapy Appointment</h3>
            </div>
            <div className="text-orange-500 text-lg">💪</div>
          </div>
          <div className="text-xs mb-1">11:00-12:00</div>
          <div className="text-xs opacity-75">Dr. Kevin Djones</div>
        </div>
      </div>
  );
};

export default SimpleAppointmentCard