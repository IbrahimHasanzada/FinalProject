import { createSlice } from "@reduxjs/toolkit";

export const CheckOutSlice = createSlice({
    name: "checkout",
    initialState: {
        checkout: localStorage.getItem('payment') ? parseInt(localStorage.getItem('payment'), 10) : 1
    },
    reducers: {
        setCheckout: (state, action) => {
            state.checkout = action.payload
        }
    }

})

export const { setCheckout } = CheckOutSlice.actions
export default CheckOutSlice.reducer;