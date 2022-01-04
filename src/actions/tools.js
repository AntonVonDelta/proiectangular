import Axios from "axios";
import { AXIOS_TOKEN_CONFIG } from "../secret";

export const registerUser = async (user) => {
    try{
        const response = await Axios.post("https://gorest.co.in/public/v1/users", {
            email: user.email,
            name: user.username,
            gender:"male",
            status:"active",
            password:user.password
        },AXIOS_TOKEN_CONFIG);
        
        console.log(response);
        
        
        if(response.data.data.id==null){
            return false;
        }

        var new_user={
            email:user.email,
            username:user.username,
            password:user.password,
            authentificated:true
        }
        localStorage.setItem('user', JSON.stringify(new_user));

        return true;
    }catch(ex){
        console.log(ex);
    }
    
    return false;
};

export const loginUser =async (user)  => {
    try{
        const response = await Axios.get("https://gorest.co.in/public/v1/users?email="+user.email,AXIOS_TOKEN_CONFIG);
        const ALL_USERS_PASSWORD="password";

        console.log(response);

        var found_user=null;
        for(var entry of response.data.data){
            if(entry.email==user.email){
                found_user=entry;
            }
        }

        if(found_user==null) return false;
        
        // THIS WILL BE REPLACED IN THE FUTURE WITH A PROPER API WHICH ALSO STORES PASSWORDS
        if(user.password!=ALL_USERS_PASSWORD) return false;

        var new_user={
            email:entry.email,
            username:entry.name,
            password:ALL_USERS_PASSWORD,
            authentificated:true
        }
        localStorage.setItem('user', JSON.stringify(new_user));

        return true;
    }catch(ex){
        console.log(ex);
    }

    return false;
};

export const loadUser = ()  =>{
    var user = {
        email:"",
        username: "",
        password: "",
        authentificated:false
    };

    const loggedInUser = localStorage.getItem("user");
    console.log("S "+loggedInUser);

    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        user=foundUser;
    }

    return user;
}