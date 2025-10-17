/*
 - Symbols are a unique and immutable primitive data type introduced in ES6 (ECMAScript 2015).
 - They are often used to create unique property keys for objects, ensuring that the keys do not conflict with other keys, even if they have the same name.
 -  Each symbol is guaranteed to be unique, even if they have the same description.
*/ 

// Creating Symbols
let symbol1 = Symbol('description');
console.log(symbol1) // Output: Symbol(description)

console.log(typeof symbol1) // Output: symbol

// Compare two symbols
let symbol2 = Symbol('description');
console.log(symbol1 === symbol2) // Output: false

// Using Symbols as Object Keys

let key1 = Symbol('key1');
let key2 =  Symbol('key2');

let myObject = {};

myObject[key1] = 'Value for key1';
myObject[key2] = 'Value for key2';

console.log(myObject) // Output: { [Symbol(key1)]: 'Value for key1', [Symbol(key2)]: 'Value for key2' }

console.log(myObject.keys()) // Output: undefined



