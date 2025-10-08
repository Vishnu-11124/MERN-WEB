// Function that takes another function as an argument and calls it with a value
// Callback Function - A function that is passed as an argument to another function and is executed after the completion of that function.

function myFunction(fn){
    let a = 10;
    fn(a);
}

function callback(num) {
    console.log(`Callback function called with argument: ${num}`);
}

myFunction(callback);

