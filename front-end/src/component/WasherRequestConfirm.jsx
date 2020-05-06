import React, { Component } from 'react';
import { Container, Col, Row, Card,Button } from "react-bootstrap";

class WasherRequestConfirm extends Component {
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

    }

    handleRejectButton(){
        
    }
}

export default WasherRequestConfirm;