// Intl
// The Intl namespace object contains several constructors as well as functionality common to the internationalization constructors and other language sensitive functions. Collectively, they comprise the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, date and time formatting, and more.

// Simply it simplifies the process of formatting the date, time and also number. It is also used when we want toi format a number is specific country currency.

// For example we want to format a number in Pakistan currency style. It automatically add standard currency style that is used in Pakistan.

// Currency Formatter

const currencyFormatter = new Intl.NumberFormat("en-Pk", {
  style: "currency",
  currency: "PKR",
});

const price = 100000; // 1 Lakh ----> should convert to this in Pakistan Standard Currency Rules Rs 100,000.00
const formattedPrice = currencyFormatter.format(price);
console.log(formattedPrice); // Rs 100, 000.00

// Date Time Formatter

const dateFormatter = new Intl.DateTimeFormat("en-PK", {
  //   minute: "2-digit",
  //   second: "2-digit",
  //   hour: "2-digit",
  //   weekday: "long",
  //   day: "2-digit",
  //   year: "2-digit",
  //   month: "2-digit",

  dateStyle: "medium",
  timeStyle: "medium",
});
const now = new Date();
console.log(now);
console.log(dateFormatter.format(now));
