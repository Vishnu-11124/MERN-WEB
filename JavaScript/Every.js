// every() - Method tests whether all elements in an array pass a given condition (callback function). It returns a Boolean value.


const numbers = [2, 4, 6, 8, 10];
// Check if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true



const mixedNumbers = [1, 2, 3, 4, 5];
// Check if all numbers are even
const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log(allEvenMixed); // Output: false



const words = ["apple", "banana", "cherry"];
// Check if all words have more than 3 letters
const allLongWords = words.every(word => word.length > 3);
console.log(allLongWords); // Output: true