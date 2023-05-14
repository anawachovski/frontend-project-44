import getRandomInt from '../getRandomInt.js';
import isEvenNum from '../isEvenNum.js';
import brainBasisGame from '../index.js';

export default function even() {
  const noteEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const randomInt = getRandomInt(0, 10001);
    const evenNum = isEvenNum(randomInt);

    const question = `${randomInt}`;

    let result = '';
    switch (evenNum) {
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

  brainBasisGame(noteEven, taskEven);
}
