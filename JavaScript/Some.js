// some() - method is used to check if at least one element in an array passes a given test (condition). It returns a Boolean value (true or false).

const numbers = [1, 2, 3, 4, 5];
// Check if there is at least one even number
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true


const mixedNumbers = [1, 3, 5, 7, 9];
// Check if there is at least one even number
const hasEvenMixed = mixedNumbers.some(num => num % 2 === 0);
console.log(hasEvenMixed); // Output: false


const words = ["apple", "banana", "cherry"];
// Check if there is at least one word with more than 5 letters
const hasLongWord = words.some(word => word.length > 5);
console.log(hasLongWord); // Output: true
