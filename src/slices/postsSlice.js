import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPosts } from "../actions/tools";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null
    },
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload);
        },
        postUpdated: (state) => {
            const { id, title, content } = action.payload;
            const foundPost = state.posts.find(post => post.id == id);
            if (foundPost) {
                foundPost.title = title;
                foundPost.content = content;
            }
        },
    },

    // Used by async methods
    extraReducers(builder) {
        builder
          .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            
            // Get posts from answer
            fetchedPosts=action.payload.data;
            state.posts = state.posts.concat(fetchedPosts)
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
});

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer



export const selectAllPosts = state => state.posts
export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId)

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response.data
})