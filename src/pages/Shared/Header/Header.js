import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold"
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container>
            <Navbar.Brand><NavLink to="/home"><img src={logo} width="180" height="40" className="d-inline-block align-top" alt=""/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto text-center">
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-5" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-5" to="/servises">Servises</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-5" to="/about">About Us</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-decoration-none my-1 me-4 text-info fs-5" to="/contact">Contact</NavLink>
                </Nav>
                <Nav className="text-center">
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;