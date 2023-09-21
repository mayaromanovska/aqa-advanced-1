/* Завдання 5: Перебір властивостей об'єкта */ 

const users = [
  { name: "John", email: "user1@gmail.com", age: 30 },
  { name: "Jane", email: "user2@gmail.com", age: 25 },
  { name: "Mike", email: "user3@gmail.com", age: 40 }
];

for (const {name, email, age} of users){ 
  console.log(`${name} is ${age} years old and his/her email is ${email}`);
}