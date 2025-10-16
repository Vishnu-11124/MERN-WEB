// filter() - method is used to create a new array that includes only the elements which pass a specific test (condition) provided by a callback function. 

/*
 array.filter((currentValue, index, array) => {
    // code to be executed
});
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1: Using filter() to get even numbers from an array  
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Using filter() to get numbers greater than 5
const greaterThanFive = numbers.filter((num) => num > 5);
console.log(greaterThanFive); // Output: [6, 7, 8, 9, 10]


// Example 3: Using filter() to get strings with length greater than 3  
const words = ["apple", "is", "banana", "cat", "elephant"];
const longWords = words.filter((word) => word.length > 3);
console.log(longWords); // Output: ["apple", "banana", "elephant"]

// Example 4: Using filter() to get objects with age greater than 25
const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 28 }
];
const olderThan25 = people.filter((person) => person.age > 25);
console.log(olderThan25); 
// Output: [{ name: "Bob", age: 30 }, { name: "David", age: 28 }]
