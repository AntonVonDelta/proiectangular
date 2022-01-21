import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

import { addNewPost } from "../slices/postsSlice";
import { selectUserById } from "../slices/usersSlice";
import { selectLoggedUser } from "../slices/userSlice";
import { loadUser } from "../actions/tools";

export const AddPost= (props) => {
    const dispatch = useDispatch();

    const user = useSelector(selectLoggedUser())
    console.log("Addpost:",user);
    const [postTile, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const onClick = async () => {
        setCommentText("");
        await dispatch(addNewPost({ post_id: post_id, name: user.username, email: user.email, body: commentText }));
    }
    const handleKeypress = e => {
        if (e.charCode === 13) {
            onClick();
        }
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Write a new comment"
                    aria-describedby="basic-addon2"
                    value={commentText}
                    onChange={event => setCommentText(event.target.value)}
                    onKeyPress={handleKeypress}
                />
                <Button variant="primary" id="button-addon2" onClick={onClick}>
                    Send comment
                </Button>
            </InputGroup>
        </div>
    );
}