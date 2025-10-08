// Objects in JavaScript
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