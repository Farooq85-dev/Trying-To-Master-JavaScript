// includes
// Chk if an array contains a specific element or not.
// Returns true or false.
// Takes two params first is value and another is start search index.

const students = ["Ahmed", "Farooq", "Arslan", "Zubair", "Aslam"];
const searchValue = "Farooq";
console.log(students.includes(searchValue.toLowerCase())); // false
console.log(students.includes(searchValue)); // true
console.log(students.includes("farooq")); // false
console.log(students.includes("Farooq")); // true
console.log(students.includes("Farooq", 2)); // false

// slice
// In English, cut into pieces.
// Takes two params start index, last index.
// Note: Direction of cpying the elems will remain same.

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.slice(0, 1)); // [ 'Apple' ]
console.log(fruits.slice(-2)); // [ 'Banana' , 'Mango' ]
console.log(fruits.slice(-2, -1)); // [ 'Banana',  ]
console.log(fruits.slice(-2, 0)); // []
