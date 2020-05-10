import React, { Component } from 'react';
import { Button, Jumbotron } from "react-bootstrap";

class RegisterWasherOrWashee extends Component {
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
                    // onClick={()=>{this.props.history.push({
                    //     pathname:"/washerlist",
                    //     state:{...this.props.location.state}

                    // })
                    // }}

                >Yes! I'm a Washee</Button>
            </Jumbotron>
        );
    }
}

export default RegisterWasherOrWashee;