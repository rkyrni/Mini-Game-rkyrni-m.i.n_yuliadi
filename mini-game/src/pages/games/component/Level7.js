import React from 'react';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level7 = () => {
  const {wrongAnswer} = FunctionHandler();

  return (
    <>
      <span className="text-3xl xl:text-7xl pt-10 pb-10 xl:pb-20 font-bold text-center">
        Temukan angka&nbsp;
        <span onClick={wrongAnswer}>2 </span>
        yang hilang !!
      </span>
      <div className="flex flex-col gap-1 xl:gap-10 pb-10">
        <div className="flex gap-3 xl:gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
        </div>
        <div className="flex gap-3 xl:gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            ?
          </button>
        </div>
      </div>
    </>
  );
};

export default Level7;
