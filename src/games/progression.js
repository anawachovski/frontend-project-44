import getRandomArr from '../getRandomArr.js';
import getRandomInt from '../getRandomInt.js';
import brainBasisGame from '../index.js';

export default function startProgressionGame() {
  const questionProgression = 'What number is missing in the progression?';

  const taskProgression = () => {
    const correctArr = getRandomArr(); // Генерируем массив
    // const correctStr = correctArr.join(' ');
    const len = correctArr.length - 1;
    const randomIndex = getRandomInt(0, len); // Генерируем случайный индекс элемента массива

    const safeIndex = correctArr[randomIndex]; // Сохраняем в переменную значение рандомного индекса
    correctArr[randomIndex] = '..'; // Заменяем его на ..

    const question = `${correctArr.join(' ')}`;

    const result = safeIndex;

    return [question, String(result)];
  };

  brainBasisGame(questionProgression, taskProgression);
}
