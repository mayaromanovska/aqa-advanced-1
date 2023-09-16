/* Завдання 1: Оголошення та виклик функції

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10) і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/

// Function Declaration
function calculateRectangleSquare(width, height) {
  return width * height;
}

console.log(calculateRectangleSquare(5, 10));

// Function Expression
const RectangleSquare1 = function(width, height) {
  return width * height;
  };

console.log(RectangleSquare1(5, 10));

// Arrow Function
const RectangleSquare2 = (width, height) => width * height;

console.log(RectangleSquare2(5, 10));