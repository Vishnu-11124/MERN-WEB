
/*
    - Functions : A reusable block of code that performs a specific task.
    - Function Declaration: A named function that can be called later.
    - Function Expression: A function that is defined within an expression, often assigned to a variable
    - Parameters: Variables that are passed into a function.
    - Arguments: Values that are passed to the function when it is called.
    - Return Value: The value that a function returns after execution.
    - Callback Function: A function that is passed as an argument to another function and is executed after the completion of that function.
    - Default Parameters: Parameters that have a default value if no argument is provided.

    - Characteristics of Functions:
        - Reusable : Functions can be called multiple times.
        - Modular : Breaks code into smaller, manageable tasks for better organization and readability.
        - Return Values : Functions can return values to the caller.
        - Functions can accept parameters and return values.
        - Functions can be nested within other functions.
        - Functions can be assigned to variables.
        - Functions can be passed as arguments to other functions.

    - Function Declaration: A named function that is defined using the `function` keyword.
    - Function Expression: A function that is defined within an expression, often assigned to a variable
    - Arrow Function: A concise syntax for writing functions using the arrow (=>) notation.
    - Anonymous Function: A function that does not have a name and is often used as a callback or in function expressions.

*/

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Call
console.log(greet("Alice")); // Output: Hello, Alice!


// Function for caluclating the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Calling the sum function
console.log(sum(5, 10)); // Output: 15



// Default Parameters
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

let power = (x, y=2) => {
    return x**y;
}

console.log(power(5)); // 25
console.log(power(5,3)); // 125

// Calling the greetWithDefault function without an argument
console.log(greetWithDefault()); // Output: Hello, Guest!


// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Calling the multiply function
console.log(multiply(5, 10)); // Output: 50


// Arrow Function
const divide = (a, b) => {
    return a / b;
};

// Calling the divide function
console.log(divide(10, 2)); // Output: 5



// Anonymous Function
setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000); // Output: This message is displayed after 2 seconds.




