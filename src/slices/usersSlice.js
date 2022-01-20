import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllUsers, getOneUser } from "../actions/tools";


export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                return action.payload.data;
            })
            .addCase(fetchOneUser.fulfilled, (state, action) => {
                state.push(action.payload.data);
            })
    }
});


export default usersSlice.reducer;

export const selectAllUsers = state => state.users;
export const selectUserById = (state, user_id) => state.users.find(user => user.id === user_id);

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const response = await getAllUsers();
    return response.data
})

export const fetchOneUser = createAsyncThunk('users/fetchOneUser', async (user_id) => {
    const response = await getOneUser(user_id);
    return response.data
})