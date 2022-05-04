import {useContext} from 'react';
import {DataContext} from '../state management/StateManagement';

const FunctionHandler = () => {
  const {level, setLevel, life, setLife} = useContext(DataContext);

  const correctAnswer = () => {
    setLevel(level + 1);
  };

  const wrongAnswer = () => {
    setLife(life - 1);
  };

  const resetLevel = () => {
    setLevel(1);
    setLife(3);
  };

  return {
    correctAnswer,
    wrongAnswer,
    resetLevel
  };
};

export default FunctionHandler;
