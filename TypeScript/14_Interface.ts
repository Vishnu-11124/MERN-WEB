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
