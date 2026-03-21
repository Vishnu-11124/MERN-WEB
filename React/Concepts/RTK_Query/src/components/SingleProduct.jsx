import React from 'react'
import { useGetProductByIdQuery } from '../app/service/apiData';

const SingleProduct = () => {
  const productId = 4; // You can change this to fetch different products  
  const { data, isLoading, isError } = useGetProductByIdQuery(productId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <div>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        <p>Price: ${data?.price}</p>
        <img src={data?.thumbnail} alt={data?.title} width="200" />
      </div>
    </div>
  )
}

export default SingleProduct
