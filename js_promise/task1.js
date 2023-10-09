/* Завдання 1 */

function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printWithDelay("Hello world!", 3000);
