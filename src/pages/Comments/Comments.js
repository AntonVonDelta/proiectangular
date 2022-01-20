import React, { useEffect, useState, Component } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CommentList } from "../../components/CommentsList";

class Comments extends Component {
    render() {
        return (
            <div>
                <h1>All comments</h1>
                <hr></hr>
                <CommentList/>
            </div>
        );
    }
}

export default Comments;