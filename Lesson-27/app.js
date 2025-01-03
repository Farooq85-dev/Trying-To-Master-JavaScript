// Boolean Data Type
// Boolean represent only two values like true and false. It is opne of the fundamental thing in every programming language. we perform many operation based on true and false.

// true:- yes :- 1
// false:- no:- 0

if (true) {
  console.log("Chle Ga..."); // true
}

if (false) {
  console.log("Nahi Chle Ga..."); // false
}

if (1) {
  console.log("Chle Ga..."); // true
}

if (0) {
  console.log("Nahi Chle Ga..."); // false
}

const yes = new Boolean(true); // true
console.log(typeof yes); // object
const yes1 = true; // also true
console.log(typeof yes1); // boolean

if (yes) {
  console.log("Object wala true");
}

if (yes1) {
  console.log("Literally true");
}

console.log(yes == yes1); // true: only value
console.log(yes === yes1); // false: Both value and datatype

const num = new Number(1); // 1
console.log(typeof num); // object
const num1 = 1;
console.log(typeof 1); // number

if (num) {
  console.log("Num wala 1");
}

if (num1) {
  console.log("Literally 1");
}

console.log(num == num1); // true: only value
console.log(num === num1); // false: both value and datatype
const arr = new Array("Ahmed", "Ahsan");
console.log(typeof arr); // object
const arr1 = ["Ahmed", "Ahsan"];
console.log(typeof arr1); // object

console.log(typeof arr == typeof arr1); // true because both are object
console.log(arr == arr1); // false: not comparing values comparing its memory location.
console.log(arr === arr1); // false: not comparing values comparing its memory location.

// Following operators returns boolean value

// Comparison operators
// ==, ===, !=, !==, <, >, <=,>=
// Logical operators
// &&, ||, !
// when we convert non-boolean value
console.log(!"Farooq"); // false
console.log(!1); // false
console.log(!0); // true

