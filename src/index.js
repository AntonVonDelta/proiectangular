import ReactDOM from 'react-dom';
import React from "react";
import { Profiler, useState, useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";

// Components
import "./index.css"
import { loadUser } from './actions/tools';
import { doLogin, reqLoginError, reqLoggedIn } from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {rootReducer} from "./reducers"
import { fetchAllUsers } from './slices/usersSlice.js';

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

// unable to resolve dependency tree  -- se pare ca nimeni nu stie de ce apare eroarea asta si doar downgradeaza npm ca sa le mearga...
// Altii pur si simplu apeleaza cu parametrul force fara sa le pese care e adevarata problema.
// Dupa hackul asta urat: "It looks like you're trying to use TypeScript but do not have typescript installed" I ALREADY HAVE TYPESCRIPT!!! Where'd it go? fishing perhaps
// Asta nu se cheama programare. Inca imi initializez proiectul ocolind problemele "populare" folosind hackuri care par mai robuste decat frameworkul in sine.
// React: the new way of programming using language hacks only

// Sa dea norocul peste tine si sa folosesti html corespunzator ca vei fi aspru pedepsit. E gresit daca folosesti href intr-un link! 
// Trebuia sa stii ca numai ...."to" e permis!!!!   https://stackoverflow.com/questions/48856955/react-typeerror-location-is-undefined
// Alta zi pierduta pe asta. Eroarea care aparea de fapt nu avea nicio legatura "locationProp is undefined"....noroc

// useHistory pur si simplu nu merge. Uneori rezulta in loop infinit alteori nu face absolut niciun redirect daca parametrul e "/". 
// Asa cum am mai zis hackul aici care este "window.location.href" merge mai bine decat implementarea default


const store = configureStore(/* provide initial state if any */);

const App = () => {
    var user =loadUser();
    console.log("logged in user:", user);

    // Initial load of all current users
    store.dispatch(fetchAllUsers()); 

    return (
        <div>
            <div>
                <CustomNavbar authentificated={user!=null} name={user!=null?user.username:""}></CustomNavbar>
            </div>

            <main className="container">
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            user==null ?
                                <Redirect to="/login"></Redirect>:
                                <Redirect to="/home"></Redirect>
                        );
                    }}>
                    </Route>

                    <Route path="/logout">
                        <Logout />
                    </Route>
                    

                    <Route exact path="/home" render={() => {
                        return (
                            user==null ?
                                <Redirect to="/login"></Redirect>:
                                <Home/>
                        );
                    }}>
                    </Route>
                    
                    <Route path="/login" render={() => {
                        return (
                            user==null ?
                                <Login/>:
                                <Redirect to="/"></Redirect>
                        );
                    }}>
                    </Route>

                    <Route path="/register" render={() => {
                        return (
                            user==null ?
                                <Register/>:
                                <Redirect to="/"></Redirect>
                        );
                    }}>
                    </Route>

                    <Route path="/profile" render={() => {
                        return (
                            user==null ?
                                <Redirect to="/"></Redirect> :
                                <Profile/>
                        );
                    }}>
                    </Route>

                </Switch>
            </main>

            <Footer className="mt-4"/>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>    
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);