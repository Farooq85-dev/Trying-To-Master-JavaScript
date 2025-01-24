// Closure
// Closure means ending something completely
// closure is a function that is defined inside another function
// closure means a function that is returned from another function
// closure means a function that is defined inside another function and has access to the outer function's scope

function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

const innerFunc = outer(4);
console.log(
  innerFunc(3) // 7
);

function parent() {
  let count = 0;
  return function child() {
    return count++;
  };
}

let childFunc = parent();
console.log(childFunc()); // 1
console.log(childFunc()); // 2
console.log(childFunc()); // 3
console.log(childFunc()); // 4
console.log(childFunc()); // 5
console.log(childFunc()); // 6
console.log(childFunc()); // 7
console.log(childFunc()); // 8
console.log(childFunc()); // 9

// HOC
// HOC is a function that takes another function as an argument
// returns function as an output
// like map, filter, reduce, find, sort, etc
// first class function

function doOpt(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b; // 5
}

console.log(doOpt(2, 3, add));

// classes
// class is a blueprint for creating objects
// class is a template for creating objects
// class is a user-defined data type
// class is a reference data type
// class is a collection of objects
// introduced in ES6 (2015)
// it has three parts Constructor, Properties, Methods

class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getFullName() {
    return this.name;
  }
}

const obj = new MyClass("John", 30);
console.log(obj.getFullName()); // John

// constructor
// constructor is a special method that is called when an object is created
// constructor is a reserved keyword

// static method
// static method is a method that belongs to the class itself
// static method is a method that is called on the class itself

class StaticMethod {
  static count = 0;
  increment() {
    return StaticMethod.count++;
  }
}
let counterStatic = new StaticMethod();
console.log(counterStatic.increment()); // 0

let counterStatic1 = new StaticMethod();
console.log(counterStatic1.increment()); // 1

let counterStatic2 = new StaticMethod();
console.log(counterStatic2.increment()); // 2

class NonStaticClass {
  count = 1;
  increment() {
    return this.count++;
  }
}

const nonStaicInstance = new NonStaticClass();
console.log(nonStaicInstance.increment()); // 1
console.log(nonStaicInstance.increment()); // 2

const nonStaicInstance1 = new NonStaticClass();
console.log(nonStaicInstance1.increment()); // 1
console.log(nonStaicInstance1.increment()); // 2
