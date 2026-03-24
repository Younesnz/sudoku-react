import React from 'react';
import GameCard from '../components/GameCard';

const GAMES = [
  { id: 1, image: "/games/game01.jpg", title: "Coffee Sudoku", difficulty: "easy", authorName: "Alice", authorImg: "02" },
  { id: 2, image: "/games/game02.jpg", title: "The Infinite Nine", difficulty: "normal", authorName: "Hunter", authorImg: "10" },
  { id: 3, image: "/games/game03.jpg", title: "The Lost Grid", difficulty: "normal", authorName: "Marcus", authorImg: "12" },
  { id: 4, image: "/games/game04.jpg", title: "Breaking Bad Sudoku", difficulty: "normal", authorName: "Elena", authorImg: "07" },
  { id: 5, image: "/games/game05.jpg", title: "Susoku & Dragons", difficulty: "normal", authorName: "Younes", authorImg: "01" },
  { id: 6, image: "/games/game06.jpg", title: "Cats & Dogs Sudoku", difficulty: "easy", authorName: "David", authorImg: "06" },
];

export default function GameSelection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold uppercase mb-8 text-white">Select a Game</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
