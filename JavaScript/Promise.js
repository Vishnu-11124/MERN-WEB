// Promise - An object representing the eventual completion or failure of an asynchronous operation
// States: Pending, Fulfilled, Rejected
// Methods: then(), catch(), finally()
// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});
// Consuming a Promise
myPromise
    .then((message) => {
        console.log(message); // Handle success
    })
    .catch((error) => {
        console.error(error); // Handle error
    })
    .finally(() => {
        console.log("Promise has been settled (either resolved or rejected).");
    });
