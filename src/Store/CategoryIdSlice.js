import { createSlice } from "@reduxjs/toolkit";

export const CategoryIdSlice = createSlice({
    name: "catId",
    initialState: {
        catId: null 
    },
    reducers: {
        setCatId: (state, action) => {
            state.catId = action.payload
        }
    }

})

export const { setCatId } = CategoryIdSlice.actions
export default CategoryIdSlice.reducer;