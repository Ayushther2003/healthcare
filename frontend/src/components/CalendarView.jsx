import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  // Example static appointment matrix (3 rows of 7 days)
  const appointmentMatrix = [
    ['10:00', '08:00', '12:00', '10:00', '—', '12:00', '09:00'],
    ['11:00', '09:00', '—', '11:00', '14:00', '14:00', '10:00'],
    ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00'],
  ];

  const renderAppointment = (time) => {
    if (time === '—') {
      return <div className="text-xs text-gray-400">—</div>;
    }

    const isPrimary = ['09:00', '12:00', '11:00'].includes(time);
    return (
      <div
        className={`text-xs px-2 py-1 rounded-md ${
          isPrimary
            ? 'bg-purple-200 text-purple-800'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        {time}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mx-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm text-gray-400 font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-y-4 mb-4">
        {dates.map((date, index) => (
          <div key={date} className="text-center">
            <div
              className={`text-lg font-medium ${
                index === 6 ? 'text-gray-400' : 'text-gray-800'
              }`}
            >
              {date}
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Grid */}
      {appointmentMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-7 gap-y-2 mb-2 text-center">
          {row.map((time, i) => (
            <div key={i}>{renderAppointment(time)}</div>
          ))}
        </div>
      ))}

      {/* Appointment Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Dentist Appointment */}
        <div className="bg-secondary text-white p-4 rounded-2xl">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm">Dentist</h3>
            </div>
            <div className="text-white text-lg">🦷</div>
          </div>
          <div className="text-xs opacity-90 mb-1">09:00–11:00</div>
          <div className="text-xs opacity-75">Dr. Cameron Williamson</div>
        </div>

        {/* Physiotherapy Appointment */}
        <div className="bg-cardBg text-purple-900 p-4 rounded-2xl">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm">Physiotherapy</h3>
            </div>
            <div className="text-purple-500 text-lg">💪</div>
          </div>
          <div className="text-xs mb-1">11:00–12:00</div>
          <div className="text-xs opacity-75">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
