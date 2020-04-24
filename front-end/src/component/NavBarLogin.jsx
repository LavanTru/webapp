import React, { useContext } from 'react';
import { SessionContext, removeSessionCookie } from "../Session";
import { Navbar, Nav } from "react-bootstrap";

// This method checks if the user info is saved into session and returns either user info and log out option. Returns log in/sign up options if no session
const NavBarLogin = (props) => {
    const session = useContext(SessionContext);
    if (session) {
        return (
            <Nav>
                <Navbar.Text>
                    {/* option 1 for reading Context session: */}
                    <div>Signed in as {session.email}</div>

                    {/* option 2 for reading Context session: */}
                    {/* <SessionContext.Consumer>
                    {props => (
                        <div> Signed in as {props}</div>
                    )}

                </SessionContext.Consumer> */}
                </Navbar.Text>
                <Nav.Link className="font-weight-bold"
                    // href="#log_in" 
                    onClick={()=>{removeSessionCookie();window.location.reload(false);
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
                    // href="#log_in" 
                    onClick={props.handleLoginModal}>
                    Log in
                    </Nav.Link>
                <Nav.Link
                    // href="#sign_up"
                    onClick={() => { props.handleChangeIsRegistered(); props.handleLoginModal(); }}
                >Sign up
                    </Nav.Link>
            </Nav>
        );
    }
}

export default NavBarLogin;