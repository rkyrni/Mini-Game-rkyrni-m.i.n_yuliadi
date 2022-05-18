import React, {useState} from 'react';
import AlertLevel2 from '../../../component/AlertLevel2';
import FunctionHandler from '../../../functionHandler/FunctionHandler';

const Level4 = () => {
  const {correctAnswer, wrongAnswer} = FunctionHandler();

  const [merah, setmerah] = useState(false);
  const [kuning, setKuning] = useState(false);
  const [hijau, setHijau] = useState(false);
  const [ungu, setUngu] = useState(false);
  const [biru, setBiru] = useState(false);
  const [gagal, setGagal] = useState(false);
  const handleMerah = () => {
    setmerah(true);
    setGagal(false);
  };

  const handleKuning = () => {
    if (merah) {
      setKuning(true);
      setGagal(false);
    } else {
      setGagal(true);
      wrongAnswer();
    }
  };

  const handleHijau = () => {
    if (merah && kuning) {
      setHijau(true);
      setGagal(false);
    } else {
      setGagal(true);
      wrongAnswer();
    }
  };

  const handleUngu = () => {
    if (merah && kuning && hijau) {
      setUngu(true);
      setGagal(false);
    } else {
      setGagal(true);
      wrongAnswer();
    }
  };

  const handleBiru = () => {
    if (merah && kuning && hijau && ungu) {
      correctAnswer();
      setGagal(false);
      setBiru(true);
    } else {
      setGagal(true);
      wrongAnswer();
    }
  };

  return (
    <div className="text-center grid gap-12">
      <span className="text-2xl xl:text-7xl pt-10 pb-10 xl:pb-20 text-center font-bold">
        {' '}
        Klik warna sesuai urutannya!
      </span>
      <ul className="flex gap-3 xl:gap-5 justify-self-center transition-all pb-10">
        <li
          onClick={handleHijau}
          className={hijau ? 'hidden' : 'p-6 h-6 bg-green-500 cursor-pointer'}></li>
        <li
          onClick={handleUngu}
          className={ungu ? 'hidden' : 'p-6 h-6 bg-purple-500 cursor-pointer'}></li>
        <li
          onClick={handleMerah}
          className={merah ? 'hidden' : 'p-6 h-6 bg-red-500 cursor-pointer'}></li>
        <li
          onClick={handleBiru}
          className={biru ? 'hidden' : 'p-6 h-6 bg-sky-500 cursor-pointer'}></li>
        <li
          onClick={handleKuning}
          className={kuning ? 'hidden' : 'p-6 h-6 bg-yellow-500 cursor-pointer'}></li>
      </ul>
      {gagal && <AlertLevel2 text="Urutan salah" />}
    </div>
  );
};

export default Level4;
