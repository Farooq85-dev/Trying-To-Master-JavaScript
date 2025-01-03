// Split and Join

// Split works on string  and takes a splitter. It can be anyting like comma space. It returns array. We can also give limit for splitting.

const myName = "Mr. Muhammad Farooq Khan";
console.log(myName.split("")); // on the base of space ["Mr.","Muhammad" , "Farooq", "Khan"]
console.log(myName.split(" ", 2)); // on the base of space ["Mr.", "Muhammad"]

// join works on an array. It takes separator. It can be anything.
const studetns = ["Ahmed", "Asad", "Faizan", "Taha"];
console.log(studetns.join("")); // on the base of nothing AhmedAsadFaizanTaha
console.log(studetns.join("*")); // on the base of steric Ahmed*Asad*Faizan*Taha
console.log(studetns.join(" - ")); // on the base of hyphen Ahmed-Asad-Faizan-Taha
console.log(studetns.join(" _ ")); // on the base of underscore Ahmed_Asad_Faizan_Taha
