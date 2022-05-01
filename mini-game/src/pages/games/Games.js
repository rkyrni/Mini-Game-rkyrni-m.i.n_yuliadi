import React, {useContext} from 'react';
import {DataContext} from '../../state management/StateManagement';

const Games = () => {
  const {level} = useContext(DataContext);
  return <div className="text-5xl flex items-center justify-center">{level}</div>;
};

export default Games;
