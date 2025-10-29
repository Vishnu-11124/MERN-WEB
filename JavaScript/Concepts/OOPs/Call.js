function setUsername(username) {
    // Complex DB call
    this.username = username;
}


function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const user1 = new createUser('harry', 'harry@re.com', '12harry34');
console.log(user1)
