// Symbol
// Symbol is a primitive data type in JavaScript.
// A symbol is a unique and immutable data type.
// Symbols are mostly used as object keys.
// introduced in ES6 (2015)

let symbol1 = Symbol("mfarooq");
let symbol2 = symbol1;
console.log(symbol1.description);

if ("mFarooq" === symbol1.description) {
  console.log("Yes");
} else {
  console.log("No");
}
symbol1 = Symbol("mRaza");
console.log(symbol1.description);

if ("mRaza" === symbol1.description) {
  console.log("Yes");
} else {
  console.log("No");
}

console.log(symbol1 === symbol2);
const symbol3 = Symbol("name");
const symbol4 = Symbol("name");
const obj = {};
obj["name"] = "mfarooq";
obj["name"] = "mRaza";
obj[symbol3] = "mfarooq";
obj[symbol4] = "mRaza";

console.log(obj);

const myPopularSymbol = Symbol.for("Muhammad"); // Global Registery
console.log(Symbol.for("Muhammad") === myPopularSymbol);
console.log(Symbol.keyFor(myPopularSymbol));
