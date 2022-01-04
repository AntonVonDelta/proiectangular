import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { registerUser } from "../../actions/tools";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      email:"",
      username: "",
      password: ""
    };

    this.register=this.register.bind(this);

  }

  async register() {
    if(await registerUser(this.state)){
      alert("Registered succesfully!");
      window.location.replace("/");
    }else{
      alert("Registration failed!")
    }
  }


  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="border p-4">
          <div className="form-group">
            <label>
              Name <small>{this.state.name}</small>
            </label>
            <input
              className="form-control"
              placeholder="Name .."
              onChange={ev => this.setState({ username: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>
              Email <small>{this.state.email}</small>
            </label>
            <input
              className="form-control"
              placeholder="Email .."
              onChange={ev => this.setState({ email: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password .."
              onChange={ev => this.setState({ password: ev.target.value })}
            />
          </div>
          <button className="btn btn-success" onClick={() => this.register()}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
