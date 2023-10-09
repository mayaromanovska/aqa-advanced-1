/* Завдання 6: Сортування масивів
 */

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newArray = numbersList.slice(0);
newArray.sort((num1, num2) => num1 - num2);
console.log(newArray);
