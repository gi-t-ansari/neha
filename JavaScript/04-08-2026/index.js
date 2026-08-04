// for (let i = 19; i <= 24; i++) {
//   const result = i % 2;
//   if (result === 0) {
//     console.log(i);
//     break;
//   }
// }

// for (let i = 17; i >= 0; i--) {
//   const result = i % 2;
//   if (result === 0) {
//     console.log(i);
//     break;
//   }
// }

const number = 18;

// for (let i = number; i <= number * 10; i = i + number) {
//   console.log(i);
// }

// i = i + number ---> i += number
// i = i - number ---> i -= number
// i = i * number ---> i *= number
// i = i / number ---> i /= number

// for (let i = 1; i <= 10; i++) {
//   console.log(i * number);
// }

//1. Print numbers from 1 to 50 but skip multiples of 5 using continue.
// for (let i = 1; i <= 50; i++) {
//   let result = i % 5;
//   if (result === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// 2. Print all numbers between 1 and 100 that are divisible by 3 and 5.
// for (let i = 1; i <= 100; i++) {
//   let divisibleByThree = i % 3;
//   let divisibleByFive = i % 5;

//   if (divisibleByFive === 0 && divisibleByThree === 0) {
//     console.log(i);
//   }
// }

// 3. Print the square of numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i * i);
//   i++;
// }

// 4. Print Elements in Reverse Order of this array.
const arr = [10, 20, 30, 40, 50];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// while loop: it separates initialization
// let i = arr.length - 1;
// while (i >= 0) {
//   console.log(arr[i]);
//   i--;
// }

// do while loop: it runs at least once.

let i = 5;

do {
  console.log(i);
  i++;
} while (i <= 4);

// while (i <= 12) {
//   console.log("1st run");
//   i++;
// }

// Array methods:

const arrOfNumber = [1, 2, 3, 4, 5];

// 1. .length: it returns the total number of elements inside array
console.log("Length of arr -->", arrOfNumber.length);

// 2. .includes(): it matched the input one by one with all elements of array and returns true or false depending upon th matching.

console.log("Example of includes --- >", arrOfNumber.includes(2));

// 3. .join(): it converts array of string into one string.

const arrOfStrings = ["My", "name", "is", "neha"];

console.log("Join operation ---->", arrOfStrings.join(" ").split(" "));

// 4. .push(): enters an element into the last of array and returns the updated array

arrOfNumber.push(6);
console.log("after a push", arrOfNumber);

// 5. .pop(): removes the last element of array and returns the updated array
arrOfNumber.pop();
console.log("after a pop", arrOfNumber);

// 6. .unshift(): adds element at the start of the array and returns the updated array
arrOfNumber.unshift(0);
console.log("after unshift -->", arrOfNumber);

// 7. .shift(): removes element at the start of the array and returns the updated array
arrOfNumber.shift();
console.log("after shift -->", arrOfNumber);
