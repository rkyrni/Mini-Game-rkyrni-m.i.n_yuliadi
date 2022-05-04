import {createContext, useState} from 'react';

export const DataContext = createContext();

export const ProviderContext = (props) => {
  const [level, setLevel] = useState(1);
  const [life, setLife] = useState(3);

  return (
    <DataContext.Provider
      value={{
        level,
        setLevel,
        life,
        setLife
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
