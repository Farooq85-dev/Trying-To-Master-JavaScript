// Map
// similiar to object but some differences
// store data in ke value pair
// key can be of any type

const myMap = new Map([]);
myMap.set("name", "Farooq");
myMap.set("className", "10th");
myMap.set({ id: 1 }, "11th");
myMap.set(true, "yes");

console.log(myMap.size);

// various methods of map that are self explanatory...
console.log(myMap);

for (const [key, value] of myMap) {
  console.log(key, value);
}
