// Ternery Operator - It is a shortcut for if-else statement
// Syntax: condition ? expression1 : expression2

let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.


// Another example
let number = 10;
let type = number % 2 === 0 ? "Even" : "Odd";
console.log(type); // Output: Even


// Nested Ternery Operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: B