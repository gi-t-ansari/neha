// Conditional Statements

// 1. if
// if operation is performed in single line

const isEven = (num) => {
  const result = num % 2;
  if (result === 0) {
    console.log("Yes");
  }
};

// isEven(5);
// isEven(4);

// 2. if else statement

const isEvenOrOdd = (num) => {
  const result = num % 2;

  if (result === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

// isEvenOrOdd(5);
// isEvenOrOdd(4);

// 3. if else if
// a. chain should not be more that 2 else if
// b. it should always end with an else statement

const findAgeGroup = (age) => {
  if (age < 13) {
    console.log("toddler");
  } else if (age >= 13 && age < 18) {
    console.log("teen age group");
  } else if (age >= 18 && age <= 59) {
    console.log("Adult age group");
  } else {
    console.log("Old age group");
  }
};

// findAgeGroup(10);
// findAgeGroup(16);
// findAgeGroup(26);
// findAgeGroup(68);

const findResult = (marks, standard) => {
  if (marks >= 80) {
    console.log("Distinctiion");
  } else {
  }

  if (standard <= 10) {
    console.log("is in high school");
  } else {
    console.log("is in college");
  }
};

// template string ``(back tick): helps include variable in string

const printName = (name) => {
  console.log(`Name is ${name}`);
};

// printName("Neha");

const isStudentPassed = (name, marks) => {
  if (marks > 40) {
    console.log(`${name} is passed with ${marks}%`);
  } else {
    console.log(`${name} is failed.`);
  }
};

// isStudentPassed("Raj", 50);

// template literals

const isEvenOdd = (num) => {
  const result = num % 2;
  // if (result === 0) {
  //   console.log("Even");
  // } else {
  //   console.log("Odd");
  // }
  console.log(result === 0 ? "Even" : "Odd");
};

isEvenOdd(4);

const findAgeGroupOfPeople = (age) => {
  //   if (age < 13) {
  //     console.log("toddler");
  //   } else if (age >= 13 && age < 18) {
  //     console.log("teen age group");
  //   } else if (age >= 18 && age <= 59) {
  //     console.log("Adult age group");
  //   } else {
  //     console.log("Old age group");
  //   }
  const result =
    age < 13
      ? "toddler"
      : age >= 13 && age < 18
        ? "teen age"
        : age >= 18 && age <= 59
          ? "adult"
          : "old";

  console.log(result);
};

// findAgeGroupOfPeople(55);

// .length: string method to find the number of characters inside string

const name = "lorem mamhgf jabjfsakjsdf jhslfjh alsdjfh*";
console.log(name.length);
