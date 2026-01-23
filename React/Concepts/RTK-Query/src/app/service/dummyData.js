import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dummyDataApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder) => ({
        // get all products
        getProducts: builder.query({
            query: () => '/products',
        }),
        // get a single product
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        
    })
})

export const { useGetProductsQuery, useGetProductQuery } = dummyDataApi;