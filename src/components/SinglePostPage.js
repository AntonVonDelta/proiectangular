import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectPostById } from "./../slices/postsSlice"
import { Card } from "react-bootstrap";


export const SinglePostPage = (props) => {
    const { id, user_id, title, body } = props.data;

    // const post = useSelector(state => selectPostById(state, postId))

    return (
        <div>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Body>{body}</Card.Body>
            </Card>
        </div>
    );
}