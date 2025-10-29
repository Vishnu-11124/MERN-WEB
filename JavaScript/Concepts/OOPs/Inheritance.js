class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `***${this.password}***`;
    }

    addCourse(){
        console.log(`${this.username} is the new teacher and you can contact her in ${this.email}`)
    }
}

let newInfo = new Teacher('Raji','raji@yg.com', '6yr57hf');
newInfo.addCourse()