
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, LayoutList } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const activeTab = location.pathname === '/' ? 'today' : 'habits';

  return (
    <nav className="border-b border-[#30363d] px-3 py-4 flex justify-between items-center bg-[#161b22]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-500 rounded-md"></div>
        <h1 className="text-xl font-bold text-white">HabitGraph</h1>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition ${
            activeTab === 'today' ? 'bg-[#21262d] text-white border border-[#8b949e]' : 'text-[#8b949e]'
          }`}
        >
          <LayoutList size={18} /> Today
        </Link>
        <Link
          to="/habits"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition ${
            activeTab === 'habits' ? 'bg-[#21262d] text-white border border-[#8b949e]' : 'text-[#8b949e]'
          }`}
        >
          <BarChart3 size={18} /> Analytics
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
