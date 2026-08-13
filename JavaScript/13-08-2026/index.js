const sumOfTwoNumbers = (a, b) => {
  const result = a + b;
  return result;
};
// console.log(sumOfTwoNumbers(1,4))

const findCubeOfNumber = (a) => {
  const result = a * a * a;
  return result;
};
// console.log(findCubeOfNumber(2))

const incrementNumber = (a) => {
  const result = a + 1;
  return result;
};
// console.log(incrementNumber(4))

const multiplyTwoDecimals = (c, d) => {
  const result = c * d;
  return result;
};
// console.log(multiplyTwoDecimals(2,5))

const findReminder = (k, l) => {
  const result = k % l;
  return result;
};
// console.log(findReminder(12,8))

const comapareNumbers = (a, b, c) => {
  if (a === b || b === c) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// comapareNumbers(2,4,6)
// comapareNumbers(2,2,4)

const isDescending = (a, b, c) => {
  if (a > b && b > c) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// isDescending(9,6,3)

const isAescending = (e, f, g) => {
  if (e < f && f < g) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// isAescending(2,4,8)

const findLargest = (t, y) => {
  if (t > y) {
    console.log(t);
  } else {
    console.log(y);
  }
};
// findLargest(5,2)
// findLargest(2,5)

const isEvenOdd = (num) => {
  const result = num % 2;
  if (result === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

// isEvenOdd(4)
// isEvenOdd(5)

const isEquiletral = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// isEquiletral(5,5,5)

const findSmallest = (u, i, o) => {
  if (u < i && i < o) {
    console.log(u);
  } else if (i < o && o < u) {
    console.log(i);
  } else {
    console.log(o);
  }
};
// findSmallest(6,8,3)

const findLargestOfThree = (z, x, c) => {
  if (z > x && x > c) {
    console.log(z);
  } else if (x > c && c > z) {
    console.log(x);
  } else {
    console.log(c);
  }
};
findLargestOfThree(6, 6, 6);

// A school uses the following rules to assign grades based on students’ marks

// From 0 to less than 25 - F

// From 25 to less than 45 - E

// From 45 to less than 50 - D

// From 50 to less than 60 - C

// From 60 to less than 80 - B

// From 80 to 100 - A

// If the mark is less than 0 or greater than 100 then it is considered invalid.

const findGrade = (num) => {
  if (num >= 0 && num < 25) {
    console.log("F");
  } else if (num >= 25 && num < 45) {
    console.log("E");
  } else if (num >= 45 && num < 50) {
    console.log("D");
  } else if (num >= 50 && num < 60) {
    console.log("C");
  } else if (num >= 60 && num < 80) {
    console.log("B");
  } else if (num >= 80 && num <= 100) {
    console.log("A");
  } else {
    console.log("invalid");
  }
};
findGrade(0);
findGrade(25);
findGrade(45);
findGrade(50);
findGrade(60);
findGrade(80);
findGrade(100);
