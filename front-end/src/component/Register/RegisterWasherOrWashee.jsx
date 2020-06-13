import React, { Component } from 'react';
import Section from "../LandingPage/Section";

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