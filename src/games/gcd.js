import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startGcdGame() {
  const noteGcd = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    let num1 = getRandomNumber(0, 100);
    let num2 = getRandomNumber(0, 100);

    const question = `${num1} ${num2}`;

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

    return [question, String(result)];
  };

  brainBasisGame(noteGcd, taskGcd);
}
