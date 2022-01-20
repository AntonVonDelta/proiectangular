import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Card,InputGroup,FormControl,Button } from "react-bootstrap";


export const AddComment = (props) => {
    const dispatch = useDispatch();

    const [commentText,setCommentText]=useState("");

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Write a new comment"
                aria-describedby="basic-addon2"
                value={commentText}
                onChange={event => setCommentText(event.target.value)}
                />
                <Button variant="primary" id="button-addon2">
                Send comment
                </Button>
            </InputGroup>
        </div>
    );
}