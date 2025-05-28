import React from 'react';
import {Heart} from 'lucide-react';
import body from '/src/assets/body.png';

const AnatomySection = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-48 h-6 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-lg opacity-80">
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-400 rounded-full"></div>
          </div>

          <div className="relative z-10 w-80 h-100 mx-auto bg-background rounded-2xl">
            <img 
              src={body} 
              alt="Human anatomy body" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="absolute top-16 left-40 z-20">
            <div className="bg-indigo-600 text-white px-3 py-2 rounded-full text-xs flex items-center space-x-2 shadow-lg border-2 border-white">
              <Heart className="w-3 h-3 fill-current" />
              <span className="font-medium whitespace-nowrap">Healthy Heart</span>
            </div>
          </div>
          
          <div className="absolute bottom-28 left-1/3 transform -translate-x-1/2 z-20">
            <button className="bg-cyan-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-500 transition-colors shadow-lg flex items-center space-x-2">
              <span>📊</span>
              <span>Healthy Log</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default AnatomySection