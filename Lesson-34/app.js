// TimeZone
// It is a region where people follow specific standard time. Timezone calculated on the base of UTC.
// Most of the country have their single TimeZone but there are some countries have multiple timezones. Like USA etc.

const pkTime = new Date();
console.log(pkTime.toLocaleString("en-PK", { timeZone: "Asia/Karachi" })); // Returns according to hosted enviroment local machine. Like i am in Pakistan that's why giving according to Pk TimeZone (GMT+5).


