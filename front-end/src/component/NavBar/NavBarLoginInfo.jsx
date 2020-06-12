import React, { useContext } from 'react';
import { SessionContext, removeSessionCookie } from "../../Session";
import { Navbar, Nav } from "react-bootstrap";

// This method checks if the user info is saved into session and returns either user info and log out option. Returns log in/sign up options if no session
const NavBarLoginInfo = (props) => {
    const session = useContext(SessionContext);
    if (session) {
        return (
            <Nav>
                <img className="clickable image mr-2" src={session.image} alt="profile_picture" />
                <Navbar.Text className="clickable">
                    <h4 className="m-1 title">{session.firstName}</h4>
                </Navbar.Text>
                <Nav.Link className="mx-3"
                    href="/"
                    onClick={() => {
                        removeSessionCookie(); window.location.reload(false);
                    }}>
                    <h4 className="m-1 title font-weight-bold">Log out</h4>
                </Nav.Link>
            </Nav>
        );
    }
    else {
        return (
            <Nav>
                <Nav.Link className="font-weight-bold"
                    onClick={props.handleLoginModal}>
                    <h4 className="m-1 title">Log in</h4>
                </Nav.Link>
                <Nav.Link
                    onClick={() => { props.handleChangeIsRegistered(); props.handleLoginModal(); }} >
                    <h4 className="m-1 title">Sign up </h4>
                </Nav.Link>
            </Nav>
        );
    }
}

export default NavBarLoginInfo;