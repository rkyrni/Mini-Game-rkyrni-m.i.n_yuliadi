import {createContext, useState} from 'react';

export const DataContext = createContext();

export const ProviderContext = (props) => {
  const [level, setLevel] = useState(1);

  return (
    <DataContext.Provider
      value={{
        level,
        setLevel
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
