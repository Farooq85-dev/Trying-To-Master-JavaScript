// Date Comparison
// let suppose we have two dates.

const ahmedDOB = new Date("2004-07-11");
const farooqDOB = new Date("2006-07-11");

console.log(farooqDOB.getFullYear() > ahmedDOB.getFullYear()); // true

console.log("Date", farooqDOB.getDate()); // 11
console.log("Month", farooqDOB.getMonth()); // 6

console.log(farooqDOB.getFullYear() !== ahmedDOB.getFullYear()); // true
console.log(farooqDOB.getFullYear() === ahmedDOB.getFullYear()); // false
console.log(farooqDOB.getFullYear() == ahmedDOB.getFullYear()); // false
console.log(farooqDOB.getMilliseconds() == ahmedDOB.getMilliseconds()); // true
console.log(farooqDOB.getMilliseconds() === ahmedDOB.getMilliseconds()); // true

if (farooqDOB.getFullYear() === ahmedDOB.getFullYear()) {
  console.log("Ahmed DOB Year is equal to Farooq DOB Year");
} else {
  console.log("Ahmed DOB Year is not equal to Farooq DOB Year");
}
