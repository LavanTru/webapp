import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class NavBar extends Component {

    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">LavanTru</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link className="font-weight-bold" href="#log_in">Log in</Nav.Link>
                    <Nav.Link href="#sign_up">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;