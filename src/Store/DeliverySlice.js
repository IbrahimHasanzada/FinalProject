import { createSlice } from "@reduxjs/toolkit";

export const DeliverySlice = createSlice({
    name: "delivery",
    initialState: {
        delivery: false
    },
    reducers: {
        setDelivery: (state, action) => {
            state.delivery = action.payload
        }
    }
 });
 export const { setDelivery } = DeliverySlice.actions;
 export default DeliverySlice.reducer;