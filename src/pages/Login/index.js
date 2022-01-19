import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import doLogin from "./../../slices/userSlice";
import reqLoginError from "./../../slices/userSlice";
import reqLoggedIn from "./../../slices/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const serverErrorSelector = useSelector(reqLoginError);
    const serverIsLoggedIn = useSelector(reqLoggedIn);
    let history = useHistory();

    async function checkUser(event) {
        const user = {
            email: email,
            password: password
        };
        dispatch(doLogin(user));
    }

    useEffect(() => {
        if (serverIsLoggedIn) {
            console.log("Redirect ...");
            history.push("/");
        } else {
            alert("User does not exist");
        }
    }, [email, password, serverErrorSelector, serverIsLoggedIn]);

    return (
        <form class="form-signin" onSubmit={this.checkUser}>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email</label>
            <input
                className="form-control"
                type="text"
                value={this.state.username}
                placeholder="enter a username"
                onChange={({ target }) => setEmail(target.value)}
            />
            <label for="inputPassword" class="sr-only">Password</label>
            <input
                className="form-control"
                type="password"
                value={this.state.password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

export default Login;