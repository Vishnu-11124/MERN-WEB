/* 
Array - An array is a special variable, which can hold more than one value at a time.
In JavaScript, arrays are used to store multiple values in a single variable.
Arrays are a special type of objects, with the following characteristics:
- Arrays use numbered indexes.
- The first item in an array is at index 0.
- Arrays are a special type of objects, with the following characteristics:
- Arrays use numbered indexes.
- The first item in an array is at index 0.
- Arrays are dynamic in size.
- Arrays can hold items of different types.
- Arrays come with a set of built-in methods (functions) that allow you to manipulate and interact with the array data.
*/

// Creating an array
let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);
console.log(fruits[0]); // Accessing first element
fruits[0] = "Mango"; // Modifying first element
console.log(fruits[0]); // Accessing first element
console.log(fruits.length); // Length of the array

// 1. toString() - Converts an array to a string of (comma separated) values
let fruitsString = fruits.toString();
console.log("Fruits String:", fruitsString);

// 2. join() - Joins all array elements into a string with a specified separator
let fruitsJoined = fruits.join(" - ");
console.log("Fruits Joined:", fruitsJoined);

// 3. pop() - Removes the last element from an array and returns that element
let lastFruit = fruits.pop();
console.log("Popped Fruit:", lastFruit);
console.log("Fruits after pop:", fruits);

// 4. push() - Adds a new element to the end of an array and returns the new length of the array
let newLength = fruits.push("Pineapple");
console.log("New Length after push:", newLength);
console.log("Fruits after push:", fruits);

// 5. shift() - Removes the first element from an array and returns that element
let firstFruit = fruits.shift();
console.log("Shifted Fruit:", firstFruit);
console.log("Fruits after shift:", fruits);

// 6. unshift() - Adds a new element to the beginning of an array and returns the new length of the array
newLength = fruits.unshift("Strawberry");
console.log("New Length after unshift:", newLength);
console.log("Fruits after unshift:", fruits);

// 7. delete - Deletes an element from an array (does not change the length of the array)
delete fruits[1];
console.log("Fruits after delete:", fruits);

// 8. concat() - Merges two or more arrays and returns a new array
let vegetables = ["Carrot", "Broccoli"];
let food = fruits.concat(vegetables);
console.log("Food (Fruits + Vegetables):", food);

// 9. sort() - Sorts the elements of an array in place and returns the sorted array
let sortedFruits = fruits.sort();
console.log("Sorted Fruits:", sortedFruits);

// 10. splice() - Adds/Removes elements from an array
// Adding elements
fruits.splice(2, 0, "Kiwi", "Grapes"); // At index 2, remove 0 elements, add "Kiwi" and "Grapes"
console.log("Fruits after splice (add):", fruits);
// Removing elements
fruits.splice(1, 2); // At index 1, remove 2 elements
console.log("Fruits after splice (remove):", fruits);

// 11. slice() - Returns a shallow copy of a portion of an array into a new array object
let citrusFruits = fruits.slice(1, 3); // From index 1 to 3 (not including 3)
console.log("Citrus Fruits (slice):", citrusFruits);

// map - Creates a new array populated with the results of calling a provided function on every element in the calling array
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers (map):", squaredNumbers);

// filter - Creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter((num)=> { return num % 2 === 0; });
console.log("Even Numbers (filter):", evenNumbers);

// reduce - Executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers (reduce):", sum);

