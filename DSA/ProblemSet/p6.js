// Find the larger of two numbers 


let largerNumber = (firstNumber, secondNumber) => {
    (firstNumber > secondNumber) ? console.log(`${firstNumber} is larger than ${secondNumber}`) : console.log(`${secondNumber} is larger than ${firstNumber}`);
}

largerNumber(10, 20); // Output: 20 is larger than 10
largerNumber(30, 15); // Output: 30 is larger than 15