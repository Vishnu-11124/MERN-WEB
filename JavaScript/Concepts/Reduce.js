// reduce() - method executes a callback function for each element of an array and accumulates the result into a single value.


const numbers = [1, 2, 3, 4, 5];
// Calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


const mixedNumbers = [10, 20, 30, 40, 50];
// Calculate the product of all numbers in the array
const product = mixedNumbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 12000000



const words = ["Hello", " ", "World", "!"];
// Concatenate all words in the array into a single string
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(sentence); // Output: "Hello World!"


const fruits = ["apple", "banana", "cherry", "apple", "banana", "apple"];
// Create an object that counts the occurrences of each fruit in the array
const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue];
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}
, {});
console.log(fruitCount); // Output: { apple: 1, banana: 1, cherry: 1 }