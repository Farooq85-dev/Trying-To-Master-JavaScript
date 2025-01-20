// While loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
  i = i + 2;
}

const arr = ["Farooq", "Ahmed", "Usman"];
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// reverse loop
let j = arr.length - 1;
while (j >= 0) {
  console.log(arr[j]);
  j--;
}

const marks = [100, 200, 300];
let k = 0;
let result = null;
while (k < marks.length) {
  result += marks[k];
  k++;
}
console.log(result);

let g = 2;
while (g <= 10) {
  let h = 1;
  while (h <= 10) {
    console.log(`${g} x ${h} = ${g * h}`);    
    h++;
  }
  console.log("*** --- ***");
  g++;
}
