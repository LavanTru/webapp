import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import Axios from 'axios';


class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginmessage: "Not registered yet?",
      buttonLabel: 'Register',
      isRegistered: true,
      loginscreen: ''
    };
    this.handleClick = this.handleClick.bind(this);
    // this.prepareGoogleLoginButton = this.prepareGoogleLoginButton.bind(this);
  }

  render() {
    let loginScreen;
    this.state.isRegistered ? (
      loginScreen = <Login handleLogin={this.props.handleLogin} />
    ) : (
        loginScreen = <Register handleClick={this.handleClick} />);

    return (
      <div className="loginscreen">
        {loginScreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </MuiThemeProvider>
        </div>
        {/* <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
          Login with Google
        </button> */}
      </div>
    );
  }

  // componentDidMount() {
  //   this.googleSDK();
  // }

  handleClick(event) {
    if (this.state.isRegistered) {
      this.setState({
        loginmessage: "Already registered? Go to login",
        buttonLabel: "Login",
        isRegistered: false
      });
    } else {
      this.setState({
        loginmessage: "Not registered yet?",
        buttonLabel: "Register",
        isRegistered: true
      });
    }
  }

  // googleSDK() {
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '146948454027-q6953hbqb8ksh01n4nse0dc2uvo9n7n0.apps.googleusercontent.com',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareGoogleLoginButton();
  //     });
  //   }

  //   (function (d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) { return; }
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
  // }

  // prepareGoogleLoginButton = () => {

  //   console.log(this.refs.googleLoginBtn);

  //   this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
  //     (googleUser) => {

  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       //YOUR CODE HERE

  //       var apiBaseUrl = "http://localhost:8080/api/users";

  //       Axios.get(apiBaseUrl, {
  //         params: {
  //           email: profile.getEmail()
  //         }
  //       })
  //         .then((response)=> {
  //           console.log(response);
  //           if (response.status === 200) {
  //             console.log("Login successfull");
  //             this.props.handleLogin();
  //           }
  //         })
  //         .catch((error)=> {
  //           console.log(error);
  //           if (error.response.status === 404) {
  //             console.log(this);
  //             console.log("Username does not exists");
  //             this.setState({
  //               loginmessage: "Already registered? Go to login",
  //               buttonLabel: "Login",
  //               isRegistered: false
  //             })
  //           }
  //           else {
  //             console.log("Unknown error response status");
  //             alert("Something went wrong");
  //           }
  //         })
  //         ;
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });

  // }
}
const style = {
  margin: 15,
};
export default Loginscreen;