
/*

- A class in JavaScript is basically a blueprint for creating objects.

- It helps you group properties (data) and methods (functions) that belong together.

- It’s a cleaner, more organized way to write object-oriented code, especially compared to older function-based syntax.

*/

class User {
    constructor(username, email, password){
        this.username =  username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `***${this.password}***`;
    }
}

const user = new User('kiran', 'kiran45@hg.com', '57hghh');
console.log(user.encryptPassword())