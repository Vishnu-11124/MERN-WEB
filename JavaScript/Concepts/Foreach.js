// forEach() method in JavaScript is used to execute a provided function once for each array element.

// array.forEach(function(currentValue, index, array) {
//     // code to be executed
// });

const numbers = [10, 20, 30, 40, 50];

numbers.forEach((num, index) =>{
    console.log("Index " + index + ": " + num);
});

// Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40
// Index 4: 50

let sum = 0

numbers.forEach((num) => { 
    sum += num;
});

console.log("Sum: " + sum);

// Output:
// Sum: 150



const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit) => {
    console.log(fruit);
});

// Output:
// Apple
// Banana
// Cherry

