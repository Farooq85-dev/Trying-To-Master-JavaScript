// indexOf
// Returns the first index of specifed value.
// returns -1 if not find anythinhg.
// search from left to right. We can also give the number where we want to start searching.
const fruits = ["Apple", "Mango", "Banana", "Appricot", "Mango", "Apple"];
// console.log(fruits.indexOf("Mango")); // 1
console.log(fruits.indexOf("Mango", -2)); // -1

// lastIndexOf
// Returns the last index of specifed value.
// returns -1 if not find anythinhg.
// search from right to left.
// console.log(fruits.lastIndexOf("Mango")); // 4
console.log(fruits.lastIndexOf("Mango", -3)); // 1

const marks = [1, 5, 58, 4, 95, 4, 1];
console.log(marks.lastIndexOf(2)); // -1
console.log(marks.indexOf(4)); // 3
console.log(marks.lastIndexOf(4)); // 5
console.log(marks.lastIndexOf(4, -3)); // 3
console.log(marks.lastIndexOf(4, -2)); // 5
console.log(marks.lastIndexOf(4, -1)); // 5

// Note:- In the case of negative indexing.
// 1) Index of the array remains same.
// 2) Directioin of the searching array elems also remains same.
