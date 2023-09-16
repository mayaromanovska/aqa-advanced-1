/* Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел
Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел. 
*/

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  
function countPosNegNullNumbers(numbers){
  for(const number of numbers){
    if (number > 0){
      positiveCount++;
    }
    else if (number < 0){
      negativeCount++;
    }
    else {
      zeroCount++;
    }    
  }
  console.log(`Кількість позитивних чисел: ${positiveCount}`);
  console.log(`Кількість негативних чисел: ${negativeCount}`);
  console.log(`Кількість нульових чисел: ${zeroCount}`);
}

countPosNegNullNumbers(numbers);