import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }

        this.checkUser=this.checkUser.bind(this);
    }
    async checkUser(event){
        event.preventDefault();

        try{
            const response = await axios.post("https://reqres.in/api/login",
            {
                email:this.state.username,
                password: this.state.password
            });

            alert(JSON.stringify(response));
            this.props.setUser({username:this.state.username,password:this.state.password,authentificated:true});

            window.location.replace("/");
        }catch(ex){
            alert("User does not exist");
        }
    }
    
    render() {
        return (
            <form class="form-signin"  onSubmit={this.checkUser}>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Username</label>
                <input
                className="form-control"
                type="text"
                value={this.state.username}
                placeholder="enter a username"
                onChange={({ target }) =>this.setState({username:target.value})}
              />
                <label for="inputPassword" class="sr-only">Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={this.state.password}
                  placeholder="enter a password"
                  onChange={({ target }) =>this.setState({password:target.value})}
                />
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
          );
    }
}

export default Login;