import React from 'react';

const LinearProgress = ({ percentage, color = 'blue' }) => {
  const colorMap = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${colorMap[color]} rounded-full transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const HealthStatusCards = () => {
  const data = [
    { name: 'Lungs', emoji: '🫁', color: 'red', percentage: 85, date: '26 Oct 2021' },
    { name: 'Teeth', emoji: '🦷', color: 'green', percentage: 92, date: '26 Oct 2021' },
    { name: 'Bone', emoji: '🦴', color: 'orange', percentage: 78, date: '26 Oct 2021' },
  ];

   return (
    <div className="flex flex-col gap-8 p-2 space-y-6">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          {/* Top Row: Emoji and Organ Name */}
          <div className="flex items-center space-x-3">
            <div className={`text-${item.color}-500 text-5xl`}>{item.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          </div>
          {/* Date */}
          <p className="text-xs text-gray-500">Rate: {item.date}</p>
          {/* Progress Bar */}
          <LinearProgress percentage={item.percentage} color={item.color} />
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
