
const Person = {
    name: 'John Doe',
    age: 43,
    greetRegular: function() {
        console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old.`)
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old.`)
    }
}

Person.greetRegular() // regular function as method allow  this keyword to access the current object
Person.greetArrow() // When we use arrow fun as method then the this represent the global(window) object.

