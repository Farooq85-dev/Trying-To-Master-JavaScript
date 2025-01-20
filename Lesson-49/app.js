// do while loop
// run the code untill condton is true
// run the code at least one time however condition is false

let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// reverse counting...
do {
  console.log(i);
  i--;
} while (i >= 1);

let j = 1;
do {
  console.log(`*** --- ***`);
  j++;
  let k = 1;
  do {
    console.log(`${j} x ${k} = ${j * k}`);
    k++;
  } while (k <= 9);
} while (j <= 9);

const fruits = ["Apple", "Mango", "Banana"];
let g = 0;
do {
  console.log(fruits[g]);
  g++;
} while (g < fruits.length);
