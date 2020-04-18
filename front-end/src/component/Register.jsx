import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import UserDataService from '../service/UserDataService';

// TODO add error messages for field validations

class Register extends Component {
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
    render() {
        return (
            <Form onChange={this.handleChange}>
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
                    block
                >
                    Sign up
                </Button>
            </Form>
        );
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick() {
        UserDataService.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.matchingPassword)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                     console.log("registration successfull");
                    
                //    TODO forward to login flow
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default Register;