import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/LandingPage.css";

function Header(){
    return (
    <header className="masthead"> 
    <Container className="header-content">
        <Row>
            <Col lg={5}>
                <h1 className="mb-5">You are going to love laundry!</h1>
                <h6>LavanTru helps those with higher priorities than doing laundry by connecting them with real people that are happy to wash their clothes at home for a fee.</h6>
                <a href="#info" className="btn btn-outline btn-xl js-scroll-trigger mb-3">Learn More</a>
            </Col>
        </Row>
    </Container>
    </header>
    );
}

export default Header;