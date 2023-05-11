import readlineSync from 'readline-sync';

export default function brainBasisGame(note, task) {
  // Приветствие
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Вывод задания игры
  console.log(note);

  // Цикл игры(3 раунда)
  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionResult = task();
    console.log(`Question: ${pairOfQuestionResult[0]}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = pairOfQuestionResult[1];

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
