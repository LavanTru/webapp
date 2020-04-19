import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import UserDataService from "../service/UserDataService";

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: true
        }
    }

    render() {
        let loginScreen;
        let headerLabel;
        let loginMessage;
        let buttonLabel;

        if (this.props.isRegistered) {
            loginScreen = <Login />;
            headerLabel = "Log in";
            loginMessage = "Don't have an account?";
            buttonLabel = "Sign up";
           
        } else {
            loginScreen = <Register />
            headerLabel = "Sign up";
            loginMessage = "Already registered?";
            buttonLabel = "Log in";
        };
        return (
            <>
                <Modal {...this.props}>
                    <Modal.Header closeButton>
                        <Modal.Title className="w-100 text-center" >{headerLabel}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{loginScreen}</Modal.Body>
                    <Modal.Footer className="mx-auto">
                        <div id="customGoogleBtn">
                            <span class="googleIcon"></span>
                            <span class="googleButtonText">Continue with Google</span>
                        </div>
                    </Modal.Footer>
                    <Modal.Footer className="mx-auto">
                        {loginMessage}
                        <div className="loginLink" onClick={this.props.handleChangeIsRegistered}>{buttonLabel}</div>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


    componentDidUpdate() {
        this.googleSDK();
    }

    googleSDK() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '146948454027-q6953hbqb8ksh01n4nse0dc2uvo9n7n0.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.prepareGoogleLoginButton();
            });
        }

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }

    prepareGoogleLoginButton = () => {
        this.auth2.attachClickHandler(document.getElementById("customGoogleBtn"), {},
            (googleUser) => {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());


                var apiBaseUrl = "http://localhost:8080/api/users";

                UserDataService.getUserByEmail(profile.getEmail)
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            console.log("Login successfull");
                            // TODO save user and close modal
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        if (error.response.status === 404) {
                            // console.log(this);
                            console.log("Username does not exists");
                            this.setState({
                                // TODO forward to registration flow

                            })
                        }
                        else {
                            console.log("Unknown error response status");
                            alert("Something went wrong");
                        }
                    })
                    ;
            }, (error) => {
                alert(JSON.stringify(error, undefined, 2));
            });

    }
}

export default LoginModal;