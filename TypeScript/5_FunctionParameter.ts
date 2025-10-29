
function sum(num1: number, num2: number){
    return num1 + num2;
}

console.log(sum(4,7));


// Arrow function
let power = (val1: number, val2: number) => {
    return val1 ** val2;
}

console.log(power(5,7));


//  Function with default parameter
function result(mark1: number, mark2: number, mark3: number = 67){
    return mark1 + mark2 + mark3;
}

console.log(`Total mark: ${result(87, 54)}`);


// Return Annotation
function multiply(val1: number, val2: number): number{
    return val1 * val2;
}
console.log(`Multiplication: ${multiply(5, 8)}`);