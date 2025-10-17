/*
Set Data Structure - A collection of unique values

- Sets are a built-in data structure in JavaScript that allow you to store unique values of any type, whether primitive values or object references.

- Sets are useful when you want to ensure that a collection of items does not contain duplicates.

- Sets are iterable, meaning you can loop through their elements using methods like for...of or forEach.

*/

// Creating a Set
const mySet = new Set();
console.log(mySet); // Output: Set(0) {}

// Adding values to a Set
mySet.add(1);
mySet.add(5);
mySet.add('Hello');
mySet.add({ name: 'John' });
console.log(mySet); // Output: Set(4) { 1, 5, 'Hello', { name: 'John' } }


// Iterating over a Set
mySet.forEach((value) => {
    console.log(value);
});
// Output:
// 1
// 5
// Hello
// { name: 'John' }


// Attempting to add duplicate values
mySet.add(1);
mySet.add('Hello');
console.log(mySet); // Output: Set(4) { 1, 5, 'Hello', { name: 'John' } }

// Checking the size of a Set
console.log(mySet.size); // Output: 4

// Checking if a value exists in a Set
console.log(mySet.has(5)); // Output: true
console.log(mySet.has('World')); // Output: true, false

// Removing a value from a Set
mySet.delete(5);
console.log(mySet); // Output: Set(3) { 1, 'Hello', { name: 'John' } }

// Clearing all values from a Set
mySet.clear();
console.log(mySet); // Output: Set(0) {}