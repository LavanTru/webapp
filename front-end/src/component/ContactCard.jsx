import React, { Component } from 'react';
import { Card,Button } from "react-bootstrap";

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Gertrud",
            streetName: "Monec",
            buildingNo: "16",
            apartmentNo: "3-1",
            postCode: "08003",
            city: "Barcelona",
            phoneNo: "+34654253847",
        }
    }

    render() {
        return (
            <Card>
                <Card.Header className="h2">Contact {this.state.firstName}</Card.Header>
                <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>{this.state.streetName}, {this.state.buildingNo} {this.state.apartmentNo}
                    <br /> {this.state.city} {this.state.postCode}</Card.Text>
                <Card.Title>Phone number</Card.Title>
                <Card.Text> {this.state.phoneNo}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="button-green" block>Set up wash</Button>
                </Card.Footer>

            </Card>
        );
    }
}

export default ContactCard;