import ReactDOM from 'react-dom';
import { Profiler, useState,useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import "./index.css"
import { loadUser } from './actions/tools';

import CustomNavbar from "./components/CustomNavbar"
import Person from "./Person"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"

const App = () => {
    var user=loadUser();

    return (
        <div>
            <BrowserRouter>
                <div>
                    <CustomNavbar authentificated={user.authentificated} name={user.username}></CustomNavbar>
                </div>

                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => {
                            console.log("a");
                            return (
                                    !user.authentificated ?
                                        <Login/> :
                                        <Home />
                                );
                            }}>
                        </Route>
                        
                        <Route path="/logout">
                            <Logout/>
                        </Route>

                        <Route path="/login" render={() => {
                            return (
                                !user.authentificated ?
                                    <Login/> :
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
                            console.log("b "+user.authentificated);
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