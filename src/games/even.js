import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startEvenGame() {
  const noteEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEvenNum = (num) => {
    let result = '';

    if (num % 2 === 0) {
      result = true;
    }

    return result;
  };

  const taskEven = () => {
    const randomInt = getRandomNumber(0, 10001);
    const evenNum = isEvenNum(randomInt);

    const question = `${randomInt}`;

    const result = evenNum ? 'yes' : 'no';

    return [question, result];
  };

  brainBasisGame(noteEven, taskEven);
}
