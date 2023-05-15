import getRandomInt from '../getRandomInt.js';
import isPrimeNum from '../isPrimeNum.js';
import brainBasisGame from '../index.js';

export default function prime() {
  const notePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskPrime = () => {
    const randomInt = getRandomInt(0, 102);
    const primeNum = isPrimeNum(randomInt);

    const question = `${randomInt}`;

    let result = '';
    switch (primeNum) {
      case true:
        result = 'yes';
        break;
      case false:
        result = 'no';
        break;
      default:
        result = null;
    }

    return [question, result];
  };

  brainBasisGame(notePrime, taskPrime);
}
