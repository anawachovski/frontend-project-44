import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startPrimeGame() {
  const notePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrimeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const taskPrime = () => {
    const randomInt = getRandomNumber(0, 102);
    const primeNum = isPrimeNum(randomInt);

    const question = `${randomInt}`;

    const result = primeNum ? 'yes' : 'no';

    return [question, result];
  };

  brainBasisGame(notePrime, taskPrime);
}
