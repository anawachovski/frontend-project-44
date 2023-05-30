import getRandomNumber from '../utils.js';
import startBasisGame from '../index.js';

const description = 'What number is missing in the progression?';

// Функция генерирующая рандомный массив
const getRandomProgression = (firstNumberOfArray, stepOfProgression, numberOfSteps) => {
  const randomArrayProgression = [];
  randomArrayProgression[0] = firstNumberOfArray; // Первый элемент массива

  for (let i = 1; i <= numberOfSteps; i += 1) {
    randomArrayProgression[i] = randomArrayProgression[i - 1] + stepOfProgression;
  }

  return randomArrayProgression;
};

const getGameRounds = () => {
  const firstNumberOfArray = getRandomNumber(0, 100);
  const stepOfProgression = getRandomNumber(1, 20);
  const numberOfSteps = 9;

  const correctArr = getRandomProgression(firstNumberOfArray, stepOfProgression, numberOfSteps);
  const len = correctArr.length - 1;
  const randomIndex = getRandomNumber(0, len); // Генерируем случайный индекс элемента массива

  const safeIndex = correctArr[randomIndex]; // Сохраняем в переменную значение рандомного индекса
  correctArr[randomIndex] = '..'; // Заменяем его на ..

  const question = `${correctArr.join(' ')}`;
  const correctAnswer = String(safeIndex);

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startBasisGame(description, getGameRounds);
};

export default startProgressionGame;
