// 4. Switch Case

const printMonthName = (num) => {
  if (num <= 0 || num >= 13) {
    console.log("Invalid Input");
    return;
  }

  switch (num) {
    case 1: // num === 1
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    default:
      console.log("December");
  }
};

// printMonthName(5);
// printMonthName(15);

const findDayOfWeek = (dayName) => {
  switch (dayName) {
    case "Mon":
      console.log(1);
      break;
    case "Tue":
      console.log(2);
      break;
    case "Wed":
      console.log(3);
      break;
    case "Thu":
      console.log(4);
      break;
    case "Fri":
      console.log(5);
      break;
    case "Sat":
      console.log(6);
      break;
    case "Sun":
      console.log(7);
      break;
    default:
      console.log("Invalid Input");
  }
};

// findDayOfWeek("tue");
// findDayOfWeek("jahgjdhg");
// findDayOfWeek(5);

// console.log("JAHDj".toLowerCase());  It converts every character into lower case.

// console.log("thth".toUpperCase()); It converts every character into upper case.

const refinedDayOfWeek = (dayName) => {
  // console.log(dayName);
  const updatedDayName = dayName.toLowerCase();
  // console.log(updatedDayName);
  switch (updatedDayName) {
    case "mon":
    case "monday":
      console.log(1);
      break;
    case "tue":
    case "tuesday":
      console.log(2);
      break;
    case "wed":
    case "wednesday":
      console.log(3);
      break;
    case "thu":
    case "thursday":
      console.log(4);
      break;
    case "fri":
    case "friday":
      console.log(5);
      break;
    case "sat":
    case "saturday":
      console.log(6);
      break;
    case "sun":
    case "sunday":
      console.log(7);
      break;
    default:
      console.log("Invalid Input");
  }
};

// refinedDayOfWeek("MONday");

// String Methods
// 1. .length
// 2. .toUpperCase()
// 3. .toLowerCase()
// 4. .charAt(number): it finds the value of character that matches the number(index)

// const someText = "Neha";

// console.log(someText.charAt(5));

// 5. .includes("string"): it checks that a particular text exists inside string or not, returns true or false accordingly.

// const someText = "My name is Neha";
// console.log(someText.includes("My"));

// 6. .trim(): removes leading or trailing spaces.

// const someText = "             My name  is    Neha               ";
// console.log(someText.trim());

// 7. .slice(num,num): it returns the string from first number(index) to second number(index) - 1.

// const someText = "Lorem ipesm";

// console.log(someText.slice(2, 6));

// 8. .split("string"): splits into array of words/sentence depending upon the character entered

const somePara =
  "My name is Neha. Neha studying web dev. Neha learning js. My.";
// console.log(somePara.split(". "));

// 9. .replace("string", "string"): finds the very first string inside a string/sentence and replaces it with second strings

console.log(somePara.replace("My", "my"));

// 10. .replaceAll("string", "string"): finds all the matching string inside a string/sentence and replaces it with second strings
console.log(somePara.replaceAll("My", "my"));
