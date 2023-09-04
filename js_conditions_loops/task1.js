/*  Завдання 1: Визначення рівня успішності студента

Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. 
За допомогою конструкції if else напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки. 
*/

const averageGrade = 59;


if (averageGrade >= 0 && averageGrade < 60) {
  console.log("Незадовільно");
}
else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log("Задовільно");
}
else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log("Добре");
}
else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log("Дуже добре");
}
else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log("Відмінно");
}
else {
  console.log("Invalid value entered. Value should be a number from 1 to 100.");
}
