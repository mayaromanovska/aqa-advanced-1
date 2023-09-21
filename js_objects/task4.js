/* Завдання 4: Додавання та видалення властивостей*/

const person = {
  firstName: "Maya",
  lastName: "Romanovska",
  age: 35,
}

person.email = "maiia.romanovska@gmail.com";
delete person.age;
console.log(person);
