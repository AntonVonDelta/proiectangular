import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useLocation } from "react-router-dom";

import { selectAllCommentsOfPost,fetchCommentsByPostId } from "../slices/commentsSlice"
import { fetchOneUser, selectUserById } from "../slices/usersSlice";

import { Card } from "react-bootstrap";
import Comment from "./Comment";

export const CommentList = (props) => {
    const dispatch = useDispatch();
    const location=useLocation();

    const post= location.state.post;

    const comments = useSelector(state => selectAllCommentsOfPost(state,post.id));
    const commentStatus = useSelector(state => state.comments.status);
    const error = useSelector(state => state.comments.error)
    console.log(comments);

    useEffect(() => {
        if (commentStatus == 'idle') {
            dispatch(fetchCommentsByPostId(post.id))
        }
    }, [commentStatus])

    return <div>
        {comments.map((comment, i) => {
            return (
                <Comment />
            )
        })}
    </div>
}
