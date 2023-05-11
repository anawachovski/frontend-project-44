// Функция генерирующая случайное целое число
export default function getRandomInt(min, max) {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  return Math.floor(Math.random() * (Max - Min)) + Min; // Максимум не вкл, минимум вкл
}
