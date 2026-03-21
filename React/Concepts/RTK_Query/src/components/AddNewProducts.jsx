import React from 'react'
import { useForm } from 'react-hook-form'
import { useAddProductMutation } from '../app/service/apiData'

const AddNewProducts = () => {
  const { register, handleSubmit, reset } = useForm()

  const [addProduct, { isLoading, isError, data }] = useAddProductMutation()

  const onSubmit = async (formData) => {
    try {
      await addProduct(formData).unwrap()
      reset() // clear form after success
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            {...register('title', { required: true })}
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            {...register('description', { required: true })}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Product'}
        </button>
      </form>

      {isError && <p style={{ color: 'red' }}>Error occurred</p>}

      {data && (
        <div>
          <h3>Added Product:</h3>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
        </div>
      )}
    </div>
  )
}

export default AddNewProducts
