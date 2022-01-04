import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { loadUser } from "../../actions/tools";

class Profile extends Component{
    render() {
        var user=loadUser();

        if(!user.authentificated){
            window.location.replace("/");
        }

        return (
            <div className="mt-5">
                <table className="table">
                    <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{user.password>8?"Strong":"Weak"}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Profile;