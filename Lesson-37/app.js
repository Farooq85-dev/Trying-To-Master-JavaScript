// forEach
// It is used to itterate over the array. It takes one function argument. That function argument tkaes further three arguments currect value, index and original array. That function is called callBack function. Means we are calling it after an operation

const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function (currentValue, currentIndex, originaArray) {
  console.log(currentValue, currentIndex, originaArray);
});

// Sum all marks

const marks = [50, 11, 72, 24];
let sum = 0;

function doSum(currentValue, currentIndex, originaArray) {
  console.log("sum ===>", currentIndex, currentValue, sum);
  return (sum += currentValue);
}

marks.forEach(doSum);
console.log(sum);
