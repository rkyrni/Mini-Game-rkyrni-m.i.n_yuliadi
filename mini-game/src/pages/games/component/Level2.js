import {useContext} from 'react';
import AlertLevel2 from '../../../component/AlertLevel2';
import FunctionHandler from '../../../functionHandler/FunctionHandler';
import {DataContext} from '../../../state management/StateManagement';

const Level2 = () => {
  const {correctAnswer, wrongAnswerLevel2, correctAnswerLevel2} = FunctionHandler();
  const {level2Condition} = useContext(DataContext);
  return (
    <>
      <span className="text-7xl pb-20 text-red-600 text-center font-bold">Siapa yang salah?</span>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <button
            onClick={wrongAnswerLevel2}
            value={'A'}
            className={level2Condition === 'C' ? 'hidden' : 'p-5 bg-gray-500 text-white'}>
            A. Cowo
          </button>
          <button
            onClick={wrongAnswerLevel2}
            value={'B'}
            className={level2Condition === 'C' ? 'hidden' : 'p-5 bg-gray-500 text-white'}>
            B. Mantan
          </button>
        </div>
        <div className="flex gap-20">
          <button
            onClick={correctAnswerLevel2}
            value={'C'}
            className={'p-5 bg-gray-500 text-white'}>
            C. Saya
          </button>
          <button
            onClick={wrongAnswerLevel2}
            value={'D'}
            className={level2Condition === 'C' ? 'hidden' : 'p-5 bg-gray-500 text-white'}>
            D.Cewe
          </button>
        </div>
        {level2Condition === 'A' && <AlertLevel2 text="Tidak selamanya Cowo itu salah!!!" />}
        {level2Condition === 'B' && <AlertLevel2 text="Belum tentu ini semua salah Mantan!!!" />}
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
  );
};

export default Level2;
