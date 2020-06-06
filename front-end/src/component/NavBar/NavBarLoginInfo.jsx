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
                    {/* option 1 for reading Context session: */}
                    <div>{session.firstName}</div>
                    {/* option 2 for reading Context session: */}
                    {/* <SessionContext.Consumer>
                    {props => (
                        <div> Signed in as {props}</div>
                    )}
                </SessionContext.Consumer> */}
                </Navbar.Text>
                <Nav.Link className="ml-3 font-weight-bold"
                     href="/"
                    onClick={() => {
                        removeSessionCookie(); window.location.reload(false);
                    }}>
                    Log out
            </Nav.Link>
            </Nav>
        );
    }
    else {
        return (
            <Nav>
                <Nav.Link className="font-weight-bold"
                    onClick={props.handleLoginModal}>
                    Log in
                    </Nav.Link>
                <Nav.Link
                    onClick={() => { props.handleChangeIsRegistered(); props.handleLoginModal(); }}
                >Sign up
                    </Nav.Link>
            </Nav>
        );
    }
}

export default NavBarLoginInfo;