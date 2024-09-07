import { createSlice } from "@reduxjs/toolkit";

export const UserLoginSlice = createSlice({
    name: "userLogin",
    initialState: {
        user: false
    },
    reducers: {
        setUser: (state) => {
            state.user = !state.user 
        }
    }
})
export const { setUser } = UserLoginSlice.actions;
export default UserLoginSlice.reducer
