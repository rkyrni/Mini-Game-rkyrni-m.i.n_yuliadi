import {useContext, useEffect} from 'react';
import AlertLevel2 from '../../../component/AlertLevel2';
import FunctionHandler from '../../../functionHandler/FunctionHandler';
import {DataContext} from '../../../state management/StateManagement';

const Level2 = () => {
  const {correctAnswer, wrongAnswerLevel2, correctAnswerLevel2} = FunctionHandler();
  const {level2Condition, colorIndex, setColorIndex} = useContext(DataContext);

  useEffect(() => {
    setTimeout(() => {
      setColorIndex(colorIndex + 1);
    }, 1800);
  });
  return (
    <>
      {colorIndex <= 4 && (
        <span className="text-1xl xl:text-5xl pt-10 pb-8">Ingat urutan warna dibawah ini !!</span>
      )}
      {colorIndex === 0 && (
        <div className={`w-20 xl:w-36 h-20 xl:h-36 mb-10 bg-red-500`}>&nbsp;</div>
      )}
      {colorIndex === 1 && (
        <div className={`w-20 xl:w-36 h-20 xl:h-36 mb-10 bg-yellow-500`}>&nbsp;</div>
      )}
      {colorIndex === 2 && (
        <div className={`w-20 xl:w-36 h-20 xl:h-36 mb-10 bg-green-500`}>&nbsp;</div>
      )}
      {colorIndex === 3 && (
        <div className={`w-20 xl:w-36 h-20 xl:h-36 mb-10 bg-purple-500`}>&nbsp;</div>
      )}
      {colorIndex === 4 && (
        <div className={`w-20 xl:w-36 h-20 xl:h-36 mb-10 bg-sky-500`}>&nbsp;</div>
      )}
      {colorIndex > 4 && (
        <>
          <span className="text-3xl xl:text-7xl pb-10 xl:pb-20 pt-10 text-red-600 text-center font-bold">
            Siapa yang salah?
          </span>
          <div className="flex flex-col gap-10 pb-10">
            <div className="flex gap-20">
              <button
                onClick={wrongAnswerLevel2}
                value={'A'}
                className={
                  level2Condition === 'C' ? 'hidden' : 'p-3 xl:p-5 bg-gray-500 text-white'
                }>
                A. Cowo
              </button>
              <button
                onClick={wrongAnswerLevel2}
                value={'B'}
                className={
                  level2Condition === 'C' ? 'hidden' : 'p-3 xl:p-5 bg-gray-500 text-white'
                }>
                B. Mantan
              </button>
            </div>
            <div className="flex gap-20">
              <button
                onClick={correctAnswerLevel2}
                value={'C'}
                className={'p-3 xl:p-5 bg-gray-500 text-white'}>
                C. Saya
              </button>
              <button
                onClick={wrongAnswerLevel2}
                value={'D'}
                className={
                  level2Condition === 'C' ? 'hidden' : 'p-3 xl:p-5 bg-gray-500 text-white'
                }>
                D.Cewe
              </button>
            </div>
            {level2Condition === 'A' && <AlertLevel2 text="Tidak selamanya Cowo itu salah!!!" />}
            {level2Condition === 'B' && (
              <AlertLevel2 text="Belum tentu ini semua salah Mantan!!!" />
            )}
            {level2Condition === 'C' && (
              <AlertLevel2 text="Baguss karena telah mengakui kesalahan! Ya, memang terasa tidak adil, Tapi beginilah cara dunia bekerja!!" />
            )}
            {level2Condition === 'D' && (
              <AlertLevel2 text="Memang tidak selamanya Cewe itu benar,tapi kali ini Cewe tidak salah!" />
            )}
            {level2Condition === 'C' && (
              <button
                type="button"
                onClick={correctAnswer}
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Level Berikutnya
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Level2;
