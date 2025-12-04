class Person  {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Alice', 45);
console.log(person1)

// ----------------------------------------------
// Access Modifiers - public, private and protected
class Employee {
    private firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Manager extends Employee {
    protected age: number;

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName);
        this.age = age;
    }

    getManagerInfo(): string {
        return `${this.getName()} (Age: ${this.age})`;
    }
}

let emp1 = new Employee("Radha", "Rajeev");
console.log(emp1.getName());

let mgr1 = new Manager("Kiran", "Kumar", 40);
console.log(mgr1.getManagerInfo());
