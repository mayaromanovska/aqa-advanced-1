/* Завдання 4: Обробка помилок за допомогою try-catch-finally

Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції divide використайте блок try, щоб поділити numerator на denominator.
У разі помилки ділення, якщо denominator дорівнює 0 або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Створіть блок catch в якому виведіть повідомлення про помилку в консоль.
Використовуючи блок finally, завершіть функцію, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
*/

function divide(numerator, denominator){
  try{
    if (typeof numerator !== 'number' || typeof denominator !== 'number'){
      throw new Error ("Invalid numerator or denominator are entered. They should be numbers.");
    }
    else if(denominator === 0){
      throw new Error ("Invalid denominator entered. Denominator cannot be zero.");
    } 
    else {
    // тут спочатку зробила з return `Result: ${numerator / denominator}`, але в цьому випадку
    // в консоль спочатку пише "Робота завершена.", а потiм вже результат виконання від ділення
      console.log(`Result: ${numerator / denominator}`); 
    
  }
  }catch(err){
    console.log("Error: ", err.message);
  }finally {
    console.log("Робота завершена.");
  }
}

divide(4,2);
divide(4,0);
divide("a",2);
