import React from "react";
import './navbar.css'
 
// We import bootstrap to make our application look better.
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Container } from "react-bootstrap";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Response from "./Response";
 
// Here, we display our Navbar
export default function Drawer() {
 return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand><h3>Admin Dashboard</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to="/calender">Calender</Link></Nav.Link>
                <Nav.Link><Link to="/formRes">Form response</Link></Nav.Link>
                <Nav.Link>Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Response/>
    </div>
 );
}