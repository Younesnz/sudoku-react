import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Board from '../components/Board';
import NumberPad from '../components/NumberPad';
import Timer from '../components/Timer';
import GameControls from '../components/GameControls';

export default function GamePage() {
  const { difficulty } = useParams();
  const { 
    loadPuzzleFiles, isLoading, loadingError, puzzle, isComplete, difficulty: contextDiff
  } = useGame();

  useEffect(() => {
    if (puzzle.length === 0 || contextDiff !== difficulty) {
      loadPuzzleFiles(difficulty);
    }
  }, [difficulty, contextDiff, puzzle.length, loadPuzzleFiles]);

  if (isLoading) {
    return <div className="text-center mt-20 text-xl font-semibold text-white">Loading puzzle...</div>;
  }

  if (loadingError) {
    return (
      <div className="text-center mt-20 flex flex-col items-center gap-4">
        <div className="text-red-500 font-bold text-xl">Failed to load puzzle data.</div>
        <button 
          onClick={() => loadPuzzleFiles(difficulty)}
          className="bg-accent hover:bg-accent-hover px-6 py-2 rounded-md font-semibold text-white uppercase"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between items-center max-w-[500px] mb-4">
        <div className="text-lg font-bold uppercase text-gray-400">
          Difficulty: <span className={difficulty === 'easy' ? 'text-green-500' : 'text-yellow-500'}>{difficulty}</span>
        </div>
        <Timer />
      </div>

      <Board />
      
      {isComplete && (
        <div className="my-6 p-4 bg-green-600 text-white font-bold text-xl rounded-md animate-pulse">
          Congratulations! You completed the puzzle!
        </div>
      )}

      <NumberPad />
      <GameControls />
    </div>
  );
}
