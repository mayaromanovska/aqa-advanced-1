"use strict";

/*Завдання 5_1*: Обчислення площі та об'єму

π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

Створіть змінну radius і присвойте їй числове значення радіуса кола.
Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки
*/

let circleRadius = 5;
let circleSquare = (Math.PI * Math.pow(circleRadius, 2)).toFixed(2);
console.log(circleSquare);

circleRadius = 10;
circleSquare = (Math.PI * Math.pow(circleRadius, 2)).toFixed(2);
console.log(circleSquare);
