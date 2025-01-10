// Arthimetic Operations on Date:-

const currentDateTime = new Date();
console.log(currentDateTime); // Current Date and Time according to UTC.

// Addition on Date
const currentDate = currentDateTime.getDate();
// console.log(currentDate + 5); // add 5 to current date.

// Substraction
// console.log(currentDate - 5); // substract 5 from current date.

// Setting Date
currentDateTime.setDate(currentDate + 30);
console.log(currentDateTime);

// Setting Month
currentDateTime.setMonth(currentDateTime.getMonth() + 12);
console.log(currentDateTime);

// Setting hour
currentDateTime.setMonth(currentDateTime.getHours() + 12);
console.log(currentDateTime);

// setting seconds
currentDateTime.setMonth(currentDateTime.getSeconds() + 60);
console.log(currentDateTime);
