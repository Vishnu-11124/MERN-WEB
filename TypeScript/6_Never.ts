// Never - It is a type that represents values that never occur. It is often used as the return type for functions that always throw an error or never return.

// Function that always throws an error
let throwError = (message: string): never => {
    throw new Error(message);
}

// Function with an infinite loop
let infiniteLoop = (): never => {
    while (true) {
        console.log("This loop will run forever.");
    }
}


// Variable of type never
let neverVariable: never;
neverVariable = throwError("This is an error!"); // This will throw an error