import readlineSync from 'readline-sync';

export default function startBasisGame(description, getTask) {
  // Приветствие
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Вывод задания игры
  console.log(description);

  // Цикл игры(3 раунда)
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, result] = getTask();
    console.log(`Question: ${question}`);

    const userAnswer = (readlineSync.question('Your answer: '));
    const correctAnswer = result;

    // Сравниваем ответ пользователя с верным ответом
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
