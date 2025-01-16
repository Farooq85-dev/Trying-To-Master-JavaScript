// every
// chk whether the elems in an array pass the specific condition or not.
// It takes a function as param and then that function has three arguments.
// Returns true false

const marks = [21, 85, 98, 89, 41, 45];

// Every elems of an array greater than 21.
marks.every((currentValue, currentIndex, originalArray) => {
  console.log(currentValue >= 21); // true
});

// Every elems of an array not greater than 21.
marks.every((currentValue, currentIndex, originalArray) => {
  console.log(currentValue > 21); // false
});

