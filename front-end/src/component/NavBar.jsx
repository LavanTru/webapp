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

    myMethod (){
        if (this.state.magic)
        {
            return <div>magic</div>
        }
    }



}

export default NavBar;