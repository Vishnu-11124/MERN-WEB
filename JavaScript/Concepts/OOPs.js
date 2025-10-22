/*
class - A class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate that data.
constructor - A special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created.
this - A keyword that refers to the current instance of the class. It is used to access properties and methods of the class within its methods.
inheritance - A mechanism where a new class (child class) can inherit properties and methods from an existing class (parent class). This promotes code reusability.
polymorphism - The ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon.
encapsulation - The bundling of data (properties) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data.
abstraction - The concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing complexity and increases efficiency.

*/

// Example of a class with constructor, inheritance, and encapsulation
class Animal {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;   // property
    }
    speak() { // method
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal { // inheritance
    constructor(name, age, breed) {
        super(name, age); // calling parent class constructor
        this.breed = breed; // additional property
    }   
    speak() { // polymorphism
        console.log(`${this.name} barks.`);
    }
    getDetails() { // encapsulation
        return `${this.name} is a ${this.age} year old ${this.breed}.`;
    }
}

const dog = new Dog('Buddy', 3, 'Golden Retriever');
dog.speak(); // Output: Buddy barks.
console.log(dog.getDetails()); // Output: Buddy is a 3 year old Golden Retriever.

// Example of abstraction
class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
    start() {
        console.log(`${this.type} is starting.`);
    }
    stop() {
        console.log(`${this.type} is stopping.`);
    }
    getInfo() { // abstraction
        return `This is a ${this.type} moving at ${this.speed} km/h.`;
    }
}

const car = new Vehicle('Car', 120);
car.start(); // Output: Car is starting.
console.log(car.getInfo()); // Output: This is a Car moving at 120 km/h.
car.stop(); // Output: Car is stopping.


