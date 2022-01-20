import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectPostById } from "./../slices/postsSlice"
import { selectUserById } from "../slices/usersSlice";

import { Card } from "react-bootstrap";


export const SinglePostPage = (props) => {
    const { id } = props.data;
    const dispatch=useDispatch();

    const post=useSelector(state=>selectPostById(state,id));
    const user=useSelector(state=>selectUserById(state,post.user_id))
    console.log(post,user);


    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Written by {user.name}</Card.Subtitle>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}