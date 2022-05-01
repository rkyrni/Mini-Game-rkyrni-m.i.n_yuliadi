import React, {useEffect, useState} from 'react';
import './Landing.css';
import IconLanding from '../../assets/img/icon-landing.png';
import IconText from '../../assets/img/text-landing.png';
import {Link} from 'react-router-dom';

const Landing = () => {
  const [animasi, setAnimasi] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (!animasi) {
        setAnimasi(true);
      } else {
        setAnimasi(false);
        console.log(animasi);
      }
    }, 2500);
  });

  return (
    <>
      <div className="container-landing bg-gray-100 w-full">
        <div>
          <figure className="ml-[6rem]">
            <img src={`${IconText}`} alt="text" />
          </figure>
          <div className={animasi ? 'animasi btn-icon-play' : 'btn-icon-play'}>
            <button>
              <Link to={'/game'}>
                <img src={`${IconLanding}`} alt="icon-Landing" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
