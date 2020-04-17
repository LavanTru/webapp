import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick = {this.handleClick}>
          Submit
        </Button>
      </Form>
    );
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8080/api/users";
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    axios.post(apiBaseUrl + '/login', payload)
      .then((response)=> {
        if (response.status === 200) {
          console.log("Login successful");
          this.props.handleLogin();
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 401) {
          console.log("Username and password do not match");
          alert("Username and password do not match");
        }
        else if (error.response.status === 404){
          console.log("Username does not exists");
          alert("Username does not exist");
        }
        else {
          console.log("Unknown error response status");
          alert("Something went wrong");
        }
      });
  }
}
const style = {
  margin: 15,
};
export default Login;