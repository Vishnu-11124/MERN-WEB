
// Charachter Counter Function

// Length of the string
function characterCount(str) {
   return str.length; // Returns the length of the string
}

// Uppercase the string
function toUpperCase(str) {
    return str.toUpperCase(); // Converts the string to uppercase
}

// Lowercase the string
function toLowerCase(str) {
    return str.toLowerCase(); // Converts the string to lowercase
}

// slice the string
function sliceString(str, start, end) {
    return str.slice(start, end); // Returns a slice of the string from start to end index
}

// concatenate with another string
function concatenateStrings(str1, str2) {
    return str1 + str2; // Concatenates two strings
}

// words index
function wordIndex(str, word) {
    const index = str.indexOf(word); // Finds the index of the word in the string
    return index !== -1 ? index : "Word not found"; // Returns the index or a message if not found
}


// Example usage
const exampleString = "Hello, World!";
console.log("Character Count:", characterCount(exampleString)); // Output: 13
console.log("Uppercase:", toUpperCase(exampleString)); // Output: "HELLO, WORLD!"
console.log("Lowercase:", toLowerCase(exampleString)); // Output: "hello, world!"
console.log("Sliced String:", sliceString(exampleString, 0, 5)); // Output: "Hello"
console.log("Concatenated String:", concatenateStrings(exampleString, " How are you?")); // Output: "Hello, World! How are you?"
console.log("Word Index:", wordIndex(exampleString, "World")); // Output: 7
