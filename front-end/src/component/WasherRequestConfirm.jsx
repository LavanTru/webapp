import React, { Component } from 'react';
import { Container, Col, Row, Card,Button } from "react-bootstrap";
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
                            <Button className="button-green" onClick={this.handleConfirmButton}>Confirm</Button>
                            <Button className="button-pink" onClick={this.handleRejectButton} >Reject</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        );
    }

    handleConfirmButton(){
        OrderDataService.confirmOrder(this.state.orderId);
    }

    handleRejectButton(){
        OrderDataService.rejectOrder(this.state.orderId);
    }
}

export default WasherRequestConfirm;