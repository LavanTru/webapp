import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import OrderDataService from "../../../service/OrderDataService"
import ExtraNotes from "../../../asset/icon/extra_notes.svg";
import Fashion from "../../../asset/icon/fashion.svg";
import Location from "../../../asset/icon/location.svg"
import Delivery from "../../../asset/icon/delivery.svg"
import CreditCard from "../../../asset/icon/credit_card.svg"

class WasherOrderConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.props.match.params.id,
            order: {
                items: [],
                address: {}
            }
        }
        this.handleConfirmButton = this.handleConfirmButton.bind(this);
        this.handleRejectButton = this.handleRejectButton.bind(this);
    }

    componentDidMount() {
        this.refreshOrderDetails();
    }
    refreshOrderDetails() {
        OrderDataService.getWasherOrderListDtoById(this.state.orderId)
            .then(
                response => {
                    this.setState({
                        order: response.data
                    })
                }
            )
    }
    handleConfirmButton() {
        OrderDataService.confirmOrder(this.state.orderId);
        this.setState({
            order: {
                ...this.state.order,
                status: "CONFIRMED"
            }
        });
    }
    handleRejectButton() {
        OrderDataService.rejectOrder(this.state.orderId);
        this.setState({
            order: {
                ...this.state.order,
                status: "REJECTED"
            }
        });
    }
    renderTemperatureAndWashCycle(item) {
        if (item.job === "Laundry" || item.job === "Washing") {
            if (this.state.order.washCycle === "Let your washer choose") {
                return (
                    <>
                        <Row className="rowTextChildLevel2">Washing instructions: You choose</Row>
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
        if (this.state.order.deliveryByWashee) {
            deliveryText = "Washee comes to you"

        } else {
            deliveryText = "You go to Washee";
            address = <Row>
                <img className="icon float-left" src={Location} alt="Location details" />
                <h6 className="rowText">{this.state.order.address.streetName}, {this.state.order.address.buildingNo} {this.state.order.address.apartmentNo}</h6>
            </Row>
        }
        return (
            <>
                <Row>
                    <img className="icon float-left" src={Delivery} alt="Delivery details" />
                    <h6 className="rowText">{deliveryText}</h6>
                </Row>
                <Row>
                    <p className="rowTextChildLevel1">Receive laundry: {this.state.order.dropoff}</p>
                </Row>
                <Row>
                    <p className="rowTextChildLevel1">Give laundry: {this.state.order.pickup}</p>
                </Row>
                {address}
            </>
        )
    }
    renderFooter() {
        if (this.state.order.status !== "NEW") {
            return <p >Status: <b>{this.state.order.status}</b></p>;
        }
        else {
            return (
                <>
                    <Button className="button-pink" onClick={this.handleRejectButton} >Reject</Button>
                    <Button className="button-green float-right" onClick={this.handleConfirmButton}>Confirm</Button>
                </>
            )
        }
    }

    render() {
        return (
            <Container className="orderDetails" fluid>
                <Col md={{ span: 8, offset: 2 }} className="py-4">
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col md="auto">
                                    <img className="profileImage" src={this.state.order.washeeImage} alt="Washee profile" />
                                </Col>
                                <Col>
                                    <Row><h4 className="text-center w-100">Order from {this.state.order.washeeFirstName}</h4></Row>
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
                            {this.renderFooter()}
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default WasherOrderConfirm;