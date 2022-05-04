import React from 'react';
import {useContext} from 'react';
import {DataContext} from '../../../state management/StateManagement';
import SvgLifeComponent from './SvgLifeComponent';

const LifeComponent = () => {
  const {life} = useContext(DataContext);

  return (
    <div className="text-rose-500">
      {life === 1 && <SvgLifeComponent />}
      {life === 2 && (
        <div className="flex gap-2">
          <SvgLifeComponent />
          <SvgLifeComponent />
        </div>
      )}
      {life === 3 && (
        <div className="flex gap-2">
          <SvgLifeComponent />
          <SvgLifeComponent />
          <SvgLifeComponent />
        </div>
      )}
    </div>
  );
};

export default LifeComponent;
