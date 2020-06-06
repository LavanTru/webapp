import React, { Component } from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';
import Earnings from "../../asset/icon/earnings.svg";
import Fashion from "../../asset/icon/fashion.svg";
import Star from "../../asset/icon/star.svg";
import Washer from "../../asset/icon/washer.svg";
import User from "../../asset/icon/user.svg";
import BadgeCompletedWash from "../../asset/icon/badge_completed_wash.svg";
import BadgeTopWasher from "../../asset/icon/badge_top_washer.svg";

class WasherDashboard extends Component {


    render() {
        const data = {
            labels: ['March', 'April', 'May', 'June'],
            datasets: [
                {
                    backgroundColor: '#ffe6de',
                    borderColor: '#b8627d',
                    borderWidth: 1,
                    hoverBackgroundColor: '#b8627d',
                    hoverBorderColor: '#b8627d',
                    data: [400, 369, 450, 250]
                }
            ]
        };

        const options = {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontSize: 16,
                            fontColor: "#0f7d80",
                            fontFamily: "'Quicksand',sans-serif"
                        }

                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            fontSize: 16,
                            fontColor: "#0f7d80",
                            fontFamily: "'Quicksand',sans-serif",
                            min: 0,
                            stepSize: 100
                        }
                    }
                ],
            },
            legend: {
                display: false
            }
        }

        return (
            <Container className="dashboard" fluid>
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <Row >
                        <Col >
                            <Row className="justify-content-md-center">
                                <Card className="card">
                                    <Card.Header className="header">This week earnings</Card.Header>
                                    <Card.Body>
                                        <img className="image float-left" src={Earnings} alt="weekly_income" />
                                        <h2>50 €</h2>
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
                                    <Card.Header className="header">Customer satisfaction</Card.Header>
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
                            <h4>Monthly earnings</h4>
                            <Bar
                                height={100}
                                data={data}
                                options={options}
                            />
                        </Col>
                        <Col md={4}>
                            <Row className="justify-content-md-center">
                                <Card className="card clickable">
                                    <Card.Header className="header">Service settings</Card.Header>
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
                    <Row className="mt-3"><h4>Badges</h4></Row>
                    <Row>
                        <Col>
                            <img className="" src={BadgeCompletedWash} alt="Completed wash badge" />
                            <h6>Completed 50 washes</h6>
                        </Col>
                        <Col>
                            <img className="" src={BadgeTopWasher} alt="Top washer badge" />
                            <h6>Best rated washer</h6>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default WasherDashboard;