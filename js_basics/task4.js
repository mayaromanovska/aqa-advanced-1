"use strict";

/*Завдання 4: Числа та булі

Створіть змінну яка буде символізувати вік певної персони. Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної. Виведіть усі змінні в консоль.
*/

const ADULT_AGE = 18;
let age;
let isAdult;

age = 35;
isAdult = age > ADULT_AGE;
console.log("Age: " + age);
console.log("Adult: " + isAdult);

age = 14;
isAdult = age > ADULT_AGE;
console.log("Age: " + age);
console.log("Adult: " + isAdult);