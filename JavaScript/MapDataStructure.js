/*
 Map Data Structure - A Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
 - Keys can be of any type (objects, functions, primitive types).
 - Maps maintain the order of insertion of key-value pairs.
 - Maps have a size property that returns the number of key-value pairs.
 - Maps provide methods like set, get, delete, has, clear, keys, values, and entries for easy manipulation of data.
*/

// Creating a Map
const myMap = new Map(); // Creating an empty Map

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(true, 'isActive');
myMap.set(42, 'The answer to life');

// Accessing values in the Map
console.log(myMap.get('name')); // Output: John
console.log(myMap) // Output: Map(4) { 'name' => 'John', 'age' => 30, true => 'isActive', 42 => 'The answer to life' }

console.log(myMap.keys()) // Output: MapIterator { 'name', 'age', true, 42 }
console.log(myMap.values()) // Output: MapIterator { 'John', 30, 'isActive', 'The answer to life' }
console.log(myMap.size()) // Output: 4

// Removing a key-value pair from the Map
console.log(myMap.delete(42)) // Output: true
console.log(myMap) // Output: Map(3) { 'name' => 'John', 'age' => 30, true => 'isActive' }


// Checking if a key exists in the Map
console.log(myMap.has('age')); // Output: true
console.log(myMap.has(false)); // Output: false



// creating a Map with initial key-value pairs
const userMap = new Map([
    ['username', 'johndoe'],
    ['email', 'hari@gmail'],
    ['isAdmin', false]
]);

console.log(userMap) // Output: Map(3) { 'username' => 'johndoe', 'email' => 'hari@gmail', 'isAdmin' => false }

// Iterating over a Map
userMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// username: johndoe
// email: hari@gmail
// isAdmin: false


userMap.clear(); // Removing all key-value pairs from the Map
console.log(userMap) // Output: Map(0) {}
   