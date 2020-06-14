import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import OrderDataService from '../../service/OrderDataService';
import CustomStepper from "./CustomStepper";
import { Col,Container} from "react-bootstrap";

class OrderConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.createOrder = this.createOrder.bind(this);
    }
    createOrder() {
        OrderDataService.createOrder(this.props.location.state.order)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Order creation successful");

                    // Here you can change what happens after successful order creation  
                    // this.props.history.push({
                    //     pathname: "/washerjobs"
                    //   })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {

        console.log("order", this.props.location.state.order);

        return (
            <Container fluid>
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <CustomStepper activeStep={2} />
                    <Button onClick={this.createOrder}>
                        Confirm the order
            </Button>
                </Col>

            </Container>
        );
    }
}

export default OrderConfirmation;