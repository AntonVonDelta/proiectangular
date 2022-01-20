import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectAllPosts,fetchPosts } from "./../slices/postsSlice"

import { SinglePostPage } from "./SinglePostPage";

export const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error)
    console.log(posts);

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus])

    return (
        <div>
            {error &&
                <h1>Error</h1>}
            
            {posts.map((post,i)=>{
                return (
                    <SinglePostPage key={post.id} data={post}/>
                )
            })}
        </div>
    );
}