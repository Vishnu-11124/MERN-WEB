/*

 - It demonstrates the use of different data types in JavaScript.
 - The code includes examples of strings, numbers, booleans, arrays, and objects.

*/

// Primitive Data Types - these are immutable and represent single values.

let str = "Hello, World!"; // String
let num = 42;               // Number
let isTrue = true;          // Boolean
let nothing = null;         // Null
let notDefined;            // Undefined
let symbol = Symbol("unique"); // Symbol
let bigInt = BigInt(9007199254740991); // BigInt

// Non-Primitive Data Types - these can hold collections of values or more complex entities.

// Array - a collection of values
let arr = [1, 2, 3, 4, 5]; 

// Object - a collection of key-value pairs
let obj = {
    name: "Alice",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA"
    }
}; 

// Function - a block of code designed to perform a particular task
let func = function() { 
    console.log("This is a function");
}; 
