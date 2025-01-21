// typeof and instanceOf

// typeof is used to chk the type of the value...

// console.log(typeof "Farooq"); // string
// console.log(typeof 221); // number
// console.log(typeof 2.23); // number
// console.log(typeof {}); // object
// console.log(typeof null); // object
// console.log(typeof undefined); // unefined
// console.log(typeof []); // object
// console.log(typeof new Map()); // object
// console.log(typeof new Array()); // object
// console.log(typeof new Set()); // object
// console.log(typeof true); // boolean

// instanceof is used to chk the instance. Returtns true of false

const googleMap = new Map();

// We are chking that this googleaMap is instnace of Map or not
console.log(googleMap instanceof Set); // false
console.log(googleMap instanceof Map); // true

// Type Conversion
// Implicit vs Explicit

const num = 2;
const myName = "Farooq";
console.log(num + myName); // Js will implicitly convert 2 into the string and then concatenate...

const num1 = 12;
const num2 = "12";
console.log(typeof num2); // string
console.log(num1 + Number(num2)); // We are explicitly converting the type of num2 to (number) so that we can apply mathematically operations...
