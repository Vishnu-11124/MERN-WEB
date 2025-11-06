import React from 'react'
import { useContext } from 'react'
import { Product } from '../App.jsx'

const ProductList = () => {
  const productList = useContext(Product)
  
  return (
    <div>
      <div style={{display: "flex", gap: "13px"}}>
        {
        productList.map(product => 
          product.id < 5 &&
           (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt="" style={{width: "200px"}}/>
            </div>
          )
        )
      }
      </div>     
    </div>
  )
}

export default ProductList
