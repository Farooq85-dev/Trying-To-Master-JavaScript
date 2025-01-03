// Some More String Methods:

// trim: used to remove space from the string at the end and start.
const myHobby = "Programming";
const clonedHobby = " " + [...myHobby].join("") + " ";
console.log(clonedHobby.trim()); // Without space

// trimStart: used to remove the sapce from the start of string
console.log(clonedHobby.trimStart()); // Start space removed

// trimEnd: used to remove the sapce from the end of string
console.log(clonedHobby.trimEnd()); // End space removed

// startWith: used to check if a string start with particular character. Returns the boolean means true false. We can also mention that our starting point in second params by default it starts from start of string. Note: that now second params will be your start point.
console.log(clonedHobby.trim().startsWith("P")); // true
console.log(clonedHobby.trim().startsWith("m", 6)); // true:

// endsWith: used to check if a string end with particular character. Returns the boolean means true false. We can also mention that our starting point in second params by default it starts from start of string. Note: that now second params will be your end point.
console.log(clonedHobby.trim().endsWith("g")); // true
console.log(clonedHobby.trim().endsWith("g", 4)); // true

console.log(clonedHobby.trim().substring(0, 1)); // P
const str = new String("Farooq");
console.log(typeof str); // Object
