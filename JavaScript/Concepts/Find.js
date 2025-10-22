// find() - method returns the first element in an array that satisfies a given condition

/*
 array.find((currentValue, index, array) => {
    // code to be executed
});
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1: Using find() to get the first even number from an array  
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// Example 2: Using find() to get the first number greater than 5
const firstGreaterThanFive = numbers.find((num) => num > 5);
console.log(firstGreaterThanFive); // Output: 6

// Example 3: Using find() to get the first string with length greater than 3  
const words = ["apple", "is", "banana", "cat", "elephant"];
const firstLongWord = words.find((word) => word.length > 3);
console.log(firstLongWord); // Output: "apple"

// Example 4: Using find() to get the first object with age greater than 25
const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 28 }
];
const firstOlderThan25 = people.find((person) => person.age > 25);
console.log(firstOlderThan25); 
// Output: { name: "Bob", age: 30 }