import React from 'react'
import { useUpdateProductMutation } from '../app/service/apiData'

const UpdateProduct = () => {
  const [updateProduct, { isLoading, isError, data }] = useUpdateProductMutation()

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Something went wrong...</h2>
  }

  const handleUpdateProduct = async () => {
    try {
        const updatedProduct = {
            title: 'Updated Product',
            price: 99.99,
            description: 'This is an updated product',
        }

        await updateProduct({ id: 1, updatedProduct }).unwrap()
    } catch (error) {
        console.log(err)
    }
  }


  return (
    <div>
      <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
        {data && (
            <div>
                <h3>Updated Product:</h3>
                <p>Title: {data.title}</p>
                <p>Price: {data.price}</p>
                <p>Description: {data.description}</p>
            </div>
        )}
    </div>
  )
}

export default UpdateProduct
