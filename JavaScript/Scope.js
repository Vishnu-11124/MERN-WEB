// Scope - The context in which variables and functions are accessible 

// Global Scope
var globalVar = "I am a global variable";
function globalFunction() {
    console.log(globalVar); // Accessible here
}
globalFunction();
console.log(globalVar); // Accessible here

// Local Scope
function localFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
    console.log(globalVar); // Also accessible here
}
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

localFunction();

// Block Scope (using let and const)
if (true) {
    let blockVar = "I am a block-scoped variable";
    const blockConst = "I am a block-scoped constant";
    console.log(blockVar); // Accessible here
    console.log(blockConst); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined
console.log(globalVar); // Still accessible here

// Function Scope vs Block Scope
function functionScope() {
    if (true) {
        var functionVar = "I am function-scoped";
        let blockVar = "I am block-scoped";
        console.log(functionVar); // Accessible here
        console.log(blockVar); // Accessible here
    }
    console.log(functionVar); // Accessible here
    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}
functionScope();