import Axios from "axios";


export const registerUser = () => async () => {
    Axios.post("https://reqres.in/api/register", {
        email:this.state.username,
        password:this.state.password
      })
      .then(response => {
        console.log(response);
        alert("Registered succesfully!");
  
        var new_user={
          username:this.state.username,
          password:this.state.password,
          authentificated:true
        }
        localStorage.setItem('user', JSON.stringify(new_user));

        return true;
      })
      .catch(error => {
        alert("Registration failed!")
      });

      return false;
};

export const loginUser =async (user)  => {
    try{
        const response = await Axios.post("https://reqres.in/api/login",
        {
            email:user.username,
            password: user.password
        });

        console.log(response);

        var new_user={
            username:user.username,
            password:user.password,
            authentificated:true
        }
        localStorage.setItem('user', JSON.stringify(new_user));

        return true;
    }catch(ex){
    }

    return false;
};

export const loadUser = () => async () =>{
    var user = {
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