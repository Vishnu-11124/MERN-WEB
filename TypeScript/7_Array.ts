
// First Method: Using square brackets []
let numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers)


// Second Method: Using Array generic type
let fruits: Array<string> = ['apple', 'banana', 'cherry']
console.log(fruits)


// Third Method: Using union types for mixed arrays
let mixedArray: (number | string | boolean)[] = [1, 'two', true, 4, 'five', false]
console.log(mixedArray)



// Multi-dimensional array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let [one, two, three] = matrix;
console.log(`first row: ${one}`);
console.log(`second row: ${two}`);
console.log(`third row: ${three}`);

