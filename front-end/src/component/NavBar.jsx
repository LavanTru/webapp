import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import LoginModal from "./LoginModal";
import NavBarLogin from "./NavBarLogin";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalShow: false,
            isRegistered: true
        };
        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.handleChangeIsRegistered = this.handleChangeIsRegistered.bind(this);

    }

    handleLoginModal() {
        this.setState({ loginModalShow: !this.state.loginModalShow });
    };

    handleChangeIsRegistered() {
        this.setState({ isRegistered: !this.state.isRegistered });
    };


    render() {
        // Import session data from the Context
        // const session = useContext(SessionContext);

        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">LavanTru</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/washerOrderList">Orders</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavBarLogin handleChangeIsRegistered={this.handleChangeIsRegistered} handleLoginModal={this.handleLoginModal}/>
                        <LoginModal
                            show={this.state.loginModalShow}
                            // show={true}
                            onHide={this.handleLoginModal}
                            isRegistered={this.state.isRegistered}
                            handleChangeIsRegistered={this.handleChangeIsRegistered}
                        // backdrop="static"
                        />
                        {this.myMethod}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavBar;