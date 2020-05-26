import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import UserDataService from '../../service/UserDataService';
import { setSessionCookie } from "../../Session.js";
import { withRouter } from 'react-router-dom';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <Form className="m-4" >
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
  // Method to record the changes in the form in a component state variable
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleClick() {
    UserDataService.login(this.state.email, this.state.password)
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful");
          const user = {
            // Add here more attributes to be stored in the cookies if needed
            "id": response.data.id,
            "firstName": response.data.firstName,
            "lastName": response.data.lastName,
            "email": response.data.email,
            "userType": response.data.userType,
            "addresses":[response.data.addresses[0]]
          };
          setSessionCookie(user);
          this.props.onHide();
          // TODO change where user will be redirected after login
          window.location.reload(false);

          console.log(response.data.userType);
          if (response.data.userType === "WASHEE") {
            this.props.history.push({
              pathname: "/washerlist",
              state: { ...this.props.location.state }
            })
          } else {
            this.props.history.push("/washerOrderList")
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (!error.response) {
          console.log(error);
        }
        else if (error.response.status === 401) {
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
export default withRouter(LoginModal);