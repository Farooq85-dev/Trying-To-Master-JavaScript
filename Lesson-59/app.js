// Iterable is something that can be iterables like string, array etc.
// Itterator is protocol means set of rules
// If an object that follows that can be itterator specially for of

const arr = [1, 3, 4, 54];
for (let value of arr) {
  console.log(value);
}

// for of loop works on an objecr if follow below rules
// object has a function whoose key is Symbol.iterator
// This function return an object
// That object has next method
// next method should return an object
//  This object have two keys value:any and done:boolean

// const obj = {};
// obj[Symbol.iterator] = function () {
//   let num = 1;
//   const myObj = {
//     next: () => {
//       let done = false;
//       if (num > 10) {
//         done = true;
//       }
//       let result = { value: num, done: done };
//       num++;
//       return result;
//     },
//   };

//   return myObj;
// };

// for (const num of obj) {
//   console.log(num);
// }

const students = "Muhammad Farooq Khan";

// In-built way

for (let chars of students) {
  //   console.log(chars);
}

const obj = {};
obj[Symbol.iterator] = function () {
  let stringLength = students.length;
  let count = 0;
  let returnSymbolIteratorObj = {
    next: () => {
      let done = false;
      if (count === stringLength) {
        done = true;
      }
      let result = { value: students[count], done: done };
      count++;
      return result;
    },
  };
  return returnSymbolIteratorObj;
};

for (let value of obj) {
  console.log(value);
}
