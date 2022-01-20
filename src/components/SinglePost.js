import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { selectPostById } from "../slices/postsSlice"
import { fetchOneUser, selectUserById } from "../slices/usersSlice";

import { Card } from "react-bootstrap";


export const SinglePost = (props) => {
    const { id } = props.data;
    const dispatch = useDispatch();

    const post = useSelector(state => selectPostById(state, id));
    const user = useSelector(state => selectUserById(state, post.user_id));


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
                        pathname:"/comments",
                        state:{
                            post:post
                        }
                    }}>
                        <Card.Title>{post.title}</Card.Title>
                    </Link>

                    {user != null &&
                        <Card.Subtitle className="mb-2 text-muted">Written by {user.name}</Card.Subtitle>
                    }
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}