import React, { useEffect, useState, Component } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { PostsList } from "../../components/PostsList";

class Home extends Component {
    render() {


        return (
            <div>
                <h1>Home page</h1>
                <PostsList />
            </div>
        );
    }
}

export default Home;