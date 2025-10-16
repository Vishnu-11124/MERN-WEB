// Find the largest of three numbers 

let largestNumber = (a, b, c) => {
    (a >= b && a >= c) ? console.log(`${a} is the largest number.`) :
    (b >= a && b >= c) ? console.log(`${b} is the largest number.`) :
    console.log(`${c} is the largest number.`);
}

largestNumber(10, 20, 30); // Output: 30 is the largest number.
largestNumber(50, 20, 30); // Output: 50 is the largest number.
largestNumber(10, 70, 30); // Output: 70 is the largest number.