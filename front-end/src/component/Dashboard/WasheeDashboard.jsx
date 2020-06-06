import React, { Component } from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import WasheeOrderList from "../Order/WasheeOrderList";
import Fashion from "../../asset/icon/fashion.svg";
import Star from "../../asset/icon/star.svg";
import Washer from "../../asset/icon/washer.svg";
import User from "../../asset/icon/user.svg";

class WasheeDashboard extends Component {
    render() {
        return (
            <Container className="dashboard" fluid>
                <Col md={{ span: 8, offset: 2 }} className="pt-5">
                    <Row >
                        <Col >
                            <Row className="justify-content-md-center">
                                <Card className="card">
                                    <Card.Header className="header">??</Card.Header>
                                    <Card.Body>
                                        <img className="image float-left" src={Fashion} alt="weekly_income" />
                                        <h2>???</h2>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col >
                            <Row className="justify-content-md-center">
                                <Card className="card">
                                    <Card.Header className="header">Completed washes</Card.Header>
                                    <Card.Body>
                                        <img className="image float-left" src={Fashion} alt="total_washes" />
                                        <h2>61</h2>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-md-center">
                                <Card className="card">
                                    <Card.Header className="header">Washer satisfaction</Card.Header>
                                    <Card.Body>
                                        <img className="image float-left" src={Star} alt="rating" />
                                        <h2>4.9 / 5</h2>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <WasheeOrderList />
                        </Col>
                        <Col md={4}>
                            <Row className="justify-content-md-center">
                                <Card className="card clickable">
                                    <Card.Header className="header">Default wash settings</Card.Header>
                                    <Card.Body>
                                        <img className="image float-center" src={Washer} alt="service_settings" />
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="mt-3 justify-content-md-center">
                                <Card className="card clickable">
                                    <Card.Header className="header">Profile info</Card.Header>
                                    <Card.Body>
                                        <img className="image float-center" src={User} alt="profile_info" />
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default WasheeDashboard;