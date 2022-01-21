import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutStoredUser } from "../../slices/userSlice";

export const Logout =()=> {
    const dispatch=useDispatch();

    dispatch(logoutStoredUser());
    
    window.location.href="/";
    return null;
}

export default Logout;
