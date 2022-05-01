import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../state management/StateManagement';

const Navigation = () => {
  const {level} = useContext(DataContext);
  return (
    <div
      className={`w-full h-20 bg-gray-900 text-gray-200 font-medium text-base shadow-md shadow-gray-400`}>
      <div className={`flex items-center justify-between w-full h-full p-3`}>
        <div className={`flex gap-3 justify-center items-start`}>
          <Link
            to={`/`}
            className={`cursor-pointer p-3 hover:bg-indigo-600 hover:text-white rounded-md`}>
            Home
          </Link>
          <Link
            to={`/games`}
            className={`cursor-pointer p-3 hover:bg-indigo-600 hover:text-white rounded-md`}>
            Games
          </Link>
          <Link
            to={`/about`}
            className={`cursor-pointer p-3 hover:bg-indigo-600 hover:text-white rounded-md`}>
            About
          </Link>
        </div>
        <span className={`p-3 bg-indigo-600 text-white rounded-md`}>Level : {level}</span>
      </div>
    </div>
  );
};

export default Navigation;
