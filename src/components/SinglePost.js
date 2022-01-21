import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { selectPostById, doLikePost, doUnlikePost } from "../slices/postsSlice"
import { fetchOneUser, selectUserById } from "../slices/usersSlice";

import { Card, Button, Badge } from "react-bootstrap";


export const SinglePost = (props) => {
    const { id } = props.data;
    const dispatch = useDispatch();

    const post = useSelector(state => selectPostById(state, id));
    const user = useSelector(state => selectUserById(state, post.user_id));

    function likePost() {
        dispatch(doLikePost(post.id))
    }
    function unlikePost() {
        dispatch(doUnlikePost(post.id))
    }

    useEffect(() => {
        if (user == null) {
            dispatch(fetchOneUser(post.user_id));
        }
    }, [user])

    return (
        <div>
            <Card>
                <Card.Body>
                    <Link to={{
                        pathname: "/comments",
                        state: {
                            post: post
                        }
                    }}>
                        <Card.Title>{post.title} <Badge bg="primary" style={{ marginLeft: "10px", "padding": ".25rem .5rem" }}>{post.likes}</Badge></Card.Title>
                    </Link>

                    {user != null &&
                        <Card.Subtitle className="mb-2 text-muted">Written by {user.name}</Card.Subtitle>
                    }
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>

                <div style={{ "width": "200px", "margin": "0 10px 10px" }} className="btn-group">
                    <Button variant="outline-primary " className="w-50 btn-sm" onClick={likePost}>
                        Like
                    </Button>
                    <Button variant="outline-danger" className="w-50 btn-sm" onClick={unlikePost}>
                        Dislike
                    </Button>
                </div>
            </Card>
        </div>
    );
}