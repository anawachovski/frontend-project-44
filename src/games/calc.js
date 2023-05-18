import _ from 'lodash';
import brainBasisGame from '../index.js';
import getRandomNumber from '../utils.js';

export default function startCalcGame() {
  const questionCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const randomInt1 = getRandomNumber(0, 10);
    const randomInt2 = getRandomNumber(0, 10);
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
			throw new Error(`Unknown element: '${randomElem}'!`);
    }

    return [question, String(result)];
  };

  brainBasisGame(questionCalc, taskCalc);
}
