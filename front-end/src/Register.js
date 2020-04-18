import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      matchingPassword:''
    }

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your first name"
             floatingLabelText="First name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your last name"
             floatingLabelText="Last name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Repeat your password"
             floatingLabelText="Repeat your password"
             onChange = {(event,newValue) => this.setState({matchingPassword:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:8080/api/users";
    console.log("values",this.state.firstName,this.state.lastName,this.state.email,this.state.password,this.state.matchingPassword);
    //To be done:check for empty values before hitting submit
    var payload={
    "firstName": this.state.firstName,
    "lastName":this.state.lastName,
    "email":this.state.email,
    "password":this.state.password,
    "matchingPassword":this.state.matchingPassword
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then((response)=> {
     console.log(response);
     if(response.status === 200){
      //  console.log("registration successfull");
      console.log(this);
      this.props.handleClick();
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
}
const style = {
  margin: 15,
};
export default Register;