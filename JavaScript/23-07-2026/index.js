// FUNCTIONS IN JS

// SMALL BLOCK OF CODE THAT CAN BE CALL AGAIN AND AGAIN
// It accepts arguments and returns an output based on the operation with the help of return keyword
//

function sumOfTwoNumber(a, b) {
  const result = a + b;
  return result;
}

// console.log(sumOfTwoNumber(1, 2));

function squareOfAnInteger(a) {
  const result = a * a;
  return result;
}

// console.log(squareOfAnInteger(4));
// console.log(squareOfAnInteger(16));

function isEven(a) {
  const result = a % 2;
  return result === 0;
}

// console.log(isEven(8));
// console.log(isEven(9));

// Types of Function
// 1. Anonymous Function: Function without a name is called an anonymous function

// function () {

// }

// 2. Arrow Function: Functions written with the help of fat arrow is called an arrow function. It was introduced with ES6 features. () => {}.

const findSquare = (a) => {
  const result = a * a;
  return result;
};

// a. If a function has only one arguments then we can skip the first brackets().
// const isNumberEven = a => {
//   const result = a % 2;
//   return result === 0;
// };

// console.log(findSquare(25));

// b. If the function is in one line then we can skip curly braces and return keyword.

const findSumOfTwoNumber = (a, b) => a + b;

// console.log(findSumOfTwoNumber(5, 9));

// 3. IIFE: Immediately Invoked Function Expression. A function that is called immediately after declaration is called IIFE.

// (function () {
//   const result = 8 % 2;
//   console.log(result === 0);
// })();

// 4. Higher Order Function: A function that either takes another function as an argument or returns a function is called HOF.

function outerFn(a) {
  return function innerFn() {
    a * a;
  };
}

// 5. Callback Function: A function that calls itself again and again.

function findSumOfNNaturalNumbers(n) {
  if (n === 1) {
    return 1;
  }

  return n + findSumOfNNaturalNumbers(n - 1);
}

console.log(findSumOfNNaturalNumbers(3)); // 3 + 2 + 1
console.log(findSumOfNNaturalNumbers(5)); // 5 + 4 + 3 + 2 + 1
console.log(findSumOfNNaturalNumbers(20));
