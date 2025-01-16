// Loops
// Helps us to run the code again and again my condition meets

// type
// for loop
// for of
// for in
// while
// do while

// for loop
// mostly used loop
// consists of three parts
// 1) initialization ===> starting index
// 2) condition ===> run untill the condition is true. If false then loop stop. Infinite loop.
// 3) afterThought ===> expression to run after each loop

// Basic syntax
// for (){}

// for (let i = 1; i <= 10; i++) {
//   console.log("i is ", i);
// }

// break down...

// 1st time...
// condition is true 1 < 10
// code run
// 2

// 2nd time...
// condition is true 2 < 10
// code run
// 3

// 3rd time...
// initialization
// condition is true 3 < 10
// code run
// 4

// 4th time...
// initialization
// condition is true 4 < 10
// code run
// 5

// 5th time...
// initialization
// condition is true 5 < 10
// code run
// 6

// 6th time...
// initialization
// condition is true 6 < 10
// code run
// 7

// 7th time...
// initialization
// condition is true 7 < 10
// code run
// 8

// 8th time...
// condition is true 8 < 10
// code run
// 9

// 9th time...

// condition is true 9 < 10
// code run
// 10

// 10th time...
// condition is true 10 <= 10
// code run
// 11

// 11th time...
// condition is false 11 <= 10
// code will not run
// and the last value of i will be printed

const numbers = [1, 2, 54, 485, 8, 1, 5, 45, 1, 5, 4, 615, 45, 4, 51, 41, 56];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const myName = "Muhammad Farooq";
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]); // left to right...
}

for (let i = myName.length - 1; i >= 0; i--) {
  console.log(myName[i]); // right to left...
}

// Print tables from i
for (let i = 1; i <= 10; i++) {
  //   console.log(i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    // console.log(j);
  }
  console.log(" ========== ");
}
