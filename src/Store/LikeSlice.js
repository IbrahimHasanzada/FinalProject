import { createSlice } from "@reduxjs/toolkit";
const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
const LikeSlice = createSlice({
    name: "liked",
    initialState: {
        liked: likedItems ? likedItems.length : 0
    },
    reducers: {
        incrementLike: (state) => {
            state.liked = state.liked + 1
        },
        decrementLike: (state) => {
            state.liked = state.liked - 1
        }
    }
})
export const {incrementLike, decrementLike} = LikeSlice.actions
export default LikeSlice.reducer