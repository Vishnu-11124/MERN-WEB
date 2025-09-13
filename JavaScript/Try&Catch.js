/*
Try-catch-finally in JavaScript
The try-catch-finally statement in JavaScript is used for error handling. It allows you to execute a block of code (the "try" block) and catch any errors that occur during its execution (the "catch" block). The "finally" block, if present, will execute after the try and catch blocks, regardless of whether an error occurred or not.

Here's a breakdown of how it works:
1. try block: This block contains the code that you want to execute. If an error occurs in this block, the control is transferred to the catch block.
2. catch block: This block is executed if an error occurs in the try block. It receives the error object as a parameter, which you can use to get information about the error.
3. finally block: This block is optional and will always execute after the try and catch blocks, regardless of whether an error occurred or not. 
It is typically used for cleanup code that needs to run no matter what.

*/

// Example of try-catch-finally
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Execution completed.");
    }
}

// Test the function
divide(10, 2); // Should print the result
divide(10, 0); // Should catch and print the error
