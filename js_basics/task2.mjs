"use strict";
import chalk from 'chalk';

/*Завдання 2: Встановлення залежностей та їх використання

Встновіть нову залежність до вашого проекту - chalk (npmjs.com/package/chalk?activeTab=readme). Використайте її для виведення в консоль довільного кольорового тексту. На сайті npm ви можете не лише скопіювати команду для встановлення але й побачити як користуватися цією бібліотекою. 
*/

const MESSAGE_IN_COLOR = chalk.green("HELLO CHALK!");
console.log(MESSAGE_IN_COLOR);