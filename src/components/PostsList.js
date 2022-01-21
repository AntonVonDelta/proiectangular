import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectAllPosts, fetchPosts } from "./../slices/postsSlice"

import { SinglePost } from "./SinglePost";

export const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus])

    return (
        <div>
            {error &&
                <h1>Error</h1>}

            {posts.map((post, i) => {
                return (
                    <div key={post.id} className="mt-3">
                        <SinglePost data={post} />
                    </div>
                )
            })}
        </div>
    );
}