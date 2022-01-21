import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";


export const getPosts = async () => {
    try {
        const response = await Axios.get("https://gorest.co.in/public/v1/posts", AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const getAllUsers = async () => {
    try {
        const response = await Axios.get("https://gorest.co.in/public/v1/users", AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const getOneUser = async (user_id) => {
    try {
        const response = await Axios.get("https://gorest.co.in/public/v1/users/" + user_id, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const getCommentsOfPostId = async (post_id) => {
    try {
        const response = await Axios.get("https://gorest.co.in/public/v1/comments?post_id=" + post_id, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const postNewComment = async (comment) => {
    try {
        const response = await Axios.post("https://gorest.co.in/public/v1/comments", comment, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const postNewPost = async (post) => {
    try {
        const response = await Axios.post("https://gorest.co.in/public/v1/posts", post, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const updatePost = async (post) => {
    try {
        const response = await Axios.patch("https://gorest.co.in/public/v1/posts/" + post.id, post, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}

export const axiosDeleteComment = async (comment) => {
    try {
        const response = await Axios.delete("https://gorest.co.in/public/v1/comments/" + comment.id, AXIOS_TOKEN_CONFIG);
        console.log(response);

        return response;
    } catch (ex) {

    }
    return null;
}