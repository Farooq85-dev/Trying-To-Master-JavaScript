// String Concatenation and Some methods

// With addition operator
const str1 = "Muhammad ";
const str2 = "Farooq";
const concatenatedStr = str1 + str2;
console.log(concatenatedStr);

// With backtics
const str3 = "Muhammad";
const str4 = "Asad";
const concatenatedStrWithBacktics = `${str3} ${str4}`;
console.log(concatenatedStrWithBacktics);

// toUpperCase & toLocaleUpperCase: used to convert smaller letters to uppercase. Both are too much same.
const myName = "muhammadfarooq";
console.log(myName.toUpperCase()); // MUHAMMADFAROOQ
console.log(myName.toLocaleUpperCase()); // MUHAMMADFAROOQ

// toLowerCase & toLocaleLowerCase: used to convert capital to small letters. Both are too much same.
const myEmail = "FAMUHAMMAD907@GMAIL.COM";
console.log(myEmail.toLowerCase()); // famuhammad907@gmail.com
console.log(myEmail.toLocaleLowerCase()); // famuhammad907@gmail.com

// length: used to calclate length of characters
console.log(myEmail.length); // 23
console.log(myName.length); // 14

// charAt: returnd the character at specified index of given string.
console.log(myEmail.charAt(4)); // h

// indexOf: return the index of first specified value in a string. If value not found then gives -1.
console.log(myEmail.indexOf("H")); // H

// lastIndexOf: return the index of given value from last. If not found then give -1.
console.log(myEmail.lastIndexOf("A")); // 16

// slice: used to copy substring (part) of string. It doesn't modify the original value. It takes two params first is your starting index and second is your last index but note that last index is not included. If we don't give the last index then it goes forward from starting index to last of string. We can also give negative indexing.
console.log(myEmail.slice(0, 1)); // F
console.log(myEmail.slice(-1)); // M

// replace: used to replace the part of string with the new value. It takes two params first is your old value, second is new value that you want to replace. It doesn't modify the original data. It only replace the first occurrence.
console.log(myEmail.replace("@", "*")); // FAMUHAMMAD907*GMAIL.COM

// replaceAll: it replace the all occurrence in a string.
console.log(myEmail.replaceAll("FAMUHAMMAD907@GMAIL.COM", "Farooq"));

const regex = new RegExp("@", "g");
console.log(myEmail.replace(regex, "*")); // FAMUHAMMAD907@GMAIL.COM
