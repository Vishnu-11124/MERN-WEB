type PersonalInfo = {
    name: string,
    age: number,
    place: string
}

type AccntInfo = {
    username: string,
    password: string
}

type User = PersonalInfo & AccntInfo;

let user: User = {
    name: 'Harry',
    age: 30,
    place: 'Kochi',
    username: 'harrybrook',
    password: 'password123'
}

const AccntUser = (user: User) => {
    const hashPass: string = `56@56${user.password}76jhbkl`
    
    return `My name is ${user.name} and I am ${user.age} years old. My username is ${user.username} and my password is ${hashPass}.`
}

console.log(AccntUser(user))