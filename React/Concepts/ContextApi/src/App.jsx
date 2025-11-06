import { createContext, useEffect, useState } from "react";

import React from 'react'
import CompA from './components/CompA.jsx'
import ProductList from "./components/ProductList.jsx";

export const Data = createContext()
export const Product = createContext()


function App() {
  const title = "Context API (Props Drilling)"
  const [productData, setProductData] = useState([])
  
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProductData(data))
    .catch(err => console.log(err))
  },[])

  return (
  <>
  <Data.Provider value={title}>
    <CompA />
  </Data.Provider>

  <h1>Product Data</h1>
  <Product.Provider value={productData}>
  <ProductList/>
  </Product.Provider>
  </>
  )
}

export default App
