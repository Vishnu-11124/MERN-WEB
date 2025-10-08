// Problem 3: Password Validator
// Write a program that checks if a given password meets the following criteria:
// - At least 8 characters long
// - If the password is exactly 8 characters, print "Welcome"
// - If the password is less than 8 characters, print "Password is too short"
// - If the password is more than 8 characters, print "Password is too long & should be 8 characters"


let password = '';
if (password.length == 8) {
    console.log("Welcome")
}
else if(password.length < 8 && password.length >1) {
    console.log("Password is too short")
}
else if(password.length > 8 ) {
    console.log("Password is too long & should be 8 characters")
}
else {
    console.log("Please enter a valid password")
}