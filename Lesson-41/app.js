// some
// checks whether any elements in an array pass specific condition.
// returns true or false
// returns true if one condition passes
// if more than one condition passes then also returns true
// if no passes condition then returns false
// It takes a callback and then that callback takes further three params

// Classical way
// const marks = [41, 25, 8, 9, 71, 58, 37]; // out of 80
const marks = [22, 23, 21, 31, 30, 31, 32]; // out of 80

// let result = false;
// for (let i = 0; i < marks.length; i++) {
//   console.log(i);
//   if (marks[i] >= 33) {
//     result = true;
//     break;
//   }
// } // false
// console.log(result);

console.log(
  marks.some(function (v, i, oArray) {
    // console.log(i);
    return v >= 33;
  })
); // false

const students = ["Ahmed", "Aslam", "Raza", "Waseem"];
console.log(
  students.some((v, i, oArray) => {
    console.log(i);
    return v.length >= 3;
  })
);

