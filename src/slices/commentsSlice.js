import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getCommentsOfPostId,postNewComment } from "../actions/tools";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        status: "idle",
        error: null
    },
    reducers: {
        commentAdded: (state, action) => {
            state.comments.push(action.payload);
        },
    },

    // Used by async methods
    extraReducers(builder) {
        builder
            .addCase(fetchCommentsByPostId.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error=null;

                // Get comments from answer
                var fetchedComments = action.payload.data;
                state.comments = state.comments.concat(fetchedComments)
            })
            .addCase(fetchCommentsByPostId.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewComment.fulfilled, (state, action) => {
                state.comments.push(action.payload.data);
                state.error=null;
            })
            .addCase(addNewComment.rejected, (state, action) => {
                state.error="Could not add comment";
            })
    }
});

export const { commentAdded } = commentsSlice.actions
export default commentsSlice.reducer



export const selectAllCommentsOfPost = (state, post_id) => (state.comments.comments.filter(comment => comment.post_id === post_id) || [])
export const selectCommentById = (state, comment_id) => state.comments.comments.find(comment => comment.id === comment_id)

export const fetchCommentsByPostId = createAsyncThunk('comments/fetchCommentsByPostId', async (post_id) => {
    const response = await getCommentsOfPostId(post_id);
    return response.data
})

export const addNewComment = createAsyncThunk(
    'comments/addNewComment',
    async newComment => {
        const response = await postNewComment(newComment);
        return response.data
    }
)