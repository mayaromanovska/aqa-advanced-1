/* Завдання 4: Відбір парних чисел

Вам потрібно створити програму, яка відфільтровує парні числа з масиву.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createArray(numbers){
  const newArray = numbers.filter((number) => number % 2 === 0);
  console.log(newArray);
}

createArray(numbers);