import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useHistory } from "react-router-dom";

class CommentList extends Component{
    comments;
    onDeleteComment;
    onAddComment;

    constructor(props){
        super(props);
        this.comments=this.props.comments;
        this.onDeleteComment=this.props.onDeleteComment;
        this.onAddComment=this.props.onAddComment;
    }

    render() {
        return <div>
            {comments.map}
        </div>
    }
}


export default CommentList;