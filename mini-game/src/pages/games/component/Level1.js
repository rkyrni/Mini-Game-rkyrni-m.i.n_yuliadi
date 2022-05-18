import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level1 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();

  return (
    <>
      <span className="text-3xl xl:text-7xl pb-10 pt-10 font-bold">
        Klik&nbsp;
        <span onClick={correctAnswer}>Mulai !!!</span>
      </span>
      <div className="flex flex-col gap-10 pb-10">
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

export default Level1;
