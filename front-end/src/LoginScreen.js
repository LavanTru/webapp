import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import Axios from 'axios';
import Default from './Default';


class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginscreen: [],
      loginmessage: '',
      buttonLabel: 'Register',
      isLogin: true
    }
  }
  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
    var loginmessage = "Not registered yet, register now";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </MuiThemeProvider>
        </div>
        {/* start google part */}
        <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
          Login with Google
        </button>
        {/* end google part */}
      </div>
    );
  }

  componentDidMount() {
    this.googleSDK();
  }

  handleClick(event) {
    // console.log("event",event);
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Register parentContext={this} />);
      loginmessage = "Already registered. Go to login";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Login",
        isLogin: false
      })
    }
    else {
      var loginscreen = [];
      loginscreen.push(<Login parentContext={this} />);
      loginmessage = "Not registered yet. Go to registration";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Register",
        isLogin: true
      })
    }
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

    console.log(this.refs.googleLoginBtn);

    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE

        var apiBaseUrl = "http://localhost:8080/api/users";
        var self = this;

        Axios.get(apiBaseUrl, {
          params: {
            email: profile.getEmail()
          }
        })
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              console.log("Login successfull");
              var uploadScreen = [];
              uploadScreen.push(<Default
                appContext={self.props.appContext}
              />)
              self.props.parentContext.setState({
                loginPage: [],
                uploadScreen: uploadScreen
              })
            }
          })
          .catch(function (error) {
            console.log(error);
            if (error.response.status == 404){
              console.log("Username does not exists");
              // alert("Username does not exist");
              var uploadScreen = [];
              uploadScreen.push(<Register
                appContext={self.props.appContext}
              />)
              self.props.parentContext.setState({
                loginPage: [],
                uploadScreen: uploadScreen
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
const style = {
  margin: 15,
};
export default Loginscreen;