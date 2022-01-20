import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";

export const loadUser = () =>{
    var user =null;

    const loggedInUser = localStorage.getItem("user");
    console.log("Stored user data:",loggedInUser);

    if (loggedInUser) {
        user = JSON.parse(loggedInUser);
    }

    return user;
} 

export const getPosts=async ()=>{
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/posts",AXIOS_TOKEN_CONFIG);  
        console.log(response);

        return response; 
    }catch(ex){

    }
    return null;
}

export const getAllUsers=async ()=>{
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/users",AXIOS_TOKEN_CONFIG);  
        console.log(response);

        return response; 
    }catch(ex){

    }
    return null;
}

export const getOneUser=async (user_id)=>{
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/users/"+user_id,AXIOS_TOKEN_CONFIG);  
        console.log(response);

        return response; 
    }catch(ex){

    }
    return null;
}

export const getCommentsOfPostId=async (post_id)=>{
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/comments?post_id="+post_id,AXIOS_TOKEN_CONFIG);  
        console.log(response);

        return response; 
    }catch(ex){

    }
    return null;
}