// Simple Calculator Function

// Addition Function
function add(a, b) {
    return a + b;
}

// Subtraction Function
function subtract(a, b) {
    return a - b;
}

// Multiplication Function
function multiply(a, b) {
    return a * b;
}

// Division Function
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Calculator Function
function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Error: Invalid operation.";
    }
}

// Example Usage
console.log(calculator(10, 5, 'add'));        // Output: 15
console.log(calculator(10, 5, 'subtract'));   // Output: 5
console.log(calculator(10, 5, 'multiply'));   // Output: 50
console.log(calculator(10, 5, 'divide'));     // Output: 2
console.log(calculator(10, 0, 'divide'));     // Output: Error: Division by zero is not allowed.
console.log(calculator(10, 5, 'modulus'));    // Output: Error: Invalid operation.