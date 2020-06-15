import React, { Component } from 'react';
import Section from "../LandingPage/Section";

// Page shown to a new user where they select how they want to register if the have not done so on the Landing page
class RegisterWasherOrWashee extends Component {
    render() {
        return (
                <Section
                    onClickWasher={() => {
                        this.props.history.push({
                            pathname: "/register/washer",
                            state: { ...this.props.location.state }
                        })
                    }}
                    onClickWashee={() => {
                        this.props.history.push({
                            pathname: "/register/washee",
                            state: { ...this.props.location.state }
                        })
                    }} />
        );
    }
}

export default RegisterWasherOrWashee;