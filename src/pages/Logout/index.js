import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Logout =()=> {
    localStorage.removeItem('user');
    window.location.href="/";
    return null;
}

export default Logout;
