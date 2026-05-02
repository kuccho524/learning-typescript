"use strict";
// Generics
// <型名>
// function getFirstElement<T>(array: T[]): T {
//   return array[0];
// }
// const users = ['tanaka', 'sato', 'suzuki'];
// const firstUser = getFirstElement(users);
// console.log(firstUser);
// const numbers = [1, 2, 3];
// const firstNumber = getFirstElement(numbers);
// console.log(firstNumber);
function createPair(first, second) {
    return [first, second];
}
const stringNumberPair = createPair('test', 25);
console.log(stringNumberPair);
