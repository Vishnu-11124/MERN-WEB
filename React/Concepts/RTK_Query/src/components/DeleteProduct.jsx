import React from 'react'
import { useDeleteProductMutation } from '../app/service/apiData'

const DeleteProduct = () => {
        const [deleteProduct, { isLoading, isError, data }] = useDeleteProductMutation();

        if (isLoading) {
            return <h2>Loading...</h2>;
        }   

            if (isError) {
                return <h2>Something went wrong...</h2>;
            }

        const handleDeleteProduct = async () => {
            try {
                const productId = 1;    
                await deleteProduct(productId);
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }    

  return (
    <div>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
        {data && <p>Product deleted successfully!</p>}
    </div>
  )
}

export default DeleteProduct
