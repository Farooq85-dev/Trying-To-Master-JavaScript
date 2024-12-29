// var Vs let Vs const

// Hoisting

// var
console.log(userName); // undefined
var userName = "Muhammad Farooq";

// let
// console.log(userEmail); // error
let userEmail = "farooq@gmail.com";

// const
// console.log(userPassword); // error
let userPassword = 1213232;

// Scope

// var

// Yes! Global scope.
var hello = "Hello!";

// No! Block Scope
{
  var hello2 = "Hello2!";
}

// Yes! Function Scope
function fn1() {
  var hello1 = "Hello1!";
}

// let

// No! Global scope
let a = "a";

// Block scope

// Yes! block scope
{
  let b = "b";
}

// Yes! Function scope
function fn2() {
  let c = "c";
}

// Re-Declaration and Re-Assigning

// var

// Yes! We can re-declare and reassign.
var d = "d";
var d = "s";
d = "dsafd";

// No! We can't redeclare but we can re assign.
let x = "x";
x = "sffAF";
// let x = "x";

// const

// No! we can't redeclare and reassign.

const e = "e";
// const e = "e";
// e = "fsjhff"

// Note:- But in the case of const we can change values like in array or object.
// For example:-

const students = { a: "a" };
console.log(students); // a
students.a = "b";
console.log(students); // b

const numbers = [1, 223, 233, 444];
console.log(numbers); // 1
numbers[0] = 1000;
numbers.push(100000); /// 100000
console.log(numbers); // 1000
