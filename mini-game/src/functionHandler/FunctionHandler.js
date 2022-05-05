import {useContext} from 'react';
import {DataContext} from '../state management/StateManagement';

const FunctionHandler = () => {
  const {level, setLevel, life, setLife, setLevel2Condition} = useContext(DataContext);

  const correctAnswer = () => {
    setLevel(level + 1);

    // ==== Conditional Level 2 ===
    if (level === 2) setLevel2Condition('');
  };

  const wrongAnswer = () => {
    setLife(life - 1);
  };

  const wrongAnswerLevel2 = (event) => {
    setLife(life - 1);

    const noValue = event.target.value;
    if (noValue === 'A') setLevel2Condition('A');
    else if (noValue === 'B') setLevel2Condition('B');
    else if (noValue === 'D') setLevel2Condition('D');
  };

  const correctAnswerLevel2 = (event) => {
    setLevel2Condition('C');
  };

  const resetLevel = () => {
    setLevel(1);
    setLife(3);

    // ==== Conditional Level 2 ===
    if (level === 2) setLevel2Condition('');
  };

  return {
    correctAnswer,
    wrongAnswer,
    resetLevel,
    wrongAnswerLevel2,
    correctAnswerLevel2
  };
};

export default FunctionHandler;
