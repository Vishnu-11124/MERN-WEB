import React from 'react'
import { useGetAllProductsQuery } from '../app/service/apiData';

const AllProducts = () => {

    const { data, isError, isLoading } = useGetAllProductsQuery();
    // console.log(data);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Something went wrong...</h2>
    }


  return (
    <div>
        <h2>All Products</h2>
        <div>
            {
                data?.products?.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.thumbnail} alt={item.title} width="200" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProducts
