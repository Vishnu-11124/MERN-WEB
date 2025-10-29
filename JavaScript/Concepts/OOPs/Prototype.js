// let myName = 'Ram Thej'

// console.log(myName.length) // The length include spaces


let heros = ["batman", "flash"]

let heroPower = {
    batman: "rich",
    flash: "speed",

    getBatmanPower: () => {
        console.log(`The batman contains ${this.batman}`)
    }
}

Object.prototype.ram = () => {
    console.log("Hello Ram Thej")
}

Array.prototype.heyRam= () => {
    console.log(`Ram in array`)
}

// heroPower.ram()

heros.ram()
heros.heyRam() // Ram in array

// heroPower.heyRam() // Not available for object



// Inheritance

const user ={
    name: 'ravi kumar',
    email:'ravi@123'
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __porto__: TeachingSupport
}

Teacher.__porto__ = user

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUser = "ravi          ";

// console.log(anotherUser.trim())


String.prototype.trueLength =function () {
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
    console.log(`${this}`)
}

anotherUser.trueLength() // True length is 4

"harry ".trueLength()