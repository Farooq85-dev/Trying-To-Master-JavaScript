// map
// helps to apply function on each element of an array
// creates a new array with new values
// retuns a new array. Original array doesn't affect

const nums = [1, 2, 3, 4, 5, 6];

// In classical way
const result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}
console.log(result); // same result

function multiplyByTwo(v, i, array) {
  return v * 2;
}

console.log(nums.map(multiplyByTwo)); // same result
console.log(nums.map((v, i, array) => v * 2)); // same result

const myName = ["Muhammad Farooq"];

console.log(myName.map((v, i) => v.toUpperCase())); // [ 'MUHAMMAD FAROOQ' ]

// reduce
// helps to retrive singe value from an array
// it takes two params first is callback and second is initial value

const prices = [11, 20, 40, 10, 10];

// classical way
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
  //   sum = sum + prices[i]; // same
}
console.log(sum);

console.log(
  prices.reduce((accumulator, currentValue, currentIndex, array) => {
    //   console.log(accumulator, currentValue, currentIndex, array);
    //   console.log(accumulator, currentValue);
    return accumulator + currentValue;
  }, 0) // same value
);

console.log(
  "Maximum Value ===>",
  prices.reduce((acc, currentValue) => {
    if (acc > currentValue) {
      return acc;
    } else {
      return currentValue;
    }
  }, 0)
);

function findLargest() {
  let largestValue = prices[0]; // 11 let's assume it is largest price
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > largestValue) {
      largestValue = prices[i];
    }
  }
  return largestValue;
}

console.log("Maximum Value in Calssical way ===>", findLargest()); // same

const fruits = ["Apple", "Banana", "Apple", "Apricot"];
console.log(
  fruits.reduce((acc, value) => {
    console.log(acc, value);
    if (!acc[value]) {
      acc[value] = 1;
    } else {
      acc[value]++;
    }
    return acc;
  }, {})
);
