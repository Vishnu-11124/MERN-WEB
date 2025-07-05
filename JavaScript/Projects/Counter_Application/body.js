
let counter = 0;

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const increment10Button = document.getElementById("icrement10");
const resetButton = document.getElementById("reset"); 
const counterDisplay = document.getElementById("counter");

incrementButton.addEventListener("click", () => {
    counter++;
    updateCounterDisplay();
});

decrementButton.addEventListener("click", () => {
    counter--;
    updateCounterDisplay();
});

increment10Button.addEventListener("click", () => {
    counter += 10;
    updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
    counter = 0;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}   
