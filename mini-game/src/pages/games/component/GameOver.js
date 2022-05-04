import React from 'react';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const GameOver = () => {
  const {resetLevel} = FunctionHandler();
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="text-7xl font-bold">Game Over !!!</div>
      <div onClick={resetLevel} className="cursor-pointer text-5xl font-medium">
        Ulangi
      </div>
    </div>
  );
};

export default GameOver;
