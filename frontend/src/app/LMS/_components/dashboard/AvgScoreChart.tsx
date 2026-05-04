import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const AvgScoreChart: React.FC = () => {
  const data = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 65 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 95, highlight: true },
  ];

  return (
    <div className="bg-[#12141a] rounded-2xl p-6 border border-gray-800 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <BarChart3 className="w-5 h-5 text-green-500" />
        <h3 className="text-white font-semibold text-lg">Avg Scores</h3>
      </div>

      <div className="flex-1 flex items-end justify-between px-2 pb-2">
        {data.map((item) => (
          <div key={item.month} className="flex flex-col items-center gap-3 w-10">
            {/* Bar Track & Fill */}
            <div className="w-full h-32 bg-gray-800 rounded-md relative overflow-hidden">
              <div 
                className="absolute bottom-0 w-full bg-blue-500 rounded-md transition-all duration-500"
                style={{ height: `${item.value}%` }}
              ></div>
            </div>
            {/* Label */}
            <span className={`text-xs font-medium ${item.highlight ? 'text-green-500' : 'text-gray-400'}`}>
              {item.month}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-green-500 text-xs font-medium">
        <TrendingUp className="w-3.5 h-3.5" />
        Improving consistently
      </div>
    </div>
  );
};

export default AvgScoreChart;