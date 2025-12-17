
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

// --------------------------------------------------------------------- 

type Item = {
    name: string,
    quantity: number,
    price: number
}

type Address = {
    street: string,
    city: string,
    state: string,
    pin: number,
    mobile:number
}

type Order = {
    id: string,
    date: Date,
    items: Item[],
    address: Address
}

const orderDetails: Order = {
    id: "ORD12345",
    date: new Date(),
    items: [
        {
            name: "T-shirt",
            quantity: 2,
            price: 299
        },
        {
            name: "Jeans",
            quantity: 1,
            price: 999
        }
    ],
    address: {
        street: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        pin: 400001,
        mobile: 9876543210
    }
};

// --------------------------------------------------------------------- 

type Burger = {
    name: string,
    price?: number,
    isGood: boolean
};

// Review function that accepts a partial burger
const review = (burger: Partial<Burger>) => {
    console.log("Reviewing burger:", burger);
};

// Feedback function that requires all burger properties
const feedback = (burger: Required<Burger>) => {
    console.log("Providing feedback for burger:", burger);
};

// Example usage:

// Using review with partial data (price is optional)
const burgerReview: Partial<Burger> = {
    name: "Cheeseburger",
    isGood: true
};

// Call the review function
review(burgerReview);

// Using feedback with complete data (all properties required)
const burgerFeedback: Required<Burger> = {
    name: "Cheeseburger",
    price: 5.99,
    isGood: true
};

// Call the feedback function
feedback(burgerFeedback);

// ---------------------------------------------------------------------


