
let factorialFinder = (num) => {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(factorialFinder(5)); // Output: 120
console.log(factorialFinder(0)); // Output: 1
console.log(factorialFinder(-3)); // Output: Factorial is not defined for negative numbers