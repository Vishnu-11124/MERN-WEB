/*
    Loops are used to execute a block of code repeatedly until a specified condition is met.
    There are several types of loops in JavaScript: for, while, do...while, and for...in.
*/

// 1. For Loop
// Using a for loop to iterate a specific number of times
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}

// 2. For in Loop
// Using for...in to iterate over the properties of an object
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// 3. For of Loop
// Using for...of to iterate over an array
const arr = [10, 20, 30];
for (let value of arr) {
    console.log("For of Loop Value:", value);
}

// 4. While Loop
// Using a while loop to execute code as long as a condition is true
let count = 0;
while (count < 3) {
    console.log("While Loop Count:", count);
    count++;
}

// 5. Do...While Loop
// Using a do...while loop to execute code at least once before checking the condition
let num = 0;
do {
    console.log("Do...While Loop Number:", num);
    num++;
}while (num < 2);
