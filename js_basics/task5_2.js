"use strict";

/*Завдання 5_2*: Обчислення площі та об'єму

Створіть змінну length і присвойте їй числове значення довжини прямокутника.
Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки
*/

let rectangleLength = 5.55;
let rectangleWidth = 4.44;
let rectangleSquare = (rectangleLength * rectangleWidth).toFixed(2);
console.log(rectangleSquare);

rectangleLength = 1.23;
rectangleWidth = 4.56;
rectangleSquare = (rectangleLength * rectangleWidth).toFixed(2);
console.log(rectangleSquare);