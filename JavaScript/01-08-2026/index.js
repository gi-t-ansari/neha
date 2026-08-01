// Loop

// console.log(1);
//
// console.log(10);

// 1. For Loop:
// a. initialization
// b. condition
// c. increment/decrement

// print number from 1 to 10;
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// console.log(12 <= 11);
// Print every character of a word
const someWord = "jagyDJKhgdskjghsad";
// for (let i = 0; i <= someWord.length - 1; i++) {
//   console.log(someWord.charAt(i));
// }

// const printEveryChar = (someWord) => {
//   let index = 0;
//   if (index <= someWord.length - 1) {
//     console.log(someWord.charAt(index));
//   }
//   index++;
//   printEveryChar(someWord);
// };

// print 10 - 1

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = someWord.length - 1; i >= 0; i--) {
//   console.log(`Condition ${i >= 0}, Char at ${i} -->  ${someWord.charAt(i)}`);
// }

// const arrayOfNumbers = [1, 10, 65, 5, 6];

// for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
//   let result = arrayOfNumbers[i] % 2;
//   if (result === 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }

// lorem or ipsem;

const someSentence = "My name is nahe";
// for (let i = 0; i <= someSentence.length - 1; i++) {
//   if (someSentence.charAt(i) === " ") {
//     continue;
//   } else {
//     console.log(someSentence.charAt(i));
//   }
// }

// const someNumber = 17;
// for (let i = someNumber; i >= 1; i--) {
//   let result = i % 2;
//   if (result === 0) {
//     console.log(i);
//   }
// }

for (let i = 0; i <= someSentence.length - 1; i++) {
  if (someSentence.charAt(i) === " ") {
    break;
  }
  console.log(someSentence.charAt(i));
}
