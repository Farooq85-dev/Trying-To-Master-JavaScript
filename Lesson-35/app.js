// Array
// It is a data stucture of multiple values. In array we get values via index. Arrays can have different data type. JavaScript is a dynamic typed language.

const arr = [];
const arr1 = new Array(5); // Here we are specifying the length of how many items will be placed in this array.
const arr2 = ["Ahmed", "Farooq", "Khan", true];
arr[0] = "Hello";
arr1[100] = "Hello";
console.log(arr, arr1, arr2);

const fruits = ["apples", "bnana"];
console.log(fruits[1]);
console.log(fruits[2]); // undefined because there is not value present on 2 index
console.log(fruits.length); // returns the length of array of items.

// Indexing in JavaScript always starts from 0. Don't confuse yourself!

// Adding items at the end of array using push method
const students = ["Arfan", "Ahmed", "Malik"];
console.log("Students array before adding...", students); // [ 'Arfan', 'Ahmed', 'Malik']
students.push("Arslan"); // Returns new length and modify the original array.
console.log("Students array after adding...", students); // [ 'Arfan', 'Ahmed', 'Malik', 'Arslan' ]

// Removing items at the end of array using pop method
console.log("Students array before removing...", students); // [ 'Arfan', 'Ahmed', 'Malik', 'Arslan' ]
students.pop(); // Returns the removed array value
// console.log("Students array after removing...", students); // [ 'Arfan', 'Ahmed', 'Malik' ]

// Adding items at the start of array using unshift method
console.log("Students array before adding at the start...", students); // [ 'Arfan', 'Ahmed', 'Malik', ]
students.unshift("Arslan"); // Returns new length and modify the original array.
console.log("Students array after removing...", students); // [ 'Arslan' , 'Arfan', 'Ahmed', 'Malik' ]

// Removing items at the start of array using unshift method
console.log("Students array before adding at the start...", students); // [ 'Arslan' , 'Arfan', 'Ahmed', 'Malik' ]
students.shift(); // Returns new length and modify the original array.
console.log("Students array after removing...", students); // [ 'Arfan', 'Ahmed', 'Malik' ]
