// Multi-Dimensional Array

// Single Dimension: [ 1,2,3,4,5,6,7,8 ]

// Multi Dimensional Array: [[1,2,3], [4,5,6]]

// Three Dimensional Array: [[[1,2,3]], [4,5,6]]

const sArray = [1, 2, 3, 4, 65, 6, 78];
const mArray = [
  [1, 2, 3, 4],
  [65, 6, 78],
];

const tArray = [[[1, 2, 3, 4]], [65, 6, 78]];

console.log(sArray[0]); // 1
console.log(mArray[0][0]); // 1
console.log(tArray[0][0][0]); // 1
