import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import LoginModal from "./LoginModal";

// import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalShow: false
        };
        this.handleLoginModalShow2 = this.handleLoginModalShow2.bind(this);
    }
    handleLoginModalShow2(){
            console.log("loginmodalshow"); 
            this.setState({ loginModalShow: true }); 
        };

    render() {
        let handleLoginModalClose = () => {
            console.log("loginmodalclose");
            this.setState({ loginModalShow: false });
        };
        // let handleLoginModalShow = () => { 
        //     console.log("loginmodalshow"); 
        //     this.setState({ loginModalShow: true }); 
        // };


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
                        <Nav.Link className="font-weight-bold" 
                        // href="#log_in" 
                        onClick={this.handleLoginModalShow2}>
                            Log in
                        <LoginModal
                                show={this.state.loginModalShow}
                                onHide={handleLoginModalClose}
                            />

                        </Nav.Link>
                        <Nav.Link href="#sign_up">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;