import React from 'react';
import { Archive, Circle, Plus, Trash2 } from 'lucide-react';

const Habits = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-semibold text-white">Today's Focus</h2>
          <p className="text-[#8b949e]">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>
        <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition">
          <Plus size={20} /> New Habit
        </button>
      </header>

      {/* Habit List */}
      <div className="grid gap-3">
        {['Drink Water', 'Morning Run', 'Read 10 Pages'].map((habit) => (
          <div key={habit} className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl flex justify-between items-center group hover:border-[#8b949e] transition">
            <div className="flex items-center gap-4">
              <button className="text-[#30363d] hover:text-green-500 transition">
                <Circle size={28} />
              </button>
              <span className="text-lg font-medium">{habit}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 flex gap-3 transition">
              <button className="text-[#8b949e] hover:text-white"><Archive size={18} /></button>
              <button className="text-[#8b949e] hover:text-red-400"><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
