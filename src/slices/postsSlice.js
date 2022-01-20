import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice } from "@reduxjs/toolkit";


const postsSlice =createSlice({
    name: "posts",
    initialState: {
        posts:[]
    },
    reducers: {
        postAdded: (state, action) => {
            state.registerData = action.payload;
        },
        postUpdated: (state) => {
            state.registerData = {};
        },
    },
});

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer



export const selectAllPosts = state => state.posts

export const selectPostById = (state, postId) =>
  state.posts.find(post => post.id === postId)