// Any Type - The any type in TypeScript is a powerful feature that allows developers to opt-out of type checking for specific variables. When a variable is declared with the any type, it can hold values of any type, and TypeScript will not perform any type checking on it. This can be useful in scenarios where the type of a variable is dynamic or unknown at compile time, but it should be used sparingly as it can lead to potential runtime errors if not handled carefully.

let newValue: any = 54;
console.log(`Before value: ${newValue}`)
newValue = "Value Changed!";
console.log(`After value: ${newValue}`)