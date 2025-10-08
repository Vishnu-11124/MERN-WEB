// setInterval - It is a method that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// clearInterval - It is a method that stops the execution of the function specified in setInterval.
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 executions
        console.log('Interval cleared');
    }
}, 1000); // Executes every 1000 milliseconds (1 second)

// setTimeout - It is a method that calls a function or executes a code snippet after a specified delay (in milliseconds).
setTimeout(() => {
    console.log('This message is displayed after 3 seconds');
}, 3000);