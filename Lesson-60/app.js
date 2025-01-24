// Generator Func
// introduced in ES6(2015)
// return multiple vlaues
// return values on demand
// yield is used to return values
// return tells no more values

function* generateNumbers() {
  console.log("Before 1...");
  yield 1;
  console.log("Before 2...");
  yield 2;
  console.log("Before return...");
  return;
}
const result = generateNumbers();
console.log(result.next());
console.log(result.next());
console.log(result.next());

function* range(start, end) {
  for (let count = start; count <= end; count++) {
    yield count;
  }
}

const resul = range(0, 20);
for (let num of resul) {
  console.log(num);
}
