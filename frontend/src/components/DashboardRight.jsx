import React from 'react'
import UpcomingSchedule from './UpcomingSchedule';
import CalendarView from './CalendarView';
import { User,Plus } from 'lucide-react';

const calendarData = {
  month: 'October 2021',
  days: [
    { day: 25, dayName: 'Mon', times: ['10:00', '11:00', '12:00'] },
    { day: 26, dayName: 'Tues', times: ['08:00', '09:00', '10:00'] },
    { day: 27, dayName: 'Wed', times: ['12:00', '13:00'] },
    { day: 28, dayName: 'Thurs', times: ['10:00', '11:00'] },
    { day: 29, dayName: 'Fri', times: ['14:00'] },
    { day: 30, dayName: 'Sat', times: ['12:00', '14:00', '15:00'] },
    { day: 31, dayName: 'Sun', times: ['09:00', '10:00', '11:00'] }
  ]
};

const todayAppointments = [
  {
    id: 1,
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white'
  },
  {
    id: 2,
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '💪',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800'
  }
];

const upcomingAppointments = [
  {
    day: 'Thursday',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: '📋' },
      { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { id: 4, title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
    ]
  }
];

const DashboardRight = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-background p-6 rounded-2xl shadow-sm">
      {/* Header with avatar and plus button */}
      <div className="flex justify-end items-center mb-4 space-x-3">
        <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <button className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="space-y-6 bg-white p-2 rounded-2xl">
          <div className="flex items-center space-x-3">
          </div>
          <CalendarView calendarData={calendarData} todayAppointments={todayAppointments} />
          <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </div>
      </div>
  )
}

export default DashboardRight