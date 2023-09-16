/* Завдання 2: Копіювання з мутацією

Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map. 
 */

const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map((number, index) => number * index);
console.log(newArray);

