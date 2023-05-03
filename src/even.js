import readlineSync from 'readline-sync';

// Функция вопрос-ответ
export default function questionIsEvenNum() {
// Приветствие
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Функция генерирующая случайное целое число
  const getRandomInt = (min, max) => {
    const Min = Math.ceil(min);
    const Max = Math.floor(max);
    return Math.floor(Math.random() * (Max - Min)) + Min; // Максимум не вкл, минимум вкл
  };

  // Функция проверяющая случайное число на четность
  const isEven = (num) => {
    let resultCorrect = '';
    if (num % 2 === 0) {
      resultCorrect = true;
    }
    return resultCorrect;
  };

  for (let i = 0; i < 3;) {
    const randomInt = getRandomInt(0, 10001);
    const answer = readlineSync.question(`Question: ${randomInt} `);
    const evenNum = isEven(randomInt);

    if ((answer === 'yes' && evenNum === true) || (answer === 'no' && evenNum !== true)) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'yes' && evenNum !== true) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      i = 0;
    } else if (answer === 'no' && evenNum === true) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
