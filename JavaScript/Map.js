// map() - method creates a new array by applying a function to each element of an existing array.

/*
 array.map((currentValue, index, array) => {
    // code to be executed
});

*/

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
    return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 2: Using map() to convert an array of strings to uppercase
const names = ["Alice", "Bob", "Charlie"];
const uppercasedNames = names.map((name) => name.toUpperCase());
console.log(uppercasedNames); // Output: ["ALICE", "BOB", "CHARLIE"]