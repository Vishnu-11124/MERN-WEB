// 1. Lexical Scope
// Lexical scope refers to the ability of a function scope to access variables from the parent scope.
// It is determined by where you write the code (where the function is physically defined).

function outer() {
    let name = "Mozilla"; // name is a local variable created by init
    function inner() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    inner();
}
outer();

// -------------------------------------------------------------------------


// 2. Closure
// A closure is a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// Crucially, the closure 'remembers' the variables even after the outer function has finished executing.

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5); // add5 is now a closure that "remembers" x = 5
const add10 = makeAdder(10); // add10 is now a closure that "remembers" x = 10

console.log(add5(2));  // 7
console.log(add10(2)); // 12
