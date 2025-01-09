// BigInt
// Always use BigInt for lager number. Otherwise it created unexpected results.

const num = 2029;
console.log(typeof num); // number

const bigint = BigInt("");
console.log(typeof bigint); // BigInt

const bigintBooleanTrue = BigInt(true);
console.log(bigintBooleanTrue); // 1n

const bigintBooleanFalse = BigInt(false);
console.log(bigintBooleanFalse); // 0n

const bigintEmptyString = BigInt("");
console.log(bigintEmptyString); // 0n

const bigintStringWithNegation = BigInt(!"Farooq");
console.log(bigintStringWithNegation); // 0n

// const bigintOnlyString = BigInt("Farooq");
// console.log(bigintOnlyString); // error

// const bigintDecimal = BigInt(231230.212);
// console.log(bigintDecimal); // error

const bigintNumber = BigInt(1);
console.log(bigintNumber); // 1n

const bigNumber = 82423462346234623846823n;
console.log(typeof bigNumber); // bigint

// Arthimatic Operation

// Addition
const a = 2n;
const b = 2n;
console.log(a + b); // 4n
console.log(a + b === 4); // false: Beacuase datatype is not equal
console.log(a + b == 4); // true: because value is equal

const c = 2n;
const d = 8n;
console.log(c * d); // 16n
