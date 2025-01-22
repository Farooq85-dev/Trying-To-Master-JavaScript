// hoistng
// means to lift up
// variable and function declaration moved to the top of current scope

console.log(a);
var a = 2; // undefined

let e;
console.log(e); // undefined
e = 2;

try {
  console.log(b);
} catch (error) {
  console.log(error.name);
}
let b = 2; // Reference error

try {
  console.log(c);
} catch (error) {
  console.log(error.name);
}
const c = 2; // Reference error

fn1(); // "Hello From Fn1"
function fn1() {
  console.log("Hello From Fn1");
}

console.log(hello); // undefined
var hello = function () {
  return "Hello From Fn1";
};

console.log(hello1); // Reference Error
let hello1 = function () {
  return "Hello From Fn2";
};

console.log(hello2); // Reference Error
const hello2 = function () {
  return "Hello From Fn2";
};
