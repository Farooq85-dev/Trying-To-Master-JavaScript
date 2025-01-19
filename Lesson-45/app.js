// In JavaScript, map, filter, and reduce are all higher-order functions used to manipulate arrays, each serving a different purpose. Let's go over their differences and how they are typically used:

// map

// Creates a new array by applying a function to each element in the original array.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// filter

// Creates a new array containing only the elements from the original array that pass a test defined by a function.

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce

//  Reduces an array to a single value by applying a function that accumulates the result based on each element.

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
