import React from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Mar 8', react: 30, python: 20, aws: 10 },
  { name: 'Mar 15', react: 40, python: 35, aws: 15 },
  { name: 'Mar 22', react: 35, python: 45, aws: 25 },
  { name: 'Mar 29', react: 50, python: 40, aws: 45 },
  { name: 'Apr 5', react: 65, python: 55, aws: 40 },
  { name: 'Apr 7', react: 70, python: 65, aws: 50 },
];

const LearningProgressChart: React.FC = () => {
  return (
    <div className="bg-[#12141a] rounded-2xl p-6 border border-gray-800 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-gray-400" />
          <h3 className="text-white font-semibold text-lg">Learning Progress</h3>
        </div>
        <span className="text-gray-500 text-xs">Last 30 days</span>
      </div>

      <div className="flex gap-4 mb-4 text-xs">
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span><span className="text-gray-400">React</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500"></span><span className="text-gray-400">Python</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span><span className="text-gray-400">AWS</span></div>
      </div>

      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReact" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPython" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 10 }} dy={10} />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }} itemStyle={{ color: '#fff' }} />
            <Area type="monotone" dataKey="aws" stroke="#f97316" fillOpacity={0} strokeWidth={2} />
            <Area type="monotone" dataKey="python" stroke="#a855f7" fillOpacity={1} fill="url(#colorPython)" strokeWidth={2} />
            <Area type="monotone" dataKey="react" stroke="#3b82f6" fillOpacity={1} fill="url(#colorReact)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LearningProgressChart;