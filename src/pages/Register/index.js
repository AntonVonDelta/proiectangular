import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.register=this.register.bind(this);

  }

  register() {
    Axios.post("https://reqres.in/api/register", {
      email:this.state.username,
      password:this.state.password
    })
    .then(response => {
      console.log(response);
      alert("Registered succesfully!");

      var new_user={
        username:this.state.username,
        password:this.state.password,
        authentificated:true
      }
      localStorage.setItem('user', JSON.stringify(new_user));
      window.location.replace("/");
    })
    .catch(error => {
      alert("Registration failed!")
    });
  }


  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="border p-4">
          {this.state.userInserted}

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
            <label>Password</label>
            <input
              className="form-control"
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
