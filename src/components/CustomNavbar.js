import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

import { Button,Navbar,Nav,Container } from 'react-bootstrap';

class CustomNavbar extends Component{
    render() {
        if(!this.props.authentificated){
            return (  
                <Navbar bg="light" expand="lg">
                    <Container>
                        <h5 className="my-0 mr-md-auto font-weight-normal">
                            <Nav.Link href="/">PublicComments</Nav.Link>
                        </h5>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            )
        }else{
            return ( 
            <Navbar bg="light" expand="lg">
                    <Container>
                        <h5 className="my-0 mr-md-auto font-weight-normal">
                            <Nav.Link href="/">PublicComments</Nav.Link>
                        </h5>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav>
                            <span className="nav-link">Logged in as <a href="/profile">{this.props.name}</a></span>
                        </Nav>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default CustomNavbar;