import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

import { addNewPost } from "../slices/postsSlice";
import { selectUserById } from "../slices/usersSlice";
import { selectLoggedUser } from "../slices/userSlice";

export const AddPost= (props) => {
    const dispatch = useDispatch();

    const user = useSelector(selectLoggedUser)
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const onClick = async () => {
        setPostTitle("");
        setPostBody("");
        console.log({ user_id: user.id, title:postTitle,body:postBody })
        await dispatch(addNewPost({ user_id: user.id, title:postTitle,body:postBody }));
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
                    placeholder="Write a new post title"
                    aria-describedby="basic-addon2"
                    value={postTitle}
                    onChange={event => setPostTitle(event.target.value)}
                    onKeyPress={handleKeypress}
                />
                 <FormControl
                    placeholder="Write a new post description"
                    aria-describedby="basic-addon2"
                    value={postBody}
                    onChange={event => setPostBody(event.target.value)}
                    onKeyPress={handleKeypress}
                />
                <Button variant="primary" id="button-addon2" onClick={onClick}>
                    Create post
                </Button>
            </InputGroup>
        </div>
    );
}