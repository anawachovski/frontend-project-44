import getRandomNumber from '../utils.js';
import brainBasisGame from '../index.js';

export default function startProgressionGame() {
  const questionProgression = 'What number is missing in the progression?';
  
  // Функция генерирующая рандомный массив
  const getRandomArray = () => {
    const arr = [];
    arr[0] = getRandomNumber(5, 20); // Первый рандомный элемент массива
    const randomDiff = getRandomNumber(5, 20); // Разница между элементами массива

    for (let i = 1; i < 10; i += 1) {
      arr[i] = arr[i - 1] + randomDiff;
    }

    return arr;
  };

  const taskProgression = () => {
    const correctArr = getRandomArray(); // Генерируем массив

    const len = correctArr.length - 1;
    const randomIndex = getRandomNumber(0, len); // Генерируем случайный индекс элемента массива

    const safeIndex = correctArr[randomIndex]; // Сохраняем в переменную значение рандомного индекса
    correctArr[randomIndex] = '..'; // Заменяем его на ..

    const question = `${correctArr.join(' ')}`;

    const result = safeIndex;

    return [question, String(result)];
  };

  brainBasisGame(questionProgression, taskProgression);
}
