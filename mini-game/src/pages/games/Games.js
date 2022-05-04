import React, {useContext} from 'react';
import {DataContext} from '../../state management/StateManagement';
import Level1 from './component/Level1';
import Level2 from './component/Level2';
import FunctionHandler from '../../functionHandler/FunctionHandler';
import LifeComponent from './component/LifeComponent';
import GameOver from './component/GameOver';

const Games = () => {
  const {level, life} = useContext(DataContext);
  const {resetLevel} = FunctionHandler();

  return (
    <div className="h-[40rem] w-[60rem] bg-gray-300 text-5xl flex flex-col items-center justify-center relative p-5 shadow-2xl">
      {life <= 0 && <GameOver />}
      {life > 0 && (
        <>
          {level === 1 && <Level1 />}
          {level === 2 && <Level2 />}
          {level > 2 && <span>Kamu telah menyelesaikan semua level</span>}
          <button
            onClick={resetLevel}
            className="absolute text-lg font-medium flex bottom-3 right-3 items-center justify-center">
            Ulangi &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <div className="absolute top-3 left-3">
            <LifeComponent />
          </div>
        </>
      )}
    </div>
  );
};

export default Games;
