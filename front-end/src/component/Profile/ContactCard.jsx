import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Part of WasherProfile that shows the Washer's contact details to Washee
// Address is stored as an array because we assume users can have many addresses in the future, but currently we allow only one so we are taking the first item in the array by default.
class ContactCard extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="h2">Contact {this.props.washerDetails.firstName}</Card.Header>
                <Card.Body>
                    <Card.Title>Address</Card.Title>
                    <Card.Text>{this.props.washerDetails.addresses[0].streetName}, {this.props.washerDetails.addresses[0].buildingNo} {this.props.washerDetails.addresses[0].apartmentNo}
                        <br /> {this.props.washerDetails.addresses[0].city} {this.props.washerDetails.addresses[0].postCode}</Card.Text>
                    <Card.Title>Phone number</Card.Title>
                    <Card.Text> {this.props.washerDetails.phoneNo}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={{
                        pathname: "/order",
                        state: { washerId: this.props.washerDetails.id }
                    }} 
                    style={{ textDecoration: 'none' }}>
                        <Button className="button-green" block >Set up wash</Button></Link>
                </Card.Footer>

            </Card >
        );
    }
}

export default ContactCard;