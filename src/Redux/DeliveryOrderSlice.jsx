import { createSlice } from "@reduxjs/toolkit";

export const DeliveryOrderSlice = createSlice({
    name: "deliveryOrder",
    initialState: {
        deliveryOrder: false
    },
    reducers: {
        setDeliveryOrder: (state, action) => {
            state.deliveryOrder = action.payload
        }
    }
 });
 export const { setDeliveryOrder } = DeliveryOrderSlice.actions;
 export default DeliveryOrderSlice.reducer;