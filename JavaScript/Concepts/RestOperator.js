// Rest Operator - It is used to collect multiple elements and condense them into a single element.

// The rest operator is used in function parameters to gather all remaining arguments into an array. It allows a function to accept an indefinite number of arguments as an array, providing flexibility in handling function inputs.

// Variadic Functions: Functions that can take a variable number of arguments.

function dataBase(...data){
    console.log(data) 
}
dataBase("MERN","Stack","Full","Development") // Output: [ 'MERN', 'Stack', 'Full', 'Development' ]



function studentInfo(name, age, ...subjects) {
    console.log(`Name: ${name}, Age: ${age}, Subjects: ${subjects}`);
}
studentInfo("John", 20, "Math", "Science", "History"); // Output: Name: John, Age: 20, Subjects: Math,Science,History   



// Example 1: Using rest operator in function parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30