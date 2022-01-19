import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

import doRegister from "./../../slices/userSlice";
import reqLoginError from "./../../slices/userSlice";
import reqLoggedIn from "./../../slices/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const serverIsLoggedIn = useSelector(reqLoggedIn);
  const dispatch = useDispatch();
  let history = useHistory();

  async function register() {
    const user={
      username:username,
      email:email,
      password:password
    }
    dispatch(doRegister(this.state));
  }

  useEffect(()=>{
    if(serverIsLoggedIn){
      alert("Registered succesfully!");
      history.push("/");
    }else{
      alert("Registration failed!")
    }
  },[serverIsLoggedIn]);

  return (
    <div>
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
