/*  Завдання 2: Визначення рівня успішності студента

Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. 
За допомогою конструкції switch/case напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки. 
*/

const averageGrade = 95;

switch (true) {
  case averageGrade >= 0 && averageGrade < 60: 
    console.log("Незадовільно");
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log("Задовільно");
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log("Добре");
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log("Дуже добре");
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log("Відмінно");
    break;
  default: 
    console.log("Invalid value entered. Value should be a number from 1 to 100.");
  }
