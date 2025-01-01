// Number Constants

// Infinity: is a global object proprty. In other words it is a global scope variable.
console.log(1000000000000000000000000000000000 < Infinity);
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(Infinity); // Infinity
console.log(Infinity - 1); // Infinity
console.log(Infinity + 1); // Infinity
console.log(Infinity * 1); // Infinity
console.log(Infinity / 1); // Infinity
console.log(Math.pow(10, 1000)); // Infinity
console.log(Math.log(0)); // -Infinity
console.log(1 / Infinity); // 0
console.log(1 / 0); // Infinity

// Number.NEGATIVE_INFINITY: it represents the negative infinity value.
console.log(Number.NEGATIVE_INFINITY); // property not method

// Number.POSITIVE_INFINITY: it represent the postive infinity value.
console.log(Number.POSITIVE_INFINITY); // property not method

console.log(typeof Number.NaN); // number

// Number.MIN_VALUE: represents smallest numeric value.
console.log(Number.MIN_VALUE);

// Number.MIN_VALUE: represents maximum numeric value.
console.log(Number.MAX_VALUE);

// Number.MIN_VALUE: represents maximum safe numeric value.
console.log(Number.MAX_SAFE_INTEGER);

// Number.MIN_VALUE: represents smallest numeric value.
console.log(Number.MIN_SAFE_INTEGER);
