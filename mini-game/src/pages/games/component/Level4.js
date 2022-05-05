import React, {useState} from 'react';
import AlertLevel2 from '../../../component/AlertLevel2';

const Level4 = () => {
  const [merah, setmerah] = useState(false);
  const [kuning, setKuning] = useState(false);
  const [hijau, setHijau] = useState(false);
  const [ungu, setUngu] = useState(false);
  const [biru, setBiru] = useState(false);
  const [gagal, setGagal] = useState(false);
  const [berhasil, setBerhasil] = useState(false);
  const handleMerah = () => {
    setmerah(true);
  };

  const handleKuning = () => {
    if (merah) setKuning(true);
    else {
      setmerah(true);
      setKuning(true);
      setHijau(true);
      setUngu(true);
      setBiru(true);
      setGagal(true);
    }
  };

  const handleHijau = () => {
    if (merah && kuning) setHijau(true);
    else {
      setmerah(true);
      setKuning(true);
      setHijau(true);
      setUngu(true);
      setBiru(true);
      setGagal(true);
    }
  };

  const handleUngu = () => {
    if (merah && kuning && hijau) setUngu(true);
    else {
      setmerah(true);
      setKuning(true);
      setHijau(true);
      setUngu(true);
      setBiru(true);
      setGagal(true);
    }
  };

  const handleBiru = () => {
    if (merah && kuning && hijau && ungu) {
      setBerhasil(true);
      setBiru(true);
    } else {
      setmerah(true);
      setKuning(true);
      setHijau(true);
      setUngu(true);
      setBiru(true);
      setGagal(true);
    }
  };

  return (
    <div>
      <ul>
        <li
          onClick={handleHijau}
          className={hijau ? 'hidden' : 'p-6 h-6 bg-green-600 cursor-pointer'}></li>
        <li
          onClick={handleUngu}
          className={ungu ? 'hidden' : 'p-6 h-6 bg-purple-600 cursor-pointer'}></li>
        <li
          onClick={handleMerah}
          className={merah ? 'hidden' : 'p-6 h-6 bg-red-600 cursor-pointer'}></li>
        <li
          onClick={handleBiru}
          className={biru ? 'hidden' : 'p-6 h-6 bg-blue-600 cursor-pointer'}></li>
        <li
          onClick={handleKuning}
          className={kuning ? 'hidden' : 'p-6 h-6 bg-yellow-600 cursor-pointer'}></li>
      </ul>
      {gagal && <AlertLevel2 text="KAMU GAGAL" />}
      {berhasil && <AlertLevel2 text="KAMU Berhasil" />}
    </div>
  );
};

export default Level4;
