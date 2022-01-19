import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export const Logout =()=> {
    localStorage.removeItem('user');
    window.location.href="/";
    return null;
}

export default Logout;
