// find
// helps to find that element that passes our crieteria
// returns undefined if no elemnet find
// returns only one element if duplicates then firstly will be used

const students = ["Azam", "Ahmed", "Farooq", "Aslam", "Zubair", "Farooq"];
// for (let i = 0; i < students.length; i++) {
//   //   if (students[i] === "Farooq") {
//   if (students[i] === "Farooq") {
//     console.log(students[i], "founded at this index", i, "!");
//   } else {
//     console.log("Student Not found!");
//   }
// }
console.log(
  students.find((v, i) => {
    return v === "Farooq";
  })
);

console.log(students.find((student) => student.startsWith("A")));
