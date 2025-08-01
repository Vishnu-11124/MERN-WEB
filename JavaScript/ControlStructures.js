
// Control Structures - JavaScript provides several control structures to manage the flow of execution in a program. These include conditional statements, loops, and exception handling.

// --------------------------------------------------------------------------------------

// 1. Conditional Statements
// If Statement - executes a block of code if a specified condition is true.
if (condition) {
    // Code to execute if condition is true
}

// example condition
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// --------------------------------------------------------------------------------------

// If-Else Statement - executes a block of code if a specified condition is true, otherwise executes another block.
if (condition) {
    // Code to execute if condition is true
}
else {
    // Code to execute if condition is false
}

// example if-else
if (age < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}

// --------------------------------------------------------------------------------------

// Ternary Operator - a shorthand for if-else statements.
let result = (condition) ? valueIfTrue : valueIfFalse;

// example ternary operator
let canVote = (age >= 18) ? "Yes" : "No";

// --------------------------------------------------------------------------------------

// If-Else If-Else Statement - allows multiple conditions to be checked in sequence.
if (condition1) {
    // Code to execute if condition1 is true
}
else if (condition2) {
    // Code to execute if condition2 is true
}
else {
    // Code to execute if neither condition1 nor condition2 is true
}

// example if-else if-else
if (age < 13) {
    console.log("You are a child.");
}
else if (age < 18) {
    console.log("You are a teenager.");
}
else {
    console.log("You are an adult.");
}

// --------------------------------------------------------------------------------------