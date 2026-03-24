import React, { useState } from 'react';

const ALL_TIME = [
  { rank: 1, user: "Younes", count: 142, avatar: "01" },
  { rank: 2, user: "Sarah", count: 120, avatar: "02" },
  { rank: 3, user: "Hunter", count: 85, avatar: "10" },
  { rank: 4, user: "Emily", count: 72, avatar: "04" },
  { rank: 5, user: "Michael", count: 64, avatar: "03" },
  { rank: 6, user: "Jessica", count: 50, avatar: "05" },
  { rank: 7, user: "David", count: 42, avatar: "06" },
  { rank: 8, user: "Sophia", count: 15, avatar: "07" },
];

const PAST_MONTH = [
  { rank: 1, user: "Hunter", count: 45, avatar: "10" },
  { rank: 2, user: "Younes", count: 40, avatar: "01" },
  { rank: 3, user: "James", count: 32, avatar: "08" },
  { rank: 4, user: "Olivia", count: 28, avatar: "09" },
  { rank: 5, user: "Emma", count: 21, avatar: "11" },
  { rank: 6, user: "William", count: 19, avatar: "12" },
];

const PAST_WEEK = [
  { rank: 1, user: "Christopher", count: 12, avatar: "13" },
  { rank: 2, user: "Daniel", count: 10, avatar: "14" },
  { rank: 3, user: "Younes", count: 9, avatar: "01" },
  { rank: 4, user: "Isabella", count: 7, avatar: "15" },
  { rank: 5, user: "Mia", count: 5, avatar: "16" },
  { rank: 6, user: "Hunter", count: 2, avatar: "10" },
];

export default function HighScores() {
  const [activeTab, setActiveTab] = useState('ALL_TIME');
  
  const dataMap = {
    'ALL_TIME': ALL_TIME,
    'PAST_MONTH': PAST_MONTH,
    'PAST_WEEK': PAST_WEEK,
  };
  
  const currentData = dataMap[activeTab];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold uppercase mb-8 text-white">High Scores</h2>
      
      {/* Tabs */}
      <div className="flex gap-2 sm:gap-4 mb-6 border-b border-gray-700 pb-2">
        <button 
          onClick={() => setActiveTab('ALL_TIME')}
          className={`px-4 py-2 font-semibold uppercase text-sm rounded-md transition-colors ${activeTab === 'ALL_TIME' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
        >
          All Time
        </button>
        <button 
          onClick={() => setActiveTab('PAST_MONTH')}
          className={`px-4 py-2 font-semibold uppercase text-sm rounded-md transition-colors ${activeTab === 'PAST_MONTH' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
        >
          Past Month
        </button>
        <button 
          onClick={() => setActiveTab('PAST_WEEK')}
          className={`px-4 py-2 font-semibold uppercase text-sm rounded-md transition-colors ${activeTab === 'PAST_WEEK' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
        >
          Past Week
        </button>
      </div>

      <div className="bg-surface border border-gray-700 rounded-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-300 text-sm uppercase">
            <tr>
              <th className="px-6 py-4 font-semibold w-24">Rank</th>
              <th className="px-6 py-4 font-semibold">User</th>
              <th className="px-6 py-4 font-semibold text-right">Puzzles Completed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {currentData.map((score, idx) => (
              <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 font-bold text-white">#{score.rank}</td>
                <td className="px-6 py-4 text-gray-300 flex items-center gap-4">
                  <img src={`/profiles/profile${score.avatar}.jpg`} alt={score.user} className="w-10 h-10 rounded-full border border-gray-500 object-cover" />
                  <span className="font-semibold text-white">{score.user}</span>
                </td>
                <td className="px-6 py-4 text-right text-accent font-semibold">{score.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
