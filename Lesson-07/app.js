// Logical Operator

// And Opeator:- &&
// It returns true if all the conditions are true. For example:-

let isVerified = true;
let isValid = false;
if (isVerified === true && isValid === true) {
  console.log("Congrats! You are selected.");
} else {
  console.log("OOPS! You are not selected.");
}

// OR Operator:- ||
// It returns true if at least one condition is true.

let userName = "Farooq khan";
let userPassword = "1234567F";

if (userName === "Farooq" || userPassword === "1234567F") {
  console.log("Valid credentials!");
} else {
  console.log("Invalid credentials!");
}

// NOT Operator:- !
// It negates the condition.

let isPasswordMatch = false;

if (!isPasswordMatch) {
  // false
  console.log("Please provide correct password!");
} else {
  // true
  console.log("OK!");
}

// Mixed:-

// Now we are checking user must have corrreect password and name but verification is not necessary.
if (
  (userName === "Farooq Khan" && userPassword === "1234567F") ||
  isVerified === true
) {
  console.log("Ok! You met the conditions.");
} else {
  console.log("Please provide credentials!");
}
