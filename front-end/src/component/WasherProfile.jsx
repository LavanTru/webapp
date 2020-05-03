import React, { Component } from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import ContactCard from "./ContactCard";
import WasherDataService from '../service/WasherDataService';

class WasherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            washerId: this.props.match.params.id,
            // '5ea1d1552cea5c7ddc865ded', // sample ID
            washerDetails: {
                jobCapabilities: [],
            },
            // washerDetails: {
            //     firstName: "Gertrud",
            //     aboutMe: "I don't like untidy environment and household. I work has a quality and very high presentation.I take pride in my work and love cleaning and tidying leaving the environment spotless, fragrant and looking like brand new restored place. The level of my work is very professional and high quality in line with required standards and specific ways of doing things. I have an experience of many years.          Many thanks and best wishes and looking forward to hear from you.",
            //     jobCapabilities: [],
            //     firstName: "Gertrud",
            //     streetName: "Monec",
            //     buildingNo: "16",
            //     apartmentNo: "3-1",
            //     postCode: "08003",
            //     city: "Barcelona",
            //     phoneNo: "+34654253847",
            //     image:"https://image.shutterstock.com/image-photo/cook-pleasure-waist-cheerful-senior-260nw-757384063.jpg"
            // }
        }
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
        this.refreshWasherDetails(); //turn on to use non-hardcoded attribute values
    }

    render() {
        return (
            <Container className="profile">
                <Col>
                    <Row className="mt-5">
                        <Col md={8}>
                            <div >
                                <div className="header">
                                    <img className="image float-left" src={this.state.washerDetails.image} />
                                    <div className="text-center my-5">
                                        <h1>{this.state.washerDetails.firstName}</h1>
                                        <p>10 washes </p>
                                    </div>
                                </div>
                                <p>
                                    <h2 className="mt-3">About me</h2>
                                    <p>{this.state.washerDetails.aboutMe}</p>
                                    <h2 className="mt-3">My services</h2>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                            <b>Speed</b>
                                        </Col>
                                    </Row>
                                    {
                                        this.state.washerDetails.jobCapabilities.map(
                                            washerJob =>
                                                <Row>
                                                    <Col>
                                                        <h5>{(washerJob.active) ? (washerJob.job) : ""}</h5>
                                                    </Col>
                                                    <Col>
                                                        {(washerJob.active) ? (washerJob.speed) : ''}
                                                    </Col>
                                                </Row>
                                        )
                                    }

                                </p>
                            </div>
                        </Col>
                        <Col >
                            <ContactCard washerDetails={this.state.washerDetails} />
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }

    refreshWasherJobCapabilities() {
        WasherDataService.retrieveWasher(this.state.washerId)
            .then(
                response => {
                    this.setState({
                        washerDetails: {
                            ...this.state.washerDetails,
                            jobCapabilities: response.data.jobCapabilities
                        }
                    })
                }
            )
    }
    refreshWasherDetails() {
        WasherDataService.retrieveWasher(this.state.washerId)
            .then(
                response => {
                    this.setState({ washerDetails: response.data })
                }
            )
        console.log(this.state.washerDetails)
    }
}

export default WasherProfile;