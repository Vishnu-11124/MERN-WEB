
// BMI Calculator
// This code calculates the Body Mass Index (BMI) based on user input for weight and height

function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        return "Weight and height must be positive numbers.";
    }
    const bmi = weight / (height * height);
    return `Your BMI is ${bmi.toFixed(2)}`;
}


// Example usage
const weight = parseFloat(prompt("Enter your weight in kg:"));
const height = parseFloat(prompt("Enter your height in meters:"));
const result = calculateBMI(weight, height);
console.log(result); // Output: Your BMI is [calculated value]