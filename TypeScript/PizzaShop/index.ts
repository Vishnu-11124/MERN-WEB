type PizzaType = {
    id: number,
    name: string,
    price: number
}

type OrderType = {
    oid: number,
    pizza: PizzaType,
    status: "ordered" | "completed"
}

const pizzas: PizzaType[] = [
  { id: 1, name: "Margherita", price: 199 },
  { id: 2, name: "Farmhouse", price: 299 },
  { id: 3, name: "Peppy Paneer", price: 349 },
  { id: 4, name: "Veg Extravaganza", price: 399 },
  { id: 5, name: "Chicken Dominator", price: 449 }
];

let cashRegister = 100
const orderQueue : OrderType[] = []
let orderId = 0

// Adding new pizza item
const addNewPizza = (pizzaObject: PizzaType): void => {
    pizzas.push(pizzaObject)
}

// OrderItem
const placeOrder = (pname: string): OrderType | null => {
    const orderedItem = pizzas.find(item => item.name === pname);
    if (!orderedItem) {
        console.log(`${pname} does not exist in the menu!`);
        return null;
    }

    orderId++;
    cashRegister += orderedItem.price;
    const newOrder : OrderType = {
        oid: orderId,
        pizza: orderedItem,
        status: "ordered"
    };
    // console.log(newOrder)
    orderQueue.push(newOrder);
    // console.log(orderQueue)
    return newOrder;
};


const completeOrder = (orderId: number) => {
    const order = orderQueue.find(item => item.oid === orderId);
    if (!order) {
        console.log(`Order with ID ${orderId} not found!`);
        return null;
    }

    if (order.status === "completed") {
        console.log(`Order with ID ${orderId} is already completed.`);
        return null;
    }

    order.status = "completed";
    return order;
};


addNewPizza({ id: 6, name: "BBQ Chicken", price: 499 })

placeOrder("Peppy Paneer")
placeOrder('Margherita')

completeOrder(1)

console.log(`----Menu----`)
console.log(pizzas)
console.log(`----Total earning----`)
console.log(`Amount: ${cashRegister}`)
console.log(`----Order List----`)
console.log(orderQueue)