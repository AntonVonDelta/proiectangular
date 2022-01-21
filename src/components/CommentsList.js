import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { selectAllCommentsOfPost, fetchCommentsByPostId } from "../slices/commentsSlice"

import { SingleComment } from "./SingleComment";
import { AddComment } from "./AddComment";

export const CommentList = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const post = location.state.post;
    const comments = useSelector(state => selectAllCommentsOfPost(state, post.id));
    const commentStatus = useSelector(state => state.comments.status);
    const error = useSelector(state => state.comments.error)

    useEffect(() => {
        if (commentStatus == 'idle') {
            dispatch(fetchCommentsByPostId(post.id))
        }
    }, [commentStatus])

    return <div>
        <AddComment post_id={post.id} />

        {error && (
            <div className="alert alert-danger">
                {error}
            </div>
        )}

        {comments.map((comment, i) => {
            return (
                <div key={comment.id} className="mt-4">
                    <SingleComment data={comment} />
                </div>
            )
        })}
    </div>
}
