// Destructuring - A simple and clean way to unpack values from an array / objects into separate variables.It helps make your code shorter, easier to read, and more expressive.


// Array Destructuring - allows you to easily extract values from arrays and assign them to variables in a single, clean statement.
// Example 1: Basic Array Destructuring 
const numbers = [1, 2, 3, 4, 5];
/* 
Instead of doing this:

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
*/
const [first, second, third] = numbers; // first=1, second=2, third=3
console.log(first, second, third); // Output: 1 2 3

// Example 2: Skipping Values
const [one, , three] = numbers; // one=1, three=3
console.log(one, three); // Output: 1 3

// Example 3: Using Rest Operator
const [head, ...tail] = numbers; // head=1, tail=[2, 3, 4, 5]
console.log(head, tail); // Output: 1 [2, 3, 4, 5]

// Default Values
const [x, y, z = 10] = [5, 6]; // x=5, y=6, z=10 (default value used)
console.log(x, y, z); // Output: 5 6 10

// Function Return Values
function getCoordinates() {
    return [25.276987, 55.296249];
}
const [latitude, longitude] = getCoordinates(); // latitude=25.276987, longitude=55.296249
console.log(latitude, longitude); // Output: 25.276987 55.296249


// Object Destructuring - allows you to extract properties from objects and assign them to variables in a concise way.
// Example 1: Basic Object Destructuring
const person = { name: 'Alice', age: 30, city: 'New York' };
/* 
Instead of doing this:
const name = person.name;
const age = person.age;
const city = person.city;
*/
const { name, age, city } = person; // name='Alice', age=30, city='New York'
console.log(`My naame is ${name} and i am ${age} years old. I'm from ${city}`); // Output: Alice 30 New York

// Example 2: Renaming Variables
const { name: fullName, age: yearsOld } = person; // fullName='Alice', yearsOld=30
console.log(fullName, yearsOld); // Output: Alice 30

// Example 3: Default Values
const { name: n, country = 'USA' } = person;
console.log(n, country); // Output: Alice USA   

// Rest Operator
const { name: personName, ...details } = person;
console.log(personName); // Output: Alice
console.log(details); // Output: { age: 30, city: 'New York' }


// Function Parameters
let user = { name: 'Bob', age: 28, country: 'Canada' };
// Without Destructuring
function showUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
showUser(user); // Output: Name: Bob, Age: 28

// With Destructuring
function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(user); // Output: Name: Bob, Age: 28

// Another Example
const food = {
    title: 'Indian Foods',
    menu: ['Dosa', 'Idli', 'Vada'],
}

function getFood({title, place = 'Kochi', menu: [first, second, third]}) {
    console.log(`Title: ${title}, Place: ${place}, Menu: ${first}, ${second}, ${third}`);
}

getFood(food) // Output: Title: Indian Foods, Place: Kochi, Menu: Dosa, Idli, Vada


// Nested Destructuring
const employee = {
    id: 101,    
    name: 'Charlie',
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        country: 'USA'
    },
    skills: ['JavaScript', 'React', 'Node.js']
};
const { name: empName, address: { city: empCity }, skills: [primarySkill] } = employee;
console.log(empName, empCity, primarySkill); // Output: Charlie Los Angeles JavaScript