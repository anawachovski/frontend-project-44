import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startPrimeGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrimeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const rounds = () => {
    const randomInt = getRandomNumber(0, 102);

    const question = `${randomInt}`;

    const correctAnswer = isPrimeNum(randomInt) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  brainBasisGame(description, rounds);
}
