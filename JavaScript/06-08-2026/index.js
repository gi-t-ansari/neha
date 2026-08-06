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

const newArray = [1, 2, 3, 4, 5];

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

findIndexofEveryEle(newArray);

// .filter(): filters the array based on condition and returns the updated array, returns empty array if not match

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

const arrOfMarks = [25, 34, 39, 39, 54];

const filterPassedStudents = (arr) => {
  const result = arr.filter((ele) => ele % 10 === 0);
  console.log(result);
};

filterPassedStudents(arrOfMarks);

// .find(): finds the matching elemnt based on the condition and returns that element, returns undefined if does not match any element

const findSixty = arrOfMarks.find((ele) => ele % 10 === 0);
console.log(findSixty);
