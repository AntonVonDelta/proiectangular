import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { doRegister } from "./../../slices/userSlice";

function Register() {
  const [username, setUsername] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userRegisterError = useSelector((state)=>state.user.registerError);
  const dispatch = useDispatch();

  async function register() {
    const user = {
      username: username,
      email: email,
      sex:sex,
      password: password
    }
    dispatch(doRegister(user));
  }

  useEffect(() => {
    if (userIsLoggedIn) {
      window.location.href = "/home";
    }
  }, [userIsLoggedIn]);

  return (
    <div>
      {userRegisterError && (
                <div className="alert alert-danger">
                    Register failed: email or password is invalid
                </div>
            )}

      <h1>Register</h1>
      <div className="border p-4">
        <div className="form-group">
          <label>
            Name <small>{username}</small>
          </label>
          <input
            className="form-control"
            placeholder="Name .."
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            Email <small>{email}</small>
          </label>
          <input
            className="form-control"
            placeholder="Email .."
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            Sex <small>{sex}</small>
          </label>
          <input
            className="form-control"
            placeholder="Sex .."
            onChange={event => setSex(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password .."
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={() => register()}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
