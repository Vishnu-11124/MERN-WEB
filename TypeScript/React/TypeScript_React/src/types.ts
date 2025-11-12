 type User = {
    id: number,
    uname: string,
    email: string

}


 type Admin = User & {
    role: string,
    lastlogin: Date
}

export {type User, type Admin }