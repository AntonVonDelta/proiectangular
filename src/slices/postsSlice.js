import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPosts, postNewPost, updatePost } from "../actions/tools";

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
        postUpdated: (state, action) => {
            const { id, title, body, likes } = action.payload;
            const foundPost = state.posts.find(post => post.id === id);
            if (foundPost) {
                foundPost.title = title;
                foundPost.body = body;
                foundPost.likes = likes;
            }
        },
        setPostError: (state, action) => {
            state.error = action.payload;
        },
        clearPostError: (state, action) => {
            state.error = null;
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
                state.error = null;

                // Get posts from answer
                var fetchedPosts = action.payload.data;
                const matchExprFirst = /š(\d+)š/;
                const matchExprAll = /š(\d+)š/g;
                for (var entry of fetchedPosts) {
                    var match = entry.body.match(matchExprFirst);
                    var likes = 0;
                    if (match != null) {
                        likes = parseInt(match[1]);
                    }
                    entry["likes"] = likes;
                    entry.body = entry.body.replace(matchExprAll, "");
                }

                state.posts = state.posts.concat(fetchedPosts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.data["likes"] = 0;
                state.posts.push(action.payload.data);
                state.error = null;
            })
            .addCase(addNewPost.rejected, (state, action) => {
                state.error = "Could not add new post";
            })
            .addCase(doLikePost.fulfilled, (state, action) => {
                const id = action.payload.data.id;
                const foundPost = state.posts.find(post => post.id === id);
                
                state.error = null;
                foundPost.likes = foundPost.likes + 1;
            })
            .addCase(doLikePost.rejected, (state, action) => {
                state.error = "Could not like post";
            })
    }
});

export const { postAdded, postUpdated, setPostError, clearPostError } = postsSlice.actions
export default postsSlice.reducer



export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response.data
})
export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async newPost => {
        const response = await postNewPost(newPost);
        return response.data
    }
)

export const doLikePost = createAsyncThunk(
    'posts/doLikePost',
    async post => {
        var new_post = {
            id: post.id,
            body: post.body + "š" + post.likes + "š",
            title: post.title
        }
        console.log(new_post);

        const response = await updatePost(new_post);

        return response.data;
    }
)