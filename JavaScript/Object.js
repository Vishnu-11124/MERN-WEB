// Objects in JavaScript
// Objects - key-value pairs to store related data and functionality 
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Accessing property using dot notation
console.log(person["age"]); // Accessing property using bracket notation    
person.age = 31; // Modifying property
console.log(person.age);
person.country = "USA"; // Adding new property
console.log(person.country);
delete person.city; // Deleting property
console.log(person.city); // undefined

// Enhanced Object Literals
const name = "Alice";
const age = 25;
const user = {
    name, // Shorthand property
    age,
    greet() { // Method definition shorthand
        console.log(`Hello, my name is ${this.name}`);
    }
};
user.greet();

// Another example of Enhanced Object Literals

let studentData = (name,age,place) => {
    return {
        name,
        age,
        place,
    };

};

console.log(studentData("Bob",22,"Kozhikkode"));

// Singleton Object - An object that is instantiated only once
const singleton = {
    property: "I am a singleton",
    method() {
        console.log(this.property);
    }
};
singleton.method(); // Output: I am a singleton

// Concatenating Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // Using spread operator
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

