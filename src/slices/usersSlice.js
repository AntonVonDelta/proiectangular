import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllUsers } from "../actions/tools";


export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            return action.payload.data;
        })
    }
});


export default usersSlice.reducer;

export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const response = await getAllUsers();
    return response.data
})