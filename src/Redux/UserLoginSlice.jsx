import { createSlice } from "@reduxjs/toolkit";

export const UserLoginSlice = createSlice({
    name: "userLogin",
    initialState: {
        user: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { setUser } = UserLoginSlice.actions;
export default UserLoginSlice.reducer
