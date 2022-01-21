import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";
import { createSlice } from "@reduxjs/toolkit";

// Get the user's password and process it 
const getDBUserPassowrd = (user) => {
    // const ALL_USERS_PASSWORD="password";
    // return ALL_USERS_PASSWORD;
    return user.name + "!";
}

//reducer
export const userSlice = createSlice({
    name: "user",
    initialState: {
        registerData: {},
        loginError: false,
        isLoggedIn: false,
        registerError: false
    },
    reducers: {
        setRegisterData: (state, action) => {
            state.registerData = action.payload;
        },
        clearRegisterData: (state) => {
            state.registerData = {};
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setRegisterError: (state, action) => {
            state.registerError = action.payload;
        },
    },
});


export const {
    setRegisterData,
    clearRegisterData,
    setLoginError,
    setLoggedIn,
    setRegisterError,
} = userSlice.actions;
export default userSlice.reducer;


export const selectLoggedUser = state => state.user.registerData;


export const doRegister = (user) => async (dispatch) => {
    dispatch(setRegisterError(false));

    try {
        const response = await Axios.post("https://gorest.co.in/public/v1/users", {
            email: user.email,
            name: user.username,
            gender: user.sex,
            status: "active",
            password: user.password
        }, AXIOS_TOKEN_CONFIG);

        console.log(response);
        if (response.status != 201) {
            dispatch(setRegisterError(true));
            return;
        }

        if (response.data.data.id == null) {
            dispatch(setRegisterError(true));
            return;
        }

        var new_user = {
            id: user.id,
            email: user.email,
            username: user.username,
            sex: user.sex,
            strong_password: (user.password.length > 8)
        }

        localStorage.setItem('user', JSON.stringify(new_user));
        dispatch(setRegisterData(new_user));
        dispatch(setLoggedIn(true));
    } catch (e) {
        dispatch(setRegisterError(true));
    }
};

export const doLogin = (user) => async (dispatch) => {
    dispatch(setLoginError(false));

    try {
        const response = await Axios.get("https://gorest.co.in/public/v1/users?email=" + user.email, AXIOS_TOKEN_CONFIG);
        console.log(response);

        if (response.status != 200) {
            dispatch(setLoginError(true));
            return;
        }

        var found_user = null;
        for (var entry of response.data.data) {
            if (entry.email == user.email) {
                found_user = entry;
            }
        }

        if (found_user == null) {
            dispatch(setLoginError(true));
            return;
        }

        // THIS WILL BE REPLACED IN THE FUTURE WITH A PROPER API WHICH ALSO STORES PASSWORDS
        if (user.password != getDBUserPassowrd(found_user)) {
            dispatch(setLoginError(true));
            return;
        }

        var new_user = {
            id: found_user.id,
            email: found_user.email,
            username: found_user.name,
            sex: found_user.gender,
            strong_password: (user.password.length > 8)
        }
        console.log("doLogin:", new_user);
        localStorage.setItem('user', JSON.stringify(new_user));
        dispatch(setLoggedIn(true));
    } catch (e) {
        dispatch(setLoginError(true));
    }
};

export const loadStoredUser = () => (dispatch) => {
    try {
        var user = null;

        const loggedInUser = localStorage.getItem("user");
        console.log("loadStoredUser:", loggedInUser);

        if (loggedInUser) {
            user = JSON.parse(loggedInUser);
            dispatch(setRegisterData(user));
        }
    } catch (ex) {

    }
}
