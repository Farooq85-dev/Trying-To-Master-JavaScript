// Objects
// objects hold information n real life like cars etc.
// Objects store data in key value pair
// Object can hold plain data and meyods

const myData = {
  name: "Farooq",
  className: "10th",
  earning: 1000,
  expenses: 300,
  calcRemainingBalance: function () {
    return this.earning - this.expenses;
  },
  calcRemainingBalanceViaArrowFunc: () => {
    return this.earning - this.expenses;
  },
};

// accessing the value by key
console.log(myData.name); // Farooq
// changing the value by key
myData.name = "Ahsan";
console.log(myData.name); // Ahsan
// another way to access
console.log(myData["className"]); // 10th
console.log(myData.calcRemainingBalance()); // 700
console.log(myData.calcRemainingBalanceViaArrowFunc()); // NaN

// Object Refernce Types
// refernce type refer to the memory location
// primitive types are allocated fixed memory
// string, number are primitive types while objects, arrays are non-primitive types

// Heap Memory: large
const myInfo = {
    name: "Farooq",
    section: "10th",
};

const b = myInfo;
b.name = "Shehzad";
console.log(myInfo);
console.log(b);

// Stack Memory: small
let x = 5;
let y = x;
y = 10;
console.log(x);
console.log(y);
