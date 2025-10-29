// Type Inference - TypeScript has a powerful type inference system that automatically infers types based on the values assigned to variables and the return types of functions. This allows developers to write cleaner code without explicitly specifying types everywhere, while still benefiting from TypeScript's type safety.

// Example 1: Variable Type Inference
let message = "Hello, TypeScript!"; // TypeScript infers the type as string
// message = 42; // Error: Type 'number' is not assignable to type 'string'

let count = 10; // TypeScript infers the type as number
count += 5; // Valid operation

// count = "ten"; // Error: Type 'string' is not assignable to type 'number'