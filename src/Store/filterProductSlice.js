import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    limit: 10,
    sortBy: 'price',
    sortOrder: 'asc',
    categoryId: null,
    subcategoryId: null,
    brandId: null,
    color: null,
    size: null,
    minPrice: 0,
    maxPrice: 10000,
    discount: false,
};
 
export const filterProductSlice = createSlice({
    name: 'filterProduct',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            const filters = action.payload;

            Object.keys(filters).forEach((key) => {
                state[key] = filters[key]
            })
        },
        resetFilters: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setFilters, resetFilters } = filterProductSlice.actions;
export default filterProductSlice.reducer; 
