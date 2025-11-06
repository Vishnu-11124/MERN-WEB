import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !quantity) {return;}

        const newItem = {
            name,
            quantity: parseInt(quantity)
        }

        setItems([...items, newItem]);

        setName("");
        setQuantity("");
        }

            

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
 
  return (
    <div>

        <h1>Shopping List</h1>

        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter your Item name' value={name} onChange={handleName} />

            <input type="number" placeholder='Enter the item quantity' value={quantity} onChange={handleQuantity} />

            <button type='submit'>Add Item</button>

        </form>

        <ul>
            {
                items.map((item,index) =>                   
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                )
            }
        </ul>
      
    </div>
 )
}


export default ShoppingList
