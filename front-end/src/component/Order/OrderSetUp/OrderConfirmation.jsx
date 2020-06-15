import React, { Component } from 'react';
import OrderDataService from '../../../service/OrderDataService';
import CustomStepper from "./CustomStepper";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import ExtraNotes from "../../../asset/icon/extra_notes.svg";
import Fashion from "../../../asset/icon/fashion.svg";
import Location from "../../../asset/icon/location.svg";
import Delivery from "../../../asset/icon/delivery.svg";
import CreditCard from "../../../asset/icon/credit_card.svg";
import { format } from "date-fns";
import { Alert } from 'reactstrap';

// Last part of the order setup flow where user confirms their selection
class OrderConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: this.props.location.state.order,
            washer: this.props.location.state.washer,
            message: ""
        }
        this.createOrder = this.createOrder.bind(this);
    }
    createOrder() {
        OrderDataService.createOrder(this.state.order)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Order creation successful");

                    this.setState({
                        message: "Request sent to the Washer!"
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    renderTemperatureAndWashCycle(item) {
        if (item.job === "Laundry" || item.job === "Washing") {
            if (this.state.order.washCycle === "Let your washer choose") {
                return (
                    <>
                        <Row className="rowTextChildLevel2">Washing instructions: {this.state.order.washCycle}</Row>
                    </>
                )
            } else {
                return (
                    <>
                        <Row className="rowTextChildLevel2">Washing instructions: {this.state.order.washCycle}, {this.state.order.temperature}°</Row>
                    </>
                )
            }
        }
    }
    renderDelivery() {
        let deliveryText;
        let address;
        if (!this.state.order.deliveryByWashee) {
            deliveryText = "Washer comes to you"

        } else {
            deliveryText = "You go to Washer";
            address = <Row>
                <img className="icon float-left" src={Location} alt="Location details" />
                <h6 className="rowText">{this.state.washer.addresses[0].streetName}, {this.state.washer.addresses[0].buildingNo} {this.state.washer.addresses[0].apartmentNo}</h6>
            </Row>
        }
        return (
            <>
                <Row>
                    <img className="icon float-left" src={Delivery} alt="Delivery details" />
                    <h6 className="rowText">{deliveryText}</h6>
                </Row>
                <Row>
                    <p className="rowTextChildLevel1">Give laundry: {format(new Date(this.state.order.dropOffDate), "kk:mm, MMM d")}</p>
                </Row>
                <Row>
                    <p className="rowTextChildLevel1">Receive laundry: {format(new Date(this.state.order.pickUpDate), "kk:mm, MMM d")}</p>
                </Row>
                {address}
            </>
        )
    }
    render() {
        return (
            <Container className="orderDetails" fluid>
                <Col md={{ span: 8, offset: 2 }} className="py-4">
                    <CustomStepper activeStep={2} />
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col md="auto">
                                    <img className="profileImage" src={this.state.washer.image} alt="Washer profile" />
                                </Col>
                                <Col>
                                    <Row><h4 className="text-center w-100">Order to {this.state.washer.firstName}</h4></Row>
                                    <Row><h2 className="text-center w-100">€ {this.state.order.orderTotal}</h2></Row>
                                </Col>
                            </Row>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <img className="icon float-left" src={Fashion} alt="Order details" />
                                <h6 className="rowText">Order details</h6>
                            </Row>
                            {this.state.order.items.map(item => (
                                <>
                                    <Row>
                                        <p className="rowTextChildLevel1">{item.amount} x {item.job}</p>
                                    </Row>
                                    {this.renderTemperatureAndWashCycle(item)}
                                </>
                            ))}
                            {this.renderDelivery()}
                            <Row>
                                <img className="icon float-left" src={CreditCard} alt="Payment option details" />
                                <h6 className="rowText">MC **** 1234</h6>
                            </Row>
                            <Row>
                                <img className="icon float-left" src={ExtraNotes} alt="Extra notes" />
                                <p className="rowText">{this.state.order.notes}</p>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            {/* {this.renderFooter()} */}
                            {!this.state.message && <Button className="button-green float-right" onClick={this.createOrder}>
                                Confirm the order
                            </Button>}
                            {this.state.message && <Alert
                                color="success">{this.state.message}</Alert>}
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default OrderConfirmation;