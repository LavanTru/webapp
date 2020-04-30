import React, { Component } from 'react';
import {Card} from "react-bootstrap";

class ContactCard extends Component {
constructor (props) {
    super(props);
    this.state = {
        firstName: "Gertrud"
    }
}

    render() {
        return (
            <Card>
                <Card.Header>Contact {this.state.firstName}</Card.Header>
                
            </Card>
        );
    }
}

export default ContactCard;