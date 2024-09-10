import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Retrieve the token from localStorage or another secure place
const token = localStorage.getItem('token');

export const emporiumApi = createApi({
    reducerPath: "emporiumApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerse.davidhtml.xyz/' }),
    tagTypes: ['Category', 'SubCategory', 'Brands'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({ name, username, phone, address, password, dob, gender, email }) => ({
                url: `/register`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, phone, address, dob, gender, email, password })
            })
        }),
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: `/login`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: { username, password }
            })
        }),
        addCategory: builder.mutation({
            query: ({ name, slug }) => ({
                url: `/categories/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Category']
        }),
        addBrands: builder.mutation({
            query: ({ name, slug }) => ({
                url: `/brands/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Brands']
        }),
        delCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Category']
        }),
        delBrands: builder.mutation({
            query: ({ id }) => ({
                url: `/brands/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Brands']
        }),
        updateCategory: builder.mutation({
            query: ({ name, slug, categoryId }) => ({
                url: `/categories/update/${categoryId}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Category']
        }),
        getAllCategory: builder.query({
            query: () => `/categories/all`,
            providesTags: ['Category']
        }),
        getAllBrands: builder.query({
            query: () => `/brands/all`,
            providesTags: ['Brands']
        }),
        getCategoryById: builder.query({
            query: (id) => `/categories/get/${id}`,
            providesTags: (id) => [{ type: 'Category', id }]
        }),
        addSubCategory: builder.mutation({
            query: ({ name, slug, categoryId }) => ({
                url: `/categories/subcategory/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug, categoryId }
            }),
            invalidatesTags: ({ categoryId }) => [{ type: 'SubCategory', id: categoryId }]
        }),
        updateSubCategory: builder.mutation({
            query: ({ name, slug, id }) => ({
                url: `/categories/subcategory/update/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['SubCategory']
        }),
        updateBrands: builder.mutation({
            query: ({ name, slug, Id }) => ({
                url: `/brands/update/${Id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Brands']
        }),
        getBrandsById: builder.query({
            query: (id) => `/brands/get/${id}`,
            providesTags: (id) => [{ type: 'Brands', id }]
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginMutation,
    useAddCategoryMutation,
    useGetAllCategoryQuery,
    useAddSubCategoryMutation,
    useDelCategoryMutation,
    useGetCategoryByIdQuery,
    useUpdateCategoryMutation,
    useAddBrandsMutation,
    useGetAllBrandsQuery,
    useDelBrandsMutation,
    useUpdateSubCategoryMutation,
    useUpdateBrandsMutation,
    useGetBrandsByIdQuery
} = emporiumApi;
