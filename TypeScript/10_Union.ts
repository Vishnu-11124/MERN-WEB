
const UserNames : String[] | null = []

UserNames.push('Harry')
UserNames.push('Sarah')

console.log(UserNames)

// ---------------------------------------------

type User = {
    role: "user",
    name: string,
    id: number
}

type Admin = {
    role: "admin",
    username: string,
    id: number
}

let Ram: User | Admin = {
    role: "user",
    name: 'Ram Mohan',
    id: 6753
}
// Now Ram is an admin
Ram = {
    role: "admin",
    username: "Ram Mohan",
    id: 6753
}

let Reena : User | Admin = {
    role: "admin",
    username: "Reena Sebastian",
    id: 98664
} 

// ---------------------------------------------

// Number of array
let Marks: number[] = [38,76,87]

// Array of string
let STudentList: string[] = ['Harry', 'Brook', 'Serah']

// Mixed array of number and string
let MixedArray: (string | number)[] = [45, 'Harry', 78, 'Serah']