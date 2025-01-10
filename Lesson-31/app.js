// Date:-
const now = new Date();
console.log(now); // current Date according to UTC. Pakistan is 5 Hours ahead from UTC. (GMT+5)

const getDate = now.getDate();
console.log(getDate); // only current date

// In JavaScript Month start from 0 to 11. 0 is Januaruy and 11 is December
const getMonth = now.getMonth();
console.log(getMonth); // only current month

// In JavaScript Days start from Monday
const getDay = now.getDay();
console.log(getDay); // only current day

const getTime = now.getTime();
console.log(getTime); // Only Current Time in Milliseconds

const getMinutes = now.getMinutes();
console.log(getMinutes); // Only current minute

const getSeconds = now.getSeconds();
console.log(getSeconds); // noly current seconds

// In JavaScript, hours start from 0 to 23.
const getHours = now.getHours();
console.log(getHours); // only current hour

const getTimeZoneOffset = now.getTimezoneOffset();
console.log(getTimeZoneOffset); // Only timezoneoffset

