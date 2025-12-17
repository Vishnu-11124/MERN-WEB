// Factory function - A factory function in JavaScript is basically a function that returns a new object each time it's called. It allows you to create multiple instances of an object without using the new keyword or a constructor function.

function createUser(firstname, lastname, age){
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        fullname: firstname + ' ' + lastname,
        getUserData: function() {
            console.log(`Hello, My name is ${this.fullname} and ${this.age} years old`)
        }
    }
}

const user1 = createUser('Sarah', 'Dev', 32)
user1.getUserData()

const user2 = createUser('Ram', "venu", 43)
user2.getUserData()

// ---------------------------------------------------

function vehicleData(type, brand, model, year){
    return {
        type,
        brand,
        model,
        year,
        getData: function(){
            console.log(` The ${this.brand} developed ${this.type} in ${this.year} and it's model is called ${this.model}.`)
        }
    }
}

const car = vehicleData("Car", "Toyota", "Corolla", 2020);
car.getData();
// The Toyota developed a Car type vehicle in 2020 and its model is Corolla.
