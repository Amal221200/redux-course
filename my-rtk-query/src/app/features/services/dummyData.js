import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/posts",
            providesTags: ["Posts"]
        }),
        getOneProduct: builder.query({
            query: (id) => ({ url: `/posts/${id}`, })
        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/posts",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newProduct,
            }),
            invalidatesTags: ['Posts']
        }),
        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/posts/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: updatedProduct,
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            })
        }),
    })
})

export const { useGetAllProductsQuery, useGetOneProductQuery, useLazyGetOneProductQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi
