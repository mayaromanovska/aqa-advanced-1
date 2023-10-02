/* Завдання 2 */ 
     
function getTodoById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json());
}      

function getUserById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json());
} 

// виклик getTodoById()
getTodoById(1).then(value => console.log("Todo data: ", value));
getTodoById(2).then(value => console.log("Todo data: ", value));
getTodoById(3).then(value => console.log("Todo data: ", value));
getTodoById(4).then(value => console.log("Todo data: ", value));
getTodoById(5).then(value => console.log("Todo data: ", value));

// виклик getUserById()
getUserById(1).then(value => console.log("User data: ", value));
getUserById(2).then(value => console.log("User data: ", value));
getUserById(3).then(value => console.log("User data: ", value));
getUserById(4).then(value => console.log("User data: ", value));
getUserById(5).then(value => console.log("User data: ", value));

//Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 
//1-2. Присвойте значення отримані від цих виразів до змінних
const promise1 = Promise.all([getTodoById(1), getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);
promise1.then(value => console.log(value));

const promise2 = Promise.race([getTodoById(1), getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);
promise2.then(value => console.log(value));

const promise3 = Promise.all([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)]);
promise3.then(value => console.log(value));

const promise4 = Promise.race([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)]);
promise4.then(value => console.log(value));