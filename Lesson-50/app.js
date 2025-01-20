// for of loop

const myFriends = ["Arslan", "Faizan"];

for (const friend of myFriends) {
  console.log(friend);
}

const myData = {
  name: "Muhammad",
  className: "10th",
};

for (const key in myData) {
  console.log(myData[key]);
}

// classical way
const allKeys = Object.keys(myData);
for (let i = 0; i < allKeys.length; i++) {
  console.log(myData[allKeys[i]]);
}

for (const index in myFriends) {
  console.log("for in on array ===>", myFriends[index]);
}
