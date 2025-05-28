import React from 'react';

const ActivityFeed = ({ activityData }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity</h3>
      
      <div className="flex items-end space-x-2 h-32">
        {activityData.map(({ day, bars }) => (
          <div key={day} className="flex flex-col items-center flex-1">
            <div className="flex flex-col space-y-1 mb-2">
              {bars.map((value, i) => (
                <div
                  key={i}
                  className={`w-4 rounded-sm ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-600'}`}
                  style={{ height: `${value}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{day}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        {activityData.length} appointments this week
      </p>
    </div>
  );
};

export default ActivityFeed