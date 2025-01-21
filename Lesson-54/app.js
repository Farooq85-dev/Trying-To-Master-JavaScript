// Error object
// Error object have three keys like name, message, stack trace

// Error types

// Syntax Error
// Type Error
// Reference Error
// Range Error

// First of all understand the error obejct and see error details
function greet() {
  console.log(userName);
}

// We are using try Catch to handle the errors gracedfully!
try {
  greet();
} catch (error) {
  console.log("Full Error...", error);
  console.log("Error Name...", error.name); // reference error
  console.log("Error Message...", error.message); // userName is not defined
  console.log("Error Stack...", error.stack); // stack indicates the info anout where erro occur
}

// Syntax Error
// It usually happens. When we are write our code in wrong syntax.

// console.log("Farooq); // Type Error

// console.log(userEmail); // Reference Error

// Referenced Error
// It usually happens. When we are trying to access the variable or function that doesn't exist or it is out of scope

// Type Error
// It usually happens . When value is not of expected output.
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}

// Range Error
// when a value is not in the set or range of allowed values.

function check(n) {
  if (!(n >= 1 && n <= 100)) {
    throw new RangeError("The argument must be between 1 and 100.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(error);
  }
}

// URI Error
// Uniform Resource Identifier

// Eval error

const myPortfolio = "https://farooq.folio.vercel.app";
const encodedURI = encodeURIComponent(myPortfolio);
const decodedURI = decodeURIComponent(myPortfolio);
console.log(encodedURI); // https%3A%2F%2Ffarooq.folio.vercel.app
console.log(decodedURI); // https%3A%2F%2Ffarooq.folio.vercel.app

// console.log(decodeURIComponent("%") instanceof URIError); // true
// console.log(decodeURIComponent("%")); // URI Error

// Eval Error
// It is thrown when the eval() function is used in an incorrect manner.
try {
  throw new EvalError("Hello");
} catch (error) {
  console.log(error.name); // EvalError
  console.log(error.message); // Hello
  console.log(error.stack); // Stack of the error
}

// Cutom Error
// We can also create our own custom error
function customError(message) {
  this.message = message;
  this.name = "CustomError";
}

try {
  throw new customError("Hello");
} catch (error) {
  console.log(error.name); // CustomError
  console.log(error.message); // Hello
  console.log(error.stack); // Stack of the error
}
