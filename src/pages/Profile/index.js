import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loadUser } from "../../actions/tools";

export const Profile = () => {
    var user = loadUser();

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
                    <td>Sex</td>
                    <td>{user.sex}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{user.strong_password ? "Strong" : "Weak"}</td>
                </tr>
            </table>
        </div>
    );
}

export default Profile;