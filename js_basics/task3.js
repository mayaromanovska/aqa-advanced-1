"use strict";

/*Завдання 3: Конкатенація радків та шаблонний рядок

Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль. 
*/

let namePerson1;
let namePerson2;
let greeting;

namePerson1 = "Anna";
namePerson2 = "Sofia";
greeting = "Hello " + namePerson1 + " and " + namePerson2 + "!";
console.log(greeting); 

namePerson1 = "Ivan";
namePerson2 = "Maria";
greeting = `Hello ${namePerson1} and ${namePerson2}!`;
console.log(greeting); 