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

export const getComments =async (user)  => {
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/users?email="+user.email,AXIOS_TOKEN_CONFIG);

        console.log(response);

        return true;
    }catch(ex){
        console.log(ex);
    }

    return false;
};

export const getPosts=async ()=>{
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/posts",AXIOS_TOKEN_CONFIG);  
        console.log(response);

        return response; 
    }catch(ex){

    }
    return null;
}