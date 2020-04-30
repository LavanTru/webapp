import React, { Component } from 'react';
import {Container,Col,Row,Card} from "react-bootstrap";
import ContactCard from "./ContactCard";

class WasherProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col>
                <ContactCard/>
                </Col>
                <Col>
                <ContactCard/>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default WasherProfile;