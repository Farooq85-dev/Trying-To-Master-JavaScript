// Number Methods

// toFixed: is used to control how much numbers show after decimal point.
const marks = 102.222234;
console.log(marks.toFixed(2)); // 102.22

// Math.round: is used to round the number to nearest integer.
const price1 = 102.9999;
const price2 = 102.1111;
console.log(Math.round(price1)); // 103
console.log(Math.round(price2)); // 102

// Math.floor: is used to round the number to lowest integer.
// remember it via floor---> means earth ---> that indicates lowerness
const price3 = 121.999999;
console.log(Math.floor(price3)); // 121

// Math.ceil: is used to round the number to near highest integer.
const price4 = 1022.9999;
console.log(Math.ceil(price4)); // 1023

// Math.random: is used to generate the random numbers.
// By default it generate numbers from 0 to 1.
const randomNumbers = Math.round(Math.random() * 100 + 1); // 0 to 100
console.log(randomNumbers);
