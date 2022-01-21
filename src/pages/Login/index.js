import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {doLogin} from "./../../slices/userSlice";

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
        <form className="form-signin" onSubmit={checkUser}>
            {userLoginError && (
                <div className="alert alert-danger">
                    Login failed: email or password is invalid
                </div>
            )}

            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input
                className="form-control"
                type="text"
                value={email}
                placeholder="enter a username"
                onChange={({ target }) => setEmail(target.value)}
            />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input
                className="form-control"
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

export default Login;