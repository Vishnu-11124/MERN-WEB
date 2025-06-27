
// Strings are immutable sequences of characters in JavaScript.
// They can be created using single quotes, double quotes, or backticks (template literals).
// Strings can be manipulated using various methods and properties.

let singleQuoteString = 'Hello, World!'; // Single quotes
let doubleQuoteString = "Hello, World!"; // Double quotes
let templateLiteralString = `Hello, World!`; // Template literals


// methods and properties for string manipulation

// 1.Length - counts the number of characters in a string
let str = "Hello, World!";
console.log(str.length); // Output: 13

// 2.Accessing characters
console.log(str[0]); // Output: H
console.log(str.charAt(0)); // Output: H

// 3.Concatenation
let str1 = "Hello";
let str2 = "World!";
let concatenated = str1 + " " + str2; // Using + operator
console.log(concatenated); // Output: Hello World!

// 4.toUpperCase - converts all characters to uppercase
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: HELLO, WORLD!

// 5.toLowerCase - converts all characters to lowercase
let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // Output: hello, world!

// 6.indexOf - finds the index of a substring
let index = str.indexOf("World");
console.log(index); // Output: 7

// 7.slice - extracts a section of a string
let slicedStr = str.slice(0, 5); // Extracts "Hello"

// 8.replace - replaces a substring with another substring
let replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr); // Output: Hello, JavaScript!

// 9.template literals - allows embedding expressions
let name = "Alice";
let greeting = `Hello, ${name}!`; // Using template literals
console.log(greeting); // Output: Hello, Alice!

// 10.split - splits a string into an array of substrings
let words = str.split(", "); // Splits by comma and space
console.log(words); // Output: [ 'Hello', 'World!' ]