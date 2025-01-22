// recursion
// it is a problem solving technique
// a function call itself with a smaller similiar problem
// poblem is divded into smaller parts
// Recursion is a programming technique where a function calls itself to solve problems by breaking them into smaller subproblems

// Example:- factorial

// using loop

let num = 4;
for (let i = num - 1; i >= 1; i--) {
  console.log(i);
  num = num * i;
  // 4 * 3 = 12
  // 12 * 2 = 24
  // 24 * 1 = 24
}

console.log(num);

// using recursion
// https://www.freecodecamp.org/news/recursion-in-javascript/

// The Three Parts of a Recursive Function

// The function definition.
// The base condition.
// The recursive call.

function recursion(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * recursion(n - 1);
  }
}

console.log(recursion(4));
