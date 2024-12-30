// Logical Assignment operator:-

// let a = 10;
// let b = 5;

// b = b && a; // 10
// a = b && a; // 10

// console.log(a);
// console.log(b);

let a = 10;
let b = 5;
a &&= b;
// Same as
// a = a && b;
console.log(a);

let c = 23;
let d = 10;
d &&= c;
// Same as
// d = d && c
console.log(d);

let firstName = "Muhammad";
// let lastName = " Farooq";
let lastName = null;
lastName &&= firstName;
// Same as
// lastName = firstName && lastName;
console.log(lastName); //  Farooq
console.log(lastName); // null

let email = null;
// let email = "farooq@gmail.com";
let password = undefined;
// let password = "123456";
email ||= password;
email &&= password;
// Same as
// email = email || password;
console.log(email);
