import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import OrderDataService from "../../service/OrderDataService"
import { format } from "date-fns";
import ExtraNotes from "../../asset/icon/extra_notes.svg";
import Fashion from "../../asset/icon/fashion.svg";
import Location from "../../asset/icon/location.svg"
import Delivery from "../../asset/icon/delivery.svg"
import CreditCard from "../../asset/icon/credit_card.svg"


class WasherOrderConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.props.match.params.id,
            order: {
                items: []
            }
        }
        this.handleConfirmButton = this.handleConfirmButton.bind(this);
        this.handleRejectButton = this.handleRejectButton.bind(this);
    }

    componentDidMount() {
        this.refreshOrderDetails();
    }
    renderFooter() {
        if (this.state.status !== "NEW") {
            return <div>Status: <b>{this.state.status}</b></div>;
        }
        else {
            return (
                <div>
                    <Button className="button-green" onClick={this.handleConfirmButton}>Confirm</Button>
                    <Button className="button-pink float-right" onClick={this.handleRejectButton} >Reject</Button>
                </div>
            )
        }
    }
    refreshOrderDetails() {
        OrderDataService.getOrderById(this.state.orderId)
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
        this.setState({ status: "CONFIRMED" });
    }
    handleRejectButton() {
        OrderDataService.rejectOrder(this.state.orderId);
        this.setState({ status: "REJECTED" });
    }
    renderTemperatureAndWashCycle(job) {
        if (job.job === "Ironing")
            return (
                <>
                    <Row className="ml-5">{this.state.order.washCycle}</Row>
                    <Row className="ml-5">{this.state.order.temperature}</Row>
                </>
            )
    }
    renderDelivery() {
        let deliveryText;
        if (this.state.order.deliveryByWashee) {
            deliveryText = "Washee comes to you"
            
        } else {
            deliveryText = "You go to Washee"
        }
        return (
            <>
                <Row>
                    <img className="icon float-left" src={Delivery} alt="Delivery details" />
                    <h6 className="rowText">{deliveryText}</h6>
                </Row>
                <Row className="ml-3">
                    <p>Receive laundry at {format(new Date(this.state.order.dropOffDate), "kk:mm, MMM d")}</p>
                </Row>
                <Row className="ml-3">
                    <p>Give laundry at {format(new Date(this.state.order.pickUpDate), "kk:mm, MMM d")}</p>
                </Row>
            </>
        )
    }

    render() {
        return (
            <Container className="washerOrderDetails" fluid>
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <h4 className="text-center">Order summary</h4>
                    <Card>
                        <Card.Header>
                            <Col>
                                <img className="profileImage" src={this.state.order.washeeImage} alt="Washee profile" />
                            </Col>
                            <Col>
                                <Row><h6>{this.state.order.washeeFirstName}</h6></Row>
                                <Row><h4>{this.state.order.orderTotal}</h4></Row>
                            </Col>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <img className="icon float-left" src={Fashion} alt="Order details" />
                                <h6 className="rowText">Order details</h6>
                            </Row>
                            {this.state.order.items.map(item => (
                                <>
                                    <Row>
                                        <p className="ml-3">- {item.job}</p>
                                    </Row>
                                    {this.renderTemperatureAndWashCycle(item)}
                                </>
                            ))}
                            {this.renderDelivery()}
                            <Row>
                                <img className="icon float-left" src={Location} alt="Location details" />
                                <h6 className="rowText">Address data</h6>
                            </Row>
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