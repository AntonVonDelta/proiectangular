import ReactDOM from 'react-dom';
import { Profiler, useState,useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import "./index.css"
import { loadUser } from './actions/tools';
import { doLogin, reqLoginError, reqLoggedIn } from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomNavbar from "./components/CustomNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"

// Deci poti crea componente clase si functii. Am folosit clase deoarece aveam vriabilele props si state deja populate in this 
//    spre deosebire de functii unde trebuie sa apelezi useState de fiecare data. Nice
// Acum aflu ca nu exista varianta a useEffects in clase(doar un hack de didmount sau nu stiu ce alta prostie) si ca ar fi fost mai bine daca as fi folosit functii de la bun inceput. 
// De ce sunt doua modalitati de a rezolva aceeasi problema cu una dintre ele niciodata folosita in realitate? stupid react

// Daca vrei sa pui intr-un if mai multe linii de html ele trebuie puse in lista!!! Lista de html tags!!! Cine foloseste react?
// Se pare ca sunt peste 20 de modalitati de a scrie css in react. Cine foloseste react?
// Mi-a luat peste 3 saptamani sa inteleg react si peste 257 de MB!! pentru un proiect amarat de comments si posts. Cine foloseste react?
// Trebuie sa fi atent CUM importi un modul: daca ai folosit default, sau const, sau o functie... https://stackoverflow.com/questions/53328408/receiving-attempted-import-error-in-react-app  
// Cine a inventat REACT!!!?

const App = () => {
    var user=loadUser();
    console.log("logged in user:",user);

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