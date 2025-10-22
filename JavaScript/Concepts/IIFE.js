
// IIFE - Immediately Invoked Function Expression
// It means a function that runs (executes) immediately after it is created, without needing to be called separately.
/*
    - The function is wrapped inside parentheses ( ... ) → turns it into an expression.

    - Then we immediately call it with () → executes right away.

    - It helps to create a new scope, avoiding variable conflicts in the global scope.

    - Commonly used for initialization code that only needs to run once.
*/

// Normal function
function normalFunction() {
    console.log("This is a normal function.");
}
normalFunction(); // We have to call it separately


// IIFE example and its called named
(function node() {
    console.log("This is an IIFE.");
})(); // It runs immediately

// IIFE with parameters and its called unnamed
((name) => {
    console.log("Hello, " + name + "!");
})("Alice");

// IIFE with return value
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log("Result of IIFE:", result); // Outputs: Result of IIFE: 15