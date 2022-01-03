import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


class Logout extends Component {
  render() {
    localStorage.removeItem('user');
    window.location.replace("/");
    return null;
  }
}

export default Logout;
