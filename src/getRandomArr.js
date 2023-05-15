import getRandomInt from './getRandomInt.js';

// Функция генерирующая рандомный массив
export default function getRandomArr() {
  const arr = [];
  arr[0] = getRandomInt(5, 20); // Первый рандомный элемент массива

  const randomDiff = getRandomInt(5, 20); // Разница между элементами массива

  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + randomDiff;
  }

  return arr;
}
