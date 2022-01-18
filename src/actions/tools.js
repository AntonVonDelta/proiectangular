import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";


export const getComments =async (user)  => {
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/users?email="+user.email,AXIOS_TOKEN_CONFIG);
        const ALL_USERS_PASSWORD="password";

        console.log(response);

        return true;
    }catch(ex){
        console.log(ex);
    }

    return false;
};