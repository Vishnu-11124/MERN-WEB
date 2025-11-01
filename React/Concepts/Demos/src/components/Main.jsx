import React from 'react'
import Welcome from './Welcome'
import Greet from './Greet'
import ProductInfo from './ProductInfo'
import Person from './Person'
import { FaWebAwesome } from "react-icons/fa6";
import Counter from './Counter'
import UpdateArray from './UpdateArray'
import UpdateObject from './UpdateObject'
import UpdateArrayOfObjects from './UpdateArrayOfObjects'
import Todo from './Todo'

const Main = () => {
      const products = [
      {
        name: "Laptop",
        price: 34000,
        availability: "Out of stock",
      },
      {
        name: "Mobile",
        price: 14000,
        availability: "In stock",
      },
    ];
  return (
    <main style={{background: 'lightblue', padding: "1rem",}}>
      <h1><center><FaWebAwesome /> Welcome to My Website! </center></h1>
      <Welcome />
      <Greet />
      <ProductInfo productList={products}/>
      <Person img="https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg" name="Dickson" email="dickson@dev.com" />
      <Counter/>
      <div style={{display: "-webkit-flex"}}>
      <UpdateArray/>
      <UpdateObject />
      </div>
      <UpdateArrayOfObjects/>
      <Todo/>
    </main>
  )
}

export default Main
