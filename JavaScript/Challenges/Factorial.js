
let factorialFinder = (num) => {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return (num < 0) ? "Factorial is not defined for negative numbers" : res;
}

console.log(factorialFinder(5)); // Output: 120
console.log(factorialFinder(0)); // Output: 1
console.log(factorialFinder(-3)); // Output: Factorial is not defined for negative numbers