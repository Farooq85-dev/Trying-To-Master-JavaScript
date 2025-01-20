// Set
// set allows you to unique data
// unique data structure
// similiar like an array
// No indexes
// ordering not gurranted

const mySet = new Set();
mySet.add("banana");
mySet.add("apple");
mySet.add("banana");
console.log(mySet.size); // length
console.log(mySet.has("banana")); // return true or false
console.log(mySet.keys());
console.log(mySet.delete());
console.log(mySet.clear());

for (let i = 0; i < mySet.size; i++) {
  console.log(i);
}

for (const fruit of mySet) {
  console.log(fruit);
}

const nums = [1, 2, 3, 4, 4, 5, 5];
const unSet = new Set(nums);
console.log(unSet);
