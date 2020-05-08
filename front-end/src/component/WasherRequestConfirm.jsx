import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import OrderDataService from "../service/OrderDataService"
import iconExtraNotes from "../asset/extra_notes.svg";

class WasherRequestConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.props.match.params.id,
            status: "",
            notes: "",
            // having empty date field crashes the render
            dateCreated: new Date(),
            washeeId: "",
            items: [],
            totalAmount: 0,
            orderTotal: 0
        }
        this.handleConfirmButton = this.handleConfirmButton.bind(this);
        this.handleRejectButton = this.handleRejectButton.bind(this);
    }


    componentDidMount() {
        this.refreshOrderDetails();
    }

    render() {
        const bag = this.state.items.map(item => (
            < Row key={item.job + item.id} >
                <Col>{item.job}</Col>
                <Col>{item.amount}</Col>
                <Col>€{item.totalPrice}</Col>
            </Row >
        ));

        return (
            <Container>
                <Col className="mt-5" md={{ span: 6, offset: 3 }} >
                    <Card>
                        {/* <Card.Header> Request from {this.state.washeeId}</Card.Header> */}
                        <Card.Header> Request details</Card.Header>
                        <Card.Body>
                            {bag}
                            <Row className="mt-2">
                                <Col><b>Total</b></Col>
                                <Col><b>{this.state.totalAmount}</b></Col>
                                <Col><b>€{this.state.orderTotal}</b></Col>
                            </Row>
                            <Card.Text className="mt-3">
                                <img className="mr-2" src={iconExtraNotes} alt="extra notes" height="30px" width="30px" />
                                {this.state.notes}
                            </Card.Text>
                            <Card.Text>
                                <i> Request created {new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "2-digit", hour: 'numeric', minute: 'numeric' }).format(new Date(this.state.dateCreated))}</i>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            {this.renderFooter()}
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        );
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
                        status: response.data.status,
                        notes: response.data.notes,
                        dateCreated: response.data.dateCreated,
                        washeeId: response.data.washeeId,
                        items: response.data.items
                    })
                }
            ).then(
                () => { this.calculateTotals() }
            )
    }

    handleConfirmButton() {
        OrderDataService.confirmOrder(this.state.orderId);
        this.forceUpdate();
    }

    handleRejectButton() {
        OrderDataService.rejectOrder(this.state.orderId);
        this.forceUpdate();
    }
    calculateTotals() {
        this.state.items.map(item => (
            this.setState({
                orderTotal: (this.state.orderTotal + item.totalPrice),
                totalAmount: (this.state.totalAmount + item.amount)
            })
        ));
    }
}

export default WasherRequestConfirm;