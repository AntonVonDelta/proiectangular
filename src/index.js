import ReactDOM from 'react-dom';
import { Profiler, useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import "./index.css"
import CustomNavbar from "./components/CustomNavbar"
import Person from "./Person"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"

const App = () => {
    const name = "Person's name";
    const [user, setUser] = useState({
        username: "",
        password: "",
        authentificated:false
    });

    return (
        <div>
            <BrowserRouter>
                <div>
                    <CustomNavbar authentificated={user.authentificated} name={user.username}></CustomNavbar>
                </div>

                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => {
                            return (
                                    !user.authentificated ?
                                        <Login setUser={setUser}/> :
                                        <Home />
                                );
                            }}>
                        </Route>

                        <Route path="/login" render={() => {
                            return (
                                !user.authentificated ?
                                    <Login setUser={setUser}/> :
                                    <Redirect to="/"></Redirect>
                            );
                        }}>
                        </Route>

                        <Route path="/register" render={() => {
                            return (
                                !user.authentificated ?
                                    <Register /> :
                                    <Redirect to="/"></Redirect>                                
                            );
                        }}>
                        </Route>

                        <Route path="/profile" render={() => {
                            return (
                                !user.authentificated ?
                                    <Redirect to="/"></Redirect> :
                                    <Profile />
                            );
                        }}>
                        </Route>

                    </Switch>
                
                </div>

                <Footer/>

            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);