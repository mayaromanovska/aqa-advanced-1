/* Завдання 3: Обчислення суми елементів масиву

Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.
*/

const numbers = [10, 20, 30, 40, 50];

function calculateSum(numbers){
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

console.log(calculateSum(numbers));
