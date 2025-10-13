// Problem 8: Given an array of colors, use destructuring to assign the first three colors to separate variables and print them.

const colors = ["Red", "Green", "White", "Black", "Pink", "Yellow"];

const [color1, color2, color3] = colors;

console.log(`First color is ${color1}`);
console.log(`Second color is ${color2}`);
console.log(`Third color is ${color3}`);