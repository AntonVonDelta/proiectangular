import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectAllPosts } from "./../slices/postsSlice"


export const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    return (
        <div>
            {error &&
                <h1>Error</h1>}

            Post page
        </div>
    );
}