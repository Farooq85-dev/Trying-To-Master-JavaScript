// parseInt and parseFloat

// parseInt: is used to parse a string to only integer. For example:-
// like we have user id in string but in our database id is in number then we can use parseInt to parse string.
const id = "12212312321";
console.log(typeof id); // string
const parsedId = parseInt(id);
console.log(parsedId); // 12212312321
console.log(typeof parsedId); // number

// If we give space at the end and beginning of string id then it corectly parse that string. For example:-

const idWithSpace = " 12212312321 ";
const parsedIdWithSpace = parseInt(idWithSpace);
console.log(parsedIdWithSpace); // (12212312321) without space

// If we give unexpected string like alphabets then it wil give us NaN as an output.

const alphabets = "sdbsafdgasdfh";
const parsedAlphabets = parseInt(alphabets);
console.log(parsedAlphabets); // NaN means you are trying to do operation on non-numerical value.

// If we give alphabets after a number then it stops at that point and doesn't go further.

const mixed = "21sdasd21sadasd3jiojsdfj";
const parsedMixed = parseInt(mixed);
console.log(parsedMixed); // 21

// If we give decimal like number then it stops before decimal point.

const price = "102.2323";
console.log(parseInt(price)); // 102

// If we give space a the middle of a string then it stops at that point and doesn't go further.

const idWithMiddleSpace = "2393423947 234820394";
console.log(parseInt(idWithMiddleSpace)); // 2393423947

// parseFloat: is used to parse a string to floating point.

const userId = "102323.2323";
const parsedUserId = parseFloat(userId);
console.log(parsedUserId); // 102323.2323

// If we give only integer without decimal point then it also correctly parse that string.

const userId1 = "21219823";
console.log(parseFloat(userId1)); // 21219823

// If we give mixed kind of characters then it stops at non-numerical value.

const _id = "238927321fhuisfg348937458932ihswuigfdui.2dihayswdu";
console.log(parseFloat(_id)); // 238927321

// If we give whole non-numerical values then it gives NaN.
const $id = "sahfshfudfsgyfyudsgfiudfsgjskdhfifjkshgzki\\jkjfgf";
console.log(parseFloat($id)); // NaN

// If we give space at the beginning and at the end of string values then it also correctly parse it.

const floatStringWithSpace = " 93247238478293 ";
console.log(parseFloat(floatStringWithSpace)); // 93247238478293

// If we give space a the middle of a string then it stops at that point and doesn't go further.

const middleSpace = "3847238457 28320983";
console.log(parseFloat(middleSpace)); // 3847238457
