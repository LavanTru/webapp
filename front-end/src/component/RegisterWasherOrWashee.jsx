import React, { Component } from 'react';
import { Button, Jumbotron } from "react-bootstrap";
import WasheeDataService from "../service/WasheeDataService";
import { setSessionCookie } from "../Session.js";

class RegisterWasherOrWashee extends Component {
constructor(props){
    super(props);
    this.handleWasheeSignUp = this.handleWasheeSignUp.bind(this);
}

    render() {
        return (
            <Jumbotron>
                <h1
                className = "m-5 lavantruGreen"
                    
                >Want to get paid doing laundry?</h1>
                <Button
                    className="button-pink"
                    size="lg"
                    onClick={()=>{this.props.history.push({
                        pathname:"/register/washer",
                        state:{...this.props.location.state}
                    })
                    }}
                >Yes! I'm a Washer</Button>

                <h1
                className = "m-5 lavantruGreen"
                >Want to never think about laundry again?  </h1>
                <Button
                    className="button-pink"
                    size="lg"
                    onClick={this.handleWasheeSignUp}
                >Yes! I'm a Washee</Button>
            </Jumbotron>
        );
    }

    handleWasheeSignUp() {
        const parentState = this.props.location.state;
        WasheeDataService.register(
            parentState.firstName,
            parentState.lastName,
            parentState.email,
            parentState.password,
            null,
            "PERSONAL",
            null,
            false,
            [],
            null,
            null,
            [])
            .then((response) => {
                if (response.status === 200) {
                    console.log("Registration successfull");

                    const user = {
                        // Add here more attributes to be stored in the cookies if needed
                        "id":response.data.id,
                        "firstName": response.data.firstName,
                        "lastName": response.data.lastName,
                        "email": response.data.email,
                        "userType":"WASHEE"
                    };
                    setSessionCookie(user);

                    // TODO change redirect to some default page and log in
                    this.props.history.push("/");
                    window.location.reload(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default RegisterWasherOrWashee;