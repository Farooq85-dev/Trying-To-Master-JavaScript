// Undefined Datatype
// undefined is a property of the global object. That is, it is a variable in global scope.
// A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

console.log(typeof undefined); // undefined
console.log(typeof null); // object

let x;
if (typeof x === "undefined") {
  // these statements execute
}

// x has not been declared before
// evaluates to true without errors
if (typeof x === "undefined") {
  // these statements execute
}

// Throws a ReferenceError
if (x === undefined) {
}
