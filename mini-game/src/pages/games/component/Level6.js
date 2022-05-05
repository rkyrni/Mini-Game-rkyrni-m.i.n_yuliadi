import React, {useEffect, useState} from 'react';
import Milea from '../../../assets/img/milea.jpg';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level6 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();
  const [switc, setSwitc] = useState(false);
  const [number, setNumber] = useState(8);

  useEffect(() => {
    if (number > 0) {
      setTimeout(() => {
        if (number === 3) setNumber(number - 2);
        else if (number === 1) setSwitc(true);
        else setNumber(number - 1);
      }, 1000);
    }
  });

  return (
    <>
      {!switc && (
        <>
          <div className="w-full h-auto p-2 bg-black text-center flex flex-col gap-5 items-center justify-center relative">
            <span className="text-white">Perhatikan object dibawah!</span>
            <figure className="justify-self-center">
              <img className="w-full h-auto justify-self-center" src={`${Milea}`} alt="milea" />
            </figure>
            <span className="text-white text-3xl">{number <= 5 && number}</span>
          </div>
        </>
      )}
      {switc && (
        <>
          <span className="text-7xl pb-20 font-bold">Berapakah yang hilang?</span>
          <div className="flex flex-col gap-10">
            <div className="flex gap-20">
              <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
                A. 5
              </button>
              <button onClick={correctAnswer} className="p-5 bg-gray-500 text-white">
                B. 2
              </button>
            </div>
            <div className="flex gap-20">
              <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
                C. 1
              </button>
              <button onClick={wrongAnswer} className="p-5 bg-gray-500 text-white">
                D. 4
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Level6;
