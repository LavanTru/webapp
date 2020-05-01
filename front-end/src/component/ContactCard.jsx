import React, { Component } from 'react';
import { Card,Button } from "react-bootstrap";

class ContactCard extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="h2">Contact {this.props.washerDetails.firstName}</Card.Header>
                <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>{this.props.washerDetails.streetName}, {this.props.washerDetails.buildingNo} {this.props.washerDetails.apartmentNo}
                    <br /> {this.props.washerDetails.city} {this.props.washerDetails.postCode}</Card.Text>
                <Card.Title>Phone number</Card.Title>
                <Card.Text> {this.props.washerDetails.phoneNo}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="button-green" block>Set up wash</Button>
                </Card.Footer>

            </Card>
        );
    }
}

export default ContactCard;