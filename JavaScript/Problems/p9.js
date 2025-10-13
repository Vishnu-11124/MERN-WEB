// Problem 9: Object Destructuring
// Given an object representing a person with properties name, age, and country, use object destructuring to extract these properties into separate variables and print them in a formatted string.

const person = {
    name: 'John',
    age: 25,
    gender:'male',
    country: 'USA'
}

const {name, age, country} = person;
console.log(`My name is ${name}, I'm ${age} years old and I live in ${country}.`);