import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import heatmapData from '../data/heatmapData.json';

const HabitTracker = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-semibold text-white">Consistency Over Time</h2>

      {/* Heatmap Card */}
      {heatmapData.map((habit) => (
        <div key={habit.name} className="border border-[#30363d] p-6 rounded-xl space-y-4 overflow-hidden">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">{habit.name}</h3>
            <span className="text-xs text-[#8b949e] uppercase tracking-widest">Last 90 Days</span>
          </div>

          <div className="">
            <HeatMap
              value={habit.data}
              width={1000}
              startDate={new Date('2024/01/01')}
              endDate={new Date('2024/12/31')}
              rectSize={14}
              space={5}
              rectProps={{
                rx: 2.5,
              }}
              panelColors={{
                0: '#161b22',
                1: habit.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitTracker;
