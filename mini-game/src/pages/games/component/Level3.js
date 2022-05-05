import React from 'react';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level3 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();
  return (
    <>
      <span className="text-7xl text-center pb-20 font-medium">
        What's <span className=" font-bold">Capital</span> of &nbsp;
        <span onClick={correctAnswer}> I</span>
        <span>ndonesia ?</span>
      </span>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            A. Jakarta
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            B. Batavia
          </button>
        </div>
        <div className="flex gap-20">
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            C. Java
          </button>
          <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
            D. Betawi
          </button>
        </div>
      </div>
    </>
  );
};

export default Level3;
