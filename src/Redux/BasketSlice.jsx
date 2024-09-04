import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: false
    },
    reducers: {
        setBasket: (state, action) => {
            state.basket = action.payload
        }
    }
})

export const { setBasket } = BasketSlice.actions
export default BasketSlice.reducer