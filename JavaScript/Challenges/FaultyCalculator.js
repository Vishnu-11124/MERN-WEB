
let numberOne = 5
let numberTwo = 6
let operator = "+";

function faultyCalculator(numberOne, numberTwo, operator) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber > 2){
    if (operator === "+") {
        console.log("Result:", parseFloat(numberOne) + parseFloat(numberTwo));
    } else if (operator === "-") {
        console.log("Result:", parseFloat(numberOne) - parseFloat(numberTwo));
    } else if (operator === "*") {
        console.log("Result:", parseFloat(numberOne) * parseFloat(numberTwo));
    } else if (operator === "/") {
        console.log("Result:", parseFloat(numberOne) / parseFloat(numberTwo));
    } else {
        console.log("Invalid operator. Please use +, -, *, or /.");
    }
}
else{
    if (operator === "+") {
        console.log("Result:", parseFloat(numberOne) - parseFloat(numberTwo));
    } else if (operator === "-") {
        console.log("Result:", parseFloat(numberOne) / parseFloat(numberTwo));
    } else if (operator === "*") {
        console.log("Result:", parseFloat(numberOne) + parseFloat(numberTwo));
    } else if (operator === "/") {
        console.log("Result:", parseFloat(numberOne) ** parseFloat(numberTwo));
    } else {
        console.log("Invalid operator. Please use +, -, *, or /.");
}
}
}

faultyCalculator(numberOne, numberTwo, operator);
