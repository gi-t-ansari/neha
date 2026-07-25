// Operators in JS

// Assignment Operator (=): Use to assign value to variables.

// Arithmetic Operators:
// 1. Plus (+) Operator: Use for addition
// 2. Minus (-) Operator: Use for subtraction
// 3. Multiplication (*) Operator: Use for multiplication
// 4. Division (/) Operator: Use for division
// 5. Modulus/Remainder (%) Operator: Use to find remainder

// Comparison Operator:
// 1. Loose Equality (==): Use to compare only values of two variable whether they are equal or not, return true or false respectively.
// 2. Strict Equality (===): Use to compare values and data types of variable whether they are equal & similar or not, returns true or false respectively.

const rollNumber = "2";
const standard = "2";

// console.log(rollNumber === standard);

// 3. Not Equals To (!= or !==): Use to check whether two variables are not equal, return true pr false.

const name = 3;
const surname = "3";

// console.log(name !== surname);

// 4. Less than (<): compares 1st variable is less than the second variable, returns true or false respectively
// 5. Greater than (>): compares 1st variable is greater than the second variable or not, returns true or false respectively
// 6. Less than or equals to (<=): compares 1st variable is less than or equals to the second variable or note, returns true or false respectively
// 7. Greater than or equals to (>=): compares 1st variable is greater than or equals to the second variable or note, returns true or false respectively

let firstNumber = 5;
const secondNumber = 6;

// console.log(5 <= 6);
// const isAdult = (age) => console.log(age >= 18);
const isAdult = (age) => age >= 18;
const isOld = (age) => age >= 60;

// Logical Operator:
// 1. And operator (&&): Returns true if  statements are true.

// console.log(false && true);

// console.log(isAdult(18) && isOld(54) && isAdult(21));
// 2. Or operator (||): Returns true if either of statements are true.

// console.log(isAdult(17) || isOld(54) || isAdult(24));

// Increment operator (++): use to increase the value of number/variable by 1.
firstNumber++; // => firstNumber = 6;

console.log(firstNumber);
// Decrement operator (--): use to decrease the value by 1.
firstNumber--;
console.log(firstNumber);

// typeof: helps find out the data type of any variable.
// console.log(typeof typeof false); // console.log(typeof "number");
console.log("number");

// Statements
