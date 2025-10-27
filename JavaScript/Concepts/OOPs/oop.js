// Object literal - A simple way to create an object

const person = {
    name: 'John Doe',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.


// Constructor function - A blueprint for creating multiple objects

function Person(username, password){
    this.username = username,
    this.password = password
    this.info = function(){
        console.log(`Hey I am ${this.username}..`)
    }

    return this; // Implicitly returns the new object
}

// new keyword - Creates a new instance of the object defined by the constructor function

let user1 = new Person('Raju','23fd56');
let user2 = new Person('Anita','98gh12');

console.log(user1); // Output: Person { username: 'Raju', password: '23fd56' }

user2.info(); // Output: Hey I am Anita..
