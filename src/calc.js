import readlineSync from 'readline-sync';
import _ from 'lodash';

export default function calcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  // Функция генерирующая случайное целое число
  const getRandomInt = (min, max) => {
    const Min = Math.ceil(min);
    const Max = Math.floor(max);
    return Math.floor(Math.random() * (Max - Min)) + Min; // Максимум не вкл, минимум вкл
  };
  // Функция калькулятор
  for (let i = 0; i < 3;) {
    const randomInt1 = getRandomInt(0, 10);
    const randomInt2 = getRandomInt(0, 10);
    const randomElem = _.sample(["+", "-", "*"]);

    const answer = readlineSync.question(`Question: ${randomInt1} ${randomElem} ${randomInt2}\nYour answer: `);

    let correctAnswer;

	 if (randomElem === '+') {
		correctAnswer = randomInt1 + randomInt2;
	 } else if (randomElem === '-') {
		correctAnswer = randomInt1 - randomInt2;
	 } else if (randomElem === '*') {
		correctAnswer = randomInt1 * randomInt2;
	 }

	 if (Number(correctAnswer) === Number(answer)) {
		console.log("Correct!");
		i += 1;
	 } else {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
		i = 0;
	 }
	}
	console.log(`Congratulations, ${name}!`);
}