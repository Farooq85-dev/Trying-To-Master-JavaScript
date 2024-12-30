// Short Circut Evaluation:-
// Short circuting is the avaluation of expression from left to right.

// You have to understand Boolean and logical operator before understanding short circuting.

// let a = "";
let a = "a";
let b = "b";
console.log(a && b); // Return b if all are true
console.log(true && true);

// && operator:-
// It returns true if all conditions are true and return the last value.
// Where it find the falsy value then the && operator stop and return false and give that falsy value.
// For example:-

let firstName = "Muhammad";
let lastName = "Farooq";
// let lastName = null;
let result = firstName && lastName;
console.log(result); // null
// console.log(result); // Farooq

// let name = "Farooq";
// let email = "famuhammad907@gmail.com";
// let password = null;

// if (!(name && email && password)) {
//   return console.log("Something is missing!");
// }
// console.log("Success!");

// if (!name || !email || !password) {
//   console.log("Something is missing!");
// }

// if (!(firstName && lastName)) {
//   console.log("There is a null value!");
// }

// || operator
// It returns the true value if any one condition is true if all are false then it returns the false. If it find false the it goes forward but && operator doesn't go foreward and stops at that point.

// For example:-

let c = null; // false
let d = "Khan"; // true

console.log(c || d); // khan
console.log(c && d); // null
