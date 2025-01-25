// Please see this repo. This will cover the advanced and most impoortant topics that you shoud know as a JavaScript developer.
// https://github.com/Farooq85-dev/JavaScript-Revision

// Prototype:-

// In JavaScript, every object has a hidden property called [[Prototype]] (often referred to as just __proto__). This is an internal reference to another object. It is used for inheritance in JavaScript.

// When you try to access a property on an object, JavaScript first checks if the object itself has that property. If not, it looks for the property on the object’s prototype (its [[Prototype]]). This is known as prototype chaining.

// let dog = {
//   sound: "bark",
// };

// console.log(dog.sound); // "bark"

// Here, dog is an object, and it has a property sound. If you try to access dog.sound, JavaScript will find it directly on the object.

// But, if you access a property that doesn’t exist on the object, like dog.color, JavaScript will look at the object's prototype (which, by default, is Object.prototype).

// Understanding Constructor Functions and Prototypes

// In JavaScript, you can create objects with constructor functions. Each constructor function has a special property called prototype, which is used to define shared properties and methods for all objects created by that constructor.

// Creating constructor func
function Animal(name) {
  this.name = name;
}

// adding this method to the constrcutor prototype proprty
Animal.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let dog = new Animal("Sham");
dog.sayHello(); // "Hello, my name is Sham"

// Prototype Manipulations

let person = {
  greet: function () {
    console.log("Hello!");
  },
};

let student = {};

Object.setPrototypeOf(student, person);
student.greet(); // "Hello!"
