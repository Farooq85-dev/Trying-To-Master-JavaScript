// String Comparison:-
// Stirng are always comparison on the base of lexical order. Lexical order is the arrangement of alphabets in the dictionary.
// Camparison returns boolean value.

// like "a" comes before "b"
// Like "c" comes after "b"

// >
const a = "a";
const b = "b";
console.log(b > a); // true

// <
console.log(a < b); // true

const cat = "cat";
const cut = "cut";
console.log(cat < cut); // true

console.log("a" === "a"); // true
console.log("a" === "A"); // false
console.log("a" > "A"); // true
console.log("A" < "a"); // true
