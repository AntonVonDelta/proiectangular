import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPosts } from "../actions/tools";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [{
            "id": 616,
            "user_id": 612,
            "title": "Asperiores crapula turpis curriculum aestus error adsuesco vobis.",
            "body": "Voluptatem arma ut. Valetudo cibus vulticulus. Atrox credo velit. Curia colloco terra. Aggero urbs aut. Conatus defaeco cerno. Vomer vinculum patrocinor. Adhaero tempus tamisium. Territo dedico deleniti. Cura caste natus. Bibo damno cogito. Damnatio acerbitas utilis. Abscido desino vehemens. Taedium tabella assentator. Amiculum baiulus abscido. Quo aptus confugo. Usus qui civitas. Sponte tricesimus damnatio. Candidus cetera sordeo. Commemoro corrigo labore. Veritatis laudantium video. Iure itaque creptio. Agnosco aureus ubi. Pauper quibusdam stella. Cresco demo vado. Terra aliquam vix. Tactus bibo depereo. Tibi vergo demonstro."
        }],
        status: "idle",
        error: null
    },
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload);
        },
        postUpdated: (state,action) => {
            const { id, title, body } = action.payload;
            const foundPost = state.posts.find(post => post.id === id);
            if (foundPost) {
                foundPost.title = title;
                foundPost.body = body;
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
            var fetchedPosts=action.payload.data;
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



export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response.data
})