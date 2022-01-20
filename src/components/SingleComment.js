import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { selectCommentById } from "../slices/commentsSlice"
import { fetchOneUser, selectUserById } from "../slices/usersSlice";

import { Card } from "react-bootstrap";

export const SingleComment = (props) => {
    const { id } = props.data;
    const dispatch = useDispatch();

    const comment = useSelector(state => selectCommentById(state, id));
    const user ={
        name:comment.name,
        email:comment.email
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    {user != null &&
                        <Card.Subtitle className="mb-2 text-muted">Written by {user.name}</Card.Subtitle>
                    }
                    <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}