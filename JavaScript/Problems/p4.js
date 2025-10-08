// Problem 4: Switch Case Statement
// Write a switch case statement that checks the value of a variable fruit and prints a message based on the fruit type.
// If fruit is "banana", print "Banana is good".
// If fruit is "orange", print "I'm not a fan of orange.".
// If fruit is "apple", print "How do you like them apples?".
// For any other fruit, print "I don't know that fruit.".

let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Banana is good");
        break;
    case "orange":
        console.log("I'm not a fan of orange.");
        break;
    case "apple":
        console.log("How do you like them apples?");
        break;
    default:
        console.log("I don't know that fruit.");
}    