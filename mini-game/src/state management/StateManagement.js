import {createContext, useState} from 'react';

export const DataContext = createContext();

export const ProviderContext = (props) => {
  const [level, setLevel] = useState(1);
  const [life, setLife] = useState(3);
  const [level2Condition, setLevel2Condition] = useState('');
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <DataContext.Provider
      value={{
        level,
        setLevel,
        life,
        setLife,
        level2Condition,
        setLevel2Condition,
        colorIndex,
        setColorIndex
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
