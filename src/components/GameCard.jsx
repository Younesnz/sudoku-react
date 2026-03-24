import React from 'react';
import { Link } from 'react-router-dom';
import { RiUserSmileLine, RiSkull2Line, RiArrowRightCircleLine } from '@remixicon/react';

export default function GameCard({ game }) {
  return (
    <Link
      to={`/games/${game.difficulty}`}
      className="group flex flex-col bg-surface border border-gray-700 hover:border-gray-500 rounded-2xl overflow-hidden transition-all pt-2"
    >
      <div className="w-full aspect-[2/1] bg-black">
        <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col flex-1 p-5 pb-2">
        <h3 className="text-xl font-bold text-white tracking-wide mb-3 line-clamp-1">{game.title}</h3>

        <div className="flex items-center gap-2 border border-white bg-transparent rounded-full pl-2 pr-3 py-1.5 w-max mb-6">
          {game.difficulty === 'easy' ? <RiUserSmileLine size={18} className="text-white" /> : <RiSkull2Line size={16} className="text-white" />}
          <span className="text-xs font-bold uppercase text-white tracking-widest leading-none mt-px">{game.difficulty}</span>
        </div>

        <div className="flex-1"></div>

        <div className="border-t border-gray-700 pt-2 pb-1 flex items-center justify-between mt-auto -mx-5 px-5">

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">By</span>
            <img src={`/profiles/profile${game.authorImg}.jpg`} alt={game.authorName} className="w-6 h-6 rounded-full border border-gray-600 object-cover" />
            <span className="text-sm font-semibold text-gray-300">{game.authorName}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-full group-hover:scale-105 group-hover:bg-accent-hover transition-all duration-200">
            <RiArrowRightCircleLine size={24} />
            <span className="font-bold text-xs uppercase tracking-widest mt-px">Play</span>
          </div>

        </div>
      </div>
    </Link>
  );
}
