import React, { Component } from 'react';
import { Container, Col, Row, Card, Button, Accordion, Alert } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';

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
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header className="header">This week earnings</Card.Header>
                                <Card.Body>
                                    <img className="image float-left" src="https://image.flaticon.com/icons/svg/2959/2959531.svg" alt="weekly_income" />
                                    <h2>50 €</h2>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header className="header">Completed washes</Card.Header>
                                <Card.Body>
                                    <img className="image float-left" src="https://image.flaticon.com/icons/svg/2101/2101382.svg" alt="total_washes" />
                                    <h2>18</h2>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header className="header">Customer satisfaction</Card.Header>
                                <Card.Body>
                                    <img className="image float-left" src="https://image.flaticon.com/icons/svg/2919/2919643.svg" alt="rating" />
                                    <h2>4.9 / 5</h2>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h4>Monthly earnings</h4>
                        <Bar
                            height={100}
                            data={data}
                            options={options}
                        />
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Card>
                                <Card.Header className="header">Service settings</Card.Header>
                                <Card.Body>
                                    <img className="image float-center" src="https://image.flaticon.com/icons/svg/3003/3003800.svg" alt="service_settings" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header className="header">Profile info</Card.Header>
                                <Card.Body>
                                    <img className="image float-center" src="https://cdn0.iconfinder.com/data/icons/basic-ui-1-line/64/Artboard_18-512.png" alt="profile_info" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default WasherDashboard;