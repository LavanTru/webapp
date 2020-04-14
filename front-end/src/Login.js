import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
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


