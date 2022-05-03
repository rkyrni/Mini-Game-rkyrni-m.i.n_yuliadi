import React from 'react';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level2 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();

  return (
    <>
      <span className="text-7xl pb-20 text-indigo-600 font-bold">
        Klik &nbsp;
        <span onClick={correctAnswer}>Mulai !!!</span>
      </span>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            A. mulai
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            B. mUlai
          </button>
        </div>
        <div className="flex gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            C. mulaI
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            D. Mulaii
          </button>
        </div>
      </div>
    </>
  );
};

export default Level2;
