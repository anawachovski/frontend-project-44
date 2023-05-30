import getRandomNumber from '../utils.js';
import startBasisGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  let result = 0;

  if (num1 === 0 || num2 === 0) {
    result = 1;
  }
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
    result = num1 + num2;
  }
  return result;
};

const getGameRounds = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);

  const question = `${num1} ${num2}`;
  // const result = getGreatestCommonDivisor(num1, num2);
  const currentAnswer = String(getGreatestCommonDivisor(num1, num2));
  return [question, currentAnswer];
};

const startGcdGame = () => {
  startBasisGame(description, getGameRounds);
};

export default startGcdGame;
