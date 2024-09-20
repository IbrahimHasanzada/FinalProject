import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userData = JSON.parse(localStorage.getItem('user'))
const token = userData ? userData?.token : ''
export const emporiumApi = createApi({
    reducerPath: "emporiumApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerse.davidhtml.xyz/' }),
    tagTypes: ['Category', 'SubCategory', 'Brands', 'Product', "Image", "AddToCard"],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({ name, username, email, phone, gender, password }) => ({
                url: `/register`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, email, phone, gender, password })
            })
        }),
        userUpdate: builder.mutation({
            query: ({ name, user_img, phone, password, }) => ({
                url: `/user/update`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, user_img, phone, password,})
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
        delProduct: builder.mutation({
            query: ({ id }) => ({
                url: `/products/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Product']
        }),
        delSubCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/subcategory/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['SubCategory'],
        }),
        delImage: builder.mutation({
            query: ({ fileName }) => ({
                url: `/img/delete/${fileName}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Image'],
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
        delCards: builder.mutation({
            query: ( itemId ) => ({
                url: `/cart/delete/${itemId}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['AddToCard']
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
        getAllCart: builder.query({
            query: () => ({
            url : `/cart/all`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }}),
            providesTags: ['AddToCard']
        }),
        getAllProduct: builder.query({
            query: () => `/products/all`,
            providesTags: ['Product']
        }),
        searchProducts: builder.query({
            query: ( params ) => ({
                url: `/products/all?${params}`,
            }),
        }),
        getAllBrands: builder.query({
            query: () => `/brands/all`,
            providesTags: ['Brands']
        }),
        getCategoryById: builder.query({
            query: (id) => `/categories/get/${id}`,
            providesTags: (id) => [{ type: 'Category', id }]
        }),
        getProductById: builder.query({
            query: (id) => `/products/get/${id}`,
            providesTags: (id) => [{ type: 'Product', id }]
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
            providesTags: ['SubCategory'],
        }),
        updateSubCategory: builder.mutation({
            query: ({ name, slug, Id, categoryId }) => ({
                url: `/categories/subcategory/update/${Id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug, categoryId }
            }),
            invalidatesTags: ['SubCategory']
        }),
        updateProducts: builder.mutation({
            query: ({ name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size, id }) => ({
                url: `/products/update/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size }
            }),
            invalidatesTags: ['Product']
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
        uploadImage: builder.mutation({
            query: (formData) => ({
                url: '/img/upload',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            }),
            invalidatesTags: ['Image']

        }),
        addProduct: builder.mutation({
            query: ({ name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size }) => ({
                url: `/products/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size }
            }),
            invalidatesTags: ['Product']
        }),
        addToCard: builder.mutation({
            query: ({ productId, count }) => ({
                url: `/cart/add`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { productId, count }
            }),
            invalidatesTags: ['AddToCard']
        })
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
    useGetBrandsByIdQuery,
    useDelSubCategoryMutation,
    useUploadImageMutation,
    useAddProductMutation,
    useDelProductMutation,
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useUpdateProductsMutation,
    useDelImageMutation,
    useSearchProductsQuery,
    useAddToCardMutation,
    useGetAllCartQuery,
    useDelCardsMutation,
    useUserUpdateMutation
} = emporiumApi;
