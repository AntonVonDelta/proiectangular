import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export const Logout =()=> {
    let history = useHistory();

    localStorage.removeItem('user');
    history.push("/");
    return null;
}

export default Logout;
