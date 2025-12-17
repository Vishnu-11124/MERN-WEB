
function Person(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.info = function (){
         return ` Hey, I am ${this.name} and I am ${this.age} years old.`
    }
        
}

const harry = new Person('harry', 32, 'M')
console.log(harry.info())
const Reena = new Person('Reena', 21, 'F')
console.log(Reena.info())

//------------------------------------------------
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.start = function() {
        return `Starting the ${this.make} ${this.model} in ${this.year} with ${this.color} color.`
    },
    this.stop = function() {
        return `Stopping the ${this.make} ${this.model} in ${this.year} with ${this.color} color.`
    }
}

const car1 = new Car('Toyota', 'Camry', 2028, 'blue')
console.log(car1.start())

const car2 = new Car('Honda', 'CR-V', 2023, 'gold')
console.log(car2.stop())