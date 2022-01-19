import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {doLogin} from "./../../slices/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { useHistory,useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError,setLoginError]=useState(false);
    const dispatch = useDispatch();

    const userLoginError = useSelector((state) => state.user.loginError);
    const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);


    async function checkUser(event) {
        event.preventDefault();

        const user = {
            email: email,
            password: password
        };
        dispatch(doLogin(user));
    }

    useEffect(() => {
        console.log("State: ",userIsLoggedIn,userLoginError);

        if (userIsLoggedIn) {
            console.log("Redirect ...");
            window.location.href="/home";
        }
    }, [userLoginError, userIsLoggedIn]);
    
    return (
        <form class="form-signin" onSubmit={checkUser}>
            {userLoginError && (
                <div className="alert alert-danger">
                    Login failed: email or password is invalid
                </div>
            )}

            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" class="sr-only">Email</label>
            <input
                className="form-control"
                type="text"
                value={email}
                placeholder="enter a username"
                onChange={({ target }) => setEmail(target.value)}
            />
            <label htmlFor="inputPassword" class="sr-only">Password</label>
            <input
                className="form-control"
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

export default Login;