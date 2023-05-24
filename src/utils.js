// Функция генерирующая случайное целое число
export default function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не вкл, минимум вкл
}
