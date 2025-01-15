// splice
// Splice is one of the array method to add delete the array items.

const arr1 = ["Arslan", "Ahmed", "Faizan"];
const deleteViaSplice = arr1.splice(0, 1); // returns deleted element (s) and modify the original
console.log(deleteViaSplice); // [ 'arslan' ]
console.log(arr1); // [ 'Ahmed', 'Faizan' ]

// const deleteAndAddViaSplice = arr1.splice(0, 1, "Faizan"); // start
// const deleteAndAddViaSplice = arr1.splice(-1, "Faizan"); // end
console.log(arr1); // [ 'Faizan', 'Faizan' ]

console.log(["Hello!", "World!"].slice(undefined, 1)); // returns copy section of an array
// If first index is undefined then start index is 0. If last index is indefined then slice goes to end of array index. We can also give negative indexing.
console.log(["Farooq", "Ahmed"].slice(-1)); // start copying from the last of an index.
