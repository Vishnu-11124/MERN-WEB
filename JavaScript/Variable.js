/*
   - Variables are containers for storing and reusing data values.
   - In JavaScript, you can declare variables using var, let, or const.
   - var : declares a variable that can be re-assigned and has function scope.
   - let : declares a block-scoped variable that can be re-assigned. 
   - const : declares a block-scoped variable that cannot be re-assigned.
*/

// Declaring and initializing variables
var name = "John";  // String
let age = 30;       // Number
const isStudent = true; // Boolean

// Reassigning variables
name = "Jane";
age = 25;

// Multiple variable declarations and then assignment
let city, country;
city = "New York";
country = "USA";

// Multiple variable declarations in one line
let firstName = "Alice", lastName = "Smith", occupation = "Engineer";

// Constants cannot be reassigned
// isStudent = false; // This will throw an error

// Variable types
console.log(typeof name);  // Output: string
console.log(typeof age);   // Output: number
console.log(typeof isStudent); // Output: boolean