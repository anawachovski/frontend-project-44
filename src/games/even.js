import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startEvenGame() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEvenNum = (num) => {
    let result = '';

    if (num % 2 === 0) {
      result = true;
    }

    return result;
  };

  const rounds = () => {
    const randomInt = getRandomNumber(0, 10001);

    const question = `${randomInt}`;

    const correctAnswer = isEvenNum(randomInt) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  brainBasisGame(description, rounds);
}
