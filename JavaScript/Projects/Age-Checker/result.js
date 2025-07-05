

const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function checkAge() {
    const age = parseInt(ageInput.value);
    
    if (isNaN(age)) {
        result.textContent = "Please enter a valid number.";
    } else if (age < 0) {
        result.textContent = "Age cannot be negative.";
    } else if (age < 13) {
        result.textContent = "You are a child.";
    } else if (age < 18) {
        result.textContent = "You are a teenager.";
    } else {
        result.textContent = "You are an adult.";
    }
}

document.getElementById("checkButton").addEventListener("click", checkAge);

