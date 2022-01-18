import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Comment from "./Comment";

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

    handleDelete(comment){
        if(this.onDeleteComment){
            this.onDeleteComment(comment);
        }
    }
    render() {
        return <div>
            {comments.map((comment,i)=>{
                return (
                    <Comment onDelete={handleDelete} comment={comment}/>
                )
            })}
        </div>
    }
}


export default CommentList;