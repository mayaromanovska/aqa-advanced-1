/*  Завдання 5: Об'єднання масивів

Вам потрібно створити програму, яка об'єднає два масиви в один
*/

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

function concatArrays(firstArray, secondArray){
  const newArray =  firstArray.concat(secondArray);
  return newArray;
}

console.log(concatArrays(firstArray, secondArray));
