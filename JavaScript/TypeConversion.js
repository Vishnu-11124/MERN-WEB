// Type Conversion in JavaScript

// Converting to String
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

// Converting to Number
let str = "456";
console.log(Number(str)); // 456
console.log(parseInt(str)); // 456
console.log(parseFloat("456.78")); // 456.78
console.log(+"789"); // 789

// Converting to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(NaN)); // false

// Implicit Type Conversion 
console.log("5" + 10); // "510" (number 10 is converted to string)
console.log("5" - 2); // 3 (string "5" is converted to number)

console.log("5" - "2"); // 3 (both strings are converted to numbers)
console.log("5" + "2"); // "52" (both are strings, concatenation occurs)
console.log(5 + true); // 6 (true is converted to 1)

console.log(5 + false); // 5 (false is converted to 0)
console.log(5 + null); // 5 (null is converted to 0)
console.log(5 + undefined); // NaN (undefined is converted to NaN)

