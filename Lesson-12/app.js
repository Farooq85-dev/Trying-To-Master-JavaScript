// Nullish Coalescinh Operator:-

// If left hand side value is ull or undefined the it returns right hand side value. if not null or undefined then left side returns

let realName = "Farooq";
let fakeName = "Spider Man";
let nameToUse = null;

// if (realName !== null) {
//   nameToUse = realName;
//   console.log(nameToUse);
// } else {
//   nameToUse = fakeName;
//   console.log(nameToUse);
// }

nameToUse = fakeName ?? realName;
console.log(nameToUse);

// let x = "x";
let x = null;
let y = "y";
x ??= y;
// Same As
// x = x ?? y;
console.log(x); // x
