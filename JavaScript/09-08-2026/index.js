const arrOfNumber = [1, 2, 3, 4, 5];

// 1. .length: it returns the total number of elements inside array
// console.log("Length of arr -->", arrOfNumber.length);

// 2. .includes(): it matched the input one by one with all elements of array and returns true or false depending upon th matching.

// console.log("Example of includes --- >", arrOfNumber.includes(2));

// 3. .join(): it converts array of string into one string.

const arrOfStrings = ["My", "name", "is", "neha"];

// console.log("Join operation ---->", arrOfStrings.join(" "));

// 4. .push(): enters an element into the last of array and returns the updated array

arrOfNumber.push(6);
// console.log("after a push", arrOfNumber);

// 5. .pop(): removes the last element of array and returns the updated array
arrOfNumber.pop();
// console.log("after a pop", arrOfNumber);

// 6. .unshift(): adds element at the start of the array and returns the updated array
arrOfNumber.unshift(0);
// console.log("after unshift -->", arrOfNumber);

// 7. .shift(): removes element at the start of the array and returns the updated array
arrOfNumber.shift();
// console.log("after shift -->", arrOfNumber);

// 8. .map(): it iterates through all elements and returns the updated array.

// const newArray = [1, 2, 3, 4, 5];

// return the new array with squaring each element
const makeSeuqreOfElement = (arr) => {
  const result = arr.map((ele) => ele * ele);
  //   const result = arr.map((ele) => {
  //     return ele * ele;
  //   });

  //   const result = [];

  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     result.push(arr[i] * arr[i]);
  //   }

  console.log(result);
};

// makeSeuqreOfElement(newArray);

const findIndexofEveryEle = (arr) => {
  arr.map((ele, ind) => {
    console.log(`Index of ${ele} is ${ind}`);
  });
};

// findIndexofEveryEle(newArray);

// 9 .filter(): filters the array based on condition and returns the updated array, returns empty array if not match

const newArray = [1, 2, 3, 4, 5];

const arrOfStudents = [
  { name: "neha", age: 34 },
  { name: "sunita", age: 29 },
  { name: "babita", age: 28 },
  { name: "sunita", age: 32 },
];

console.log(arrOfStudents.filter((ele) => ele.age > 28));

const filterEveryEvenNumberInsideArray = (arr) => {
  // const result = arr.filter((ele) => ele % 2 === 0);

  const result = arr.filter((ele) => {
    if (ele % 2 === 0) {
      return ele;
    }
  });

  console.log(result);
};
// filterEveryEvenNumberInsideArray(newArray);

const arrOfMarks = [25, 30, 39, 39, 54];

const filterPassedStudents = (arr) => {
  const result = arr.filter((ele) => ele % 10 === 0);
  console.log(result);
};

filterPassedStudents(arrOfMarks);

// 10 .find(): finds the matching element based on the condition and returns that element, returns undefined if does not match any element

const findSixty = arrOfMarks.find((ele) => ele % 10 === 0);
console.log(findSixty);

// 11 .sort(): it sorts the array from lower to upper or upper to lower, and returns the sorted array

// const arrayOfAge = [25, 18, 16, 29, 30, 27, 18];
// const arrayOfName = ["sita", "Hita", "neha", "Sunita"]; //array of strings cannot be sorted with .sort() method

console.log(arrOfStudents.sort((a, b) => a.age - b.age));

// console.log(arrayOfAge.sort((a, b) => a - b));
// console.log(arrayOfAge.sort((a, b) => b - a));

// console.log(arrayOfName.sort((a, b) => a - b));
// console.log(arrayOfName.sort((a, b) => b - a));

// const convertToAcsendingOrder = (arr) => {
//   const result = arrayOfAge.sort((a, b) => a - b);
//   console.log(result);
// };

// 12 .findIndex(): returns the index of first elemant that matches the conditions

// console.log(arrayOfAge.findIndex((ele) => ele === 18));

// 13 .slice(): it breaks the array into small portions and returns the updated array without updating the original array

const arrayOfName = ["sita", "Hita", "neha", "Sunita"];

console.log(`slice returned --> [${arrayOfName.slice(1, 4)}]`);
console.log(`original array after slice ---> [${arrayOfName}]`);

// 14 .splice(): it breaks the array into small portions. it modifies original array

// 15 .reduce(): reduces an array into a single value based on the calculation.

console.log(`splice returned --> [${arrayOfName.splice(1, 4)}]`);
console.log(`original array after splice ---> [${arrayOfName}]`);

const arrayOfAge = [2, 1, 3, 4, 5];

// console.log(arrayOfAge.reduce((ele, acc) => ele + acc)); // returns the sum of every element
// console.log(arrayOfAge.reduce((ele, acc) => ele * acc)); // returns the multiplication of every element

// 16 .reverse(): it reverses the array and returns the updated array
// console.log(arrayOfAge.reverse());

//Q: 3, 4: start from n and log n+1 till m iterations

const returnPlusIterations = (n, m) => {
  let arr = [];
  // for (let i = n; i < n + m; i++) {
  //   arr.push(i);
  // }

  for (let i = 0; i < m; i++) {
    arr.push(n + i);
  }

  console.log(arr);
};

returnPlusIterations(3, 6);
