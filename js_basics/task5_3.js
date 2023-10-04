"use strict";

/*Завдання 5_3*: Обчислення площі та об'єму

Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки
*/

let cylinderHeight = 2.22;
let cylinderRadius = 4;
let cylinderVolume = (Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight).toFixed(2);
console.log(cylinderVolume);

cylinderHeight = 1.11;
cylinderRadius = 2;
cylinderVolume = (Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight).toFixed(2);
console.log(cylinderVolume);
