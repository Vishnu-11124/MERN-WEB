
// Type Guard
type MyType = string | number;

const exampleFunction = (value: MyType): void => {
    if (typeof value === 'string') {
        console.log(`Edited String: ${value.toUpperCase()}`)
    } else {
        console.log(`Power value: ${value**value}`)
    }
}

exampleFunction("Hey, Harry!")
exampleFunction(6) 

// --------------------------------------------------

// Instanceof operator
class Dog{
    bark(): string {
        return "Woof Woof!"
    }
}

class Cat{
   meow(): string {
    return "Meow Meow!!"
   }
}

const makeSound = (animal: Dog | Cat): void =>{
    if(animal instanceof Dog){
        console.log(animal.bark())
    }
    else{
        console.log(animal.meow())
    }
}

makeSound(new Dog())
makeSound(new Cat())

// -------------------------------------------------

// Intersection Types
type Employee = {
    name: string,
    email: string,
    phone: number
}

type Manager = {
    department: string,
    depId: number,
    depNumber: number
}

type BasicData = {
    id: number,
    role: string,
    getData(): string
}

type FullEmployee = (Employee & BasicData) | (Employee & Manager & BasicData);
const employeeOne : FullEmployee = {
    id: 7865,
    role: "employee",
    name: "Radha Rajeev",
    email: "radha@gmail.com",
    phone: 765439876,
    getData() {
        return `${this.name} is our new ${this.role}.`
    }
}

const employeeTwo: FullEmployee = {
    id: 1234,
    role: "manager",
    name: "John Doe",
    email: "john.doe@company.com",
    phone: 1234567890,
    department: "Engineering",
    depId: 42,
    depNumber: 101,
    getData() {
    if ("department" in this) {
        return `${this.name} is our new ${this.role} and working in ${this.department} department`;
    }
    else{
        return `${this.name} is our new ${this.role}.`;
    }   
    }

};


console.log(employeeOne.getData())
console.log(employeeTwo.getData())