import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            matchingPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // Method to record the changes in the form in a component state variable
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick() {
        if (this.state.password === this.state.matchingPassword) {
            this.props.handleChangeIsRegistered();
            this.props.onHide();
            // If user has already selected their registration type on the landing page, they don't need to select any more
            if (this.props.registerUserType === "WASHER") {
                this.props.history.push({
                    pathname: "/register/washer",
                    state: { ...this.state }
                });
            }
            else if (this.props.registerUserType === "WASHEE") {
                this.props.history.push({
                    pathname: "/register/washee",
                    state: { ...this.state }
                });
            }
            else {
                this.props.history.push({
                    pathname: "/register",
                    state: { ...this.state }
                });
            }
        }
        else {
            // TODO: show error for non-matching passwords
        }
        window.location.reload();// reload screen so landing page goes away
    }
    render() {
        return (
            <Form className="m-4" onChange={this.handleChange}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control name="firstName" placeholder="First name" />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name="lastName" placeholder="Last name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicMatchingPassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control name="matchingPassword" type="password" placeholder="Password" />
                </Form.Group>

                <Button
                    className="button-green"
                    onClick={this.handleClick}
                    block>
                    Sign up
                </Button>
            </Form>
        );
    }
}

export default withRouter(RegisterModal);