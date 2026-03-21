import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    //   getallproducts
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    //   getproductbyid
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //  addproduct
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: newProduct,
      }),
    }),

    //  updateproduct
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: updatedProduct,
      }),
    }),

    // deleteproduct
     deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),


  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery , useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation} = productsApi;