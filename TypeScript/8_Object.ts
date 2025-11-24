
type personType = {
    name: string,
    age?: number, // optional
    readonly place: string
}


const Person : personType = {
    name: 'Harry',
    age: 30,
    place: 'Kochi'
}

// Person.place = 'Goa' // We are only able to read this property

 console.log(`Name: ${Person.name} and ${Person.age} years old`)