import getRandomNumber from '../utils.js';
import startBasisGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => {
  let result;
  if (num % 2 === 0) {
    result = true;
  }

  return result;
};

const getGameRounds = () => {
  const randomInt = getRandomNumber(0, 10001);
  const question = `${randomInt}`;
  const correctAnswer = isEvenNum(randomInt) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  startBasisGame(description, getGameRounds);
};

export default startEvenGame;
