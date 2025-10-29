class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `234`
    }
}

const Ram = new User("Ram")
// console.log(Ram.createId())

class Teacher extends User{
    constructor(username, email){
        super(username),
        this.email = email
    }
}

const ramya = new Teacher('Ramya', 'ramya@gh.com')
ramya.logMe()

console.log(ramya.createId()) // Cann't available because static is used.