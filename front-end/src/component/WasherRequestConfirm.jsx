import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import OrderDataService from "../service/OrderDataService"

class WasherRequestConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.props.match.params.id,
        }
        this.handleConfirmButton = this.handleConfirmButton.bind(this);
        this.handleRejectButton = this.handleRejectButton.bind(this);
    }


    componentDidMount() {
        this.refreshOrderDetails();
    }

    render() {
        return (
            <Container>
                <Col>
                    <Card>
                        <Card.Header> Request placeholder</Card.Header>
                        <Card.Body>
                            <Card.Text>Here goes some request information</Card.Text>
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
        if (this.state.status !== "New") {
            return <div>Status: <b>{this.state.status}</b></div>;
        }
        else {
            return (
                <div>
                    <Button className="button-green" onClick={this.handleConfirmButton}>Confirm</Button>
                    <Button className="button-pink" onClick={this.handleRejectButton} >Reject</Button>
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
                () => { console.log("new state", this.state) }
            )
    }

    handleConfirmButton() {
        OrderDataService.confirmOrder(this.state.orderId);
    }

    handleRejectButton() {
        OrderDataService.rejectOrder(this.state.orderId);
    }
}

export default WasherRequestConfirm;