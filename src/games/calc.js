import startBasisGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const chooseElement = (randomInt1, randomInt2, randomElem) => {
  switch (randomElem) {
    case '+':
      return randomInt1 + randomInt2;
    case '-':
      return randomInt1 - randomInt2;
    case '*':
      return randomInt1 * randomInt2;
    default:
      throw new Error(`Unknown element: '${randomElem}'!`);
  }
};

const getGameRounds = () => {
  const randomInt1 = getRandomNumber(0, 10);
  const randomInt2 = getRandomNumber(0, 10);

  const randomIndex = getRandomNumber(0, 3);
  const elements = ['+', '-', '*'];
  const randomElem = elements[randomIndex];

  const question = `${randomInt1} ${randomElem} ${randomInt2}`;
  const correctAnswer = String(chooseElement(randomInt1, randomInt2, randomElem));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startBasisGame(description, getGameRounds);
};

export default startCalcGame;
