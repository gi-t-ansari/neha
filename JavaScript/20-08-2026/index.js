// const numbers = [1, 2, 3, 5, 6];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   //   console.log(numbers[i]);
// }

// // for of loop: specifically built for array's iterations.
// for (number of numbers) {
//   //   console.log(number);
// }

// const findSum = (arr) => {
//   let sum = 0;
//   for (num of arr) {
//     sum = sum + num;
//   }
//   console.log(sum);
// };

// // findSum(numbers);

// // for in loop: specifically build for object's iteration.

// const student = {
//   name: "Neha",
//   age: 31,
//   hasChildren: true,
// };

// // student["name"];
// // student.age;

// for (key in student) {
//   console.log(student[key]);
// }

// accessing of elements with tag name: returns collection of data or a single data
const divs = document.getElementsByTagName("div");
console.log("result of divs -->", divs);

const heading = document.getElementsByTagName("h1");
console.log("result of heading --> ", heading);

const divsByClassName = document.getElementsByClassName("box");
console.log("result of divsByClassName -->", divsByClassName);

const footerElement = document.getElementById("footer");
console.log("result of footerElement -->", footerElement);
console.log("inner text of footer -->", footerElement.innerText);

// let updatedNumber = footerElement.innerText + 1;

footerElement.innerText = 0;

for (eachDiv of divs) {
  //   eachDiv.innerText = "Box";
}

for (eachHeader of heading) {
  eachHeader.innerText = "Header";
}

heading[0].innerText = "Some heading";

const firstDiv = document.querySelector("div");
console.log("result of firstDiv -->", firstDiv);

const allDivs = document.querySelectorAll("div");
console.log("result of allDivs -->", allDivs);

const footerAccessedByQuery = document.querySelector("#footer");
console.log("result of footerAccessedByQuery -->", footerAccessedByQuery);

const allDivsQueryClass = document.querySelectorAll(".box");
console.log("result of allDivsQueryClass -->", allDivsQueryClass);

firstDiv.innerText = "First box";

const containerDiv = document.querySelector(".container");

console.log("inner html of containerDiv", containerDiv.innerHTML);

containerDiv.innerHTML = "<span>single span</span> <span>second tag</span>";

console.log("inner html of containerDiv after update", containerDiv.innerHTML);
