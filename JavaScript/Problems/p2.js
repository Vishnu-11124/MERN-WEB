// String Manipulation
// Create a string variable to store your favorite actor's first and last name.
// Convert the full name to uppercase and store it in another variable.
// Create a message that says "My favorite actor is [FULL NAME]." using template literals.
// Append another sentence to the message: "I really admire his acting skills."
// Finally, print the complete message to the console.

let favActorFirstName = "Robert";
let favActorLastName = "Downey Jr.";
let fullName = favActorFirstName + " " + favActorLastName;
let uppsercaseName = fullName.toUpperCase();
let message = `My favorite actor is ${uppsercaseName}.`;
message += " I really admire his acting skills.";
console.log(message);