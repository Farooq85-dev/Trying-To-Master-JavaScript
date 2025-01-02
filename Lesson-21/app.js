// NaN: indicate an undefined or representable value.
// For example when you try to do methemetical operation like addition on non-numeric value.

const a = 2;
const b = "wasd";
const result = a * b;
console.log(result); // NaN

// Actually NaN is also a number.
console.log(typeof NaN); // number

const c = "2";
const d = undefined;
const result1 = c * d;
console.log(result1); // NaN

console.log(Number.NaN === NaN); // false
console.log(new Boolean(true) === true); // false
console.log(new Boolean(true) + 1); // 2
console.log(true + 1); // 2
const o = new Object();
const p = {};
console.log(0 === p); // false because comparing reference and they are stored on different memory location.

console.log(parseInt("zsfojasfiasdf")); // NaN
console.log(parseFloat("fs9ashfusahf.sdhaisdsadas")); // NaN
