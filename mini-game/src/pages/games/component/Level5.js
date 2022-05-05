import React, {useState} from 'react';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level5 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();

  const [jawaban, setJawaban] = useState(false);
  const [input, setInput] = useState('');
  const [alert, setAlert] = useState(true);

  // ========= HANDLE INPUT =======
  const handleInput = (event) => {
    let isi = parseInt(event.target.value);
    setInput(isi);
    console.log(input);
  };

  //   ======= HANDLE SUBMIT =======
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === 25) {
      setJawaban(true);
    } else {
      wrongAnswer();
      setAlert(false);
      setInput('');
    }
  };

  //    HANDLE SUBMIT NEXT LEVEL
  const handleNextLevel = () => {
    setJawaban(false);
    setInput('');
    setAlert(true);
    correctAnswer();
  };

  return (
    <>
      {!jawaban && (
        <>
          <div className="flex-row content-evenly text-center">
            <ul className="text-2xl">
              <li>5 + 7 = 14</li>
              <li>7 + 7 = 16</li>
              <li>5 x 7 = 37</li>
              <li>5 - 7 = 0</li>
              <li>7 x 5 = 37</li>
            </ul>
            <span>Berapakah 5 x 5 = ?</span>
          </div>
          <div>
            <form action="none" className="flex gap-10">
              <input
                type="number"
                name="number"
                value={input}
                onChange={handleInput}
                className={
                  alert
                    ? 'w-full h-10 border text-lg mt-20 border-black rounded-sm px-2 py-1 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400'
                    : 'w-full h-10 border text-lg mt-20 border-red-600 rounded-sm px-2 py-1 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400'
                }
              />
              <button
                onClick={handleSubmit}
                className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600 self-end">
                Submit
              </button>
            </form>
            <div
              className={
                alert ? 'hidden' : 'bg-red-200 mt-2 py-2 px-4 text-xs text-red-600 rounded-sm'
              }>
              Jawaban salah
            </div>
          </div>
        </>
      )}
      {jawaban && (
        <>
          <span className="text-4xl pb-8 text-center">5 x 5 = 25</span>
          <span className="text-2xl pb-8 text-center">
            Yaps selamatt🥳🥳🥳 <br /> Konsisten dan percaya dirilah pada diri sendiri, <br />
            Jangan biarkan hal-hal disekitarmu yang sudah jelas salah dapat mempengaruhi dirimu,{' '}
            <br />{' '}
            <span className="text-pink-600 font-bold italic font-mono">
              {' '}
              Teruslah semangat dan tetaplah waras!
            </span>
          </span>
          <button
            onClick={handleNextLevel}
            className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600 self-center">
            Next Level
          </button>
        </>
      )}
    </>
  );
};

export default Level5;
