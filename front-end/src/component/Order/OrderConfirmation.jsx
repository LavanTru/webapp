import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import OrderDataService from '../../service/OrderDataService';

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
            <Button onClick={this.createOrder}>
                Confirm the order
            </Button>
        );
    }
}

export default OrderConfirmation;