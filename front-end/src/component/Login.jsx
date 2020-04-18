import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import UserDataService from '../service/UserDataService';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ""
    }
    this.handleClick = this.handleClick.bind(this);
    // this.showError = this.showError.bind(this);
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} />
        </Form.Group>

        <p className="redError">
          {this.state.errorMessage}
          {/* Error */}
        </p>
        <Button
          className="button-green"
          onClick={this.handleClick}
          block
        >
          Log in
        </Button>
      </Form>
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleClick(event) {
    UserDataService.login(this.state.email, this.state.password)
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful");
          // TODO close modal and save user
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          // console.log("Username and password do not match");
          // alert("Username and password do not match");
          this.setState({
            errorMessage: "Incorrect email or password."
          })
        }
        else if (error.response.status === 404) {
          console.log("Username does not exists");
          // alert("Username does not exist");
          this.setState({
            errorMessage: "Incorrect email or password."
          })
        }
        else {
          // console.log("Unknown error response status");
          this.setState({
            errorMessage: "Something went wrong. Try again."
          })
        }
      });
  }
}
export default Login;