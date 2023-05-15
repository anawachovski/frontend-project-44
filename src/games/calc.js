import _ from 'lodash';
import brainBasisGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

export default function calc() {
  const noteCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const randomInt1 = getRandomInt(0, 10);
    const randomInt2 = getRandomInt(0, 10);
    const randomElem = _.sample(['+', '-', '*']);

    const question = `${randomInt1} ${randomElem} ${randomInt2}`;

    let result = 0;
    switch (randomElem) {
      case '+':
        result = randomInt1 + randomInt2;
        break;
      case '-':
        result = randomInt1 - randomInt2;
        break;
      case '*':
        result = randomInt1 * randomInt2;
        break;
      default:
        result = null;
    }

    return [question, String(result)];
  };

  brainBasisGame(noteCalc, taskCalc);
}
