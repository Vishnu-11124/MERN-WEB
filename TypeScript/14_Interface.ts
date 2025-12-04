interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string, // optional
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponname: string) : number

}

interface User {
    role: "admin" | "user" | "superadmin"
}

interface Admin extends User {
    getUserDetails(userId: number): object
}

const harry: User = {
    dbId: 754,
    role: "user",
    email: "h@h.com",
    userId: 767,
    startTrial: () => { return "Trial starting soon..." },
    getCoupon: (couponname: string) => 10
}

const admin: Admin = {
    dbId: 101,
    email: "admin@gmail.com",
    userId: 1,
    role: "admin",
    startTrial: () => "Trial started",
    getCoupon: (couponname: string) => 50,

    getUserDetails: (userId: number) => {
        return { userId, email: "sample@gmail.com" }
    }
}

// ------------------------------------------------------

interface Movie {
    title: string,
    director: string,
    getMovieDetails(): string
} 

const movie1: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    getMovieDetails: () => {
        return `${movie1.title} directed by ${movie1.director}`
    }
}

console.log(movie1.getMovieDetails());

// ------------------------------------------------------

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(25, 65))
const multiply: MathOperation = (a, b) => a * b;
console.log(multiply(7, 4))

// ------------------------------------------------------

interface Song {
    getInfo(title: string, artist: string) : string
}

const songDetails: Song = {
    getInfo: (title, artist) => {
        return `The song ${title} is sung by ${artist}`
    }
}

console.log(songDetails.getInfo('Dance Monkey','David Guptha'))