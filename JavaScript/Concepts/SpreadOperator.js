// Spread Opearator -   ...

// The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Example 1: Using spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]


// Example 2: Using spread operator with function arguments
function colourMix(colour1, colour2, colour3) {
    console.log(`Mixing colours: ${colour1}, ${colour2}, ${colour3}`);
}

const colours = ['Red', 'Green', 'Blue'];
colourMix(...colours); // Output: Mixing colours: Red, Green, Blue


// Example 3: Using spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Example 4: Using spread operator to copy an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
