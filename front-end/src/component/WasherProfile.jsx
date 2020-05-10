import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import ContactCard from "./ContactCard";
import WasherDataService from '../service/WasherDataService';

class WasherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            washerId: this.props.match.params.id,
            washerDetails: {
                jobCapabilities: [ ],
                addresses:[{
                    streetName: "",
                buildingNo: "",
                apartmentNo: "",
                postCode: "",
                city: "",}
                ]
            }
        }
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
        this.refreshWasherDetails();
    }

    render() {
        return (
            <Container className="profile">
                <Col>
                    <Row className="mt-5">
                        <Col md={8}>
                            <div >
                                <div className="header">
                                    <img className="image float-left" src={this.state.washerDetails.image} alt="profile_picture"/>
                                    <div className="text-center my-5">
                                        <h1>{this.state.washerDetails.firstName}</h1>
                                        <p>10 washes </p>
                                    </div>
                                </div>
                                <div>
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
                                                <Row key={washerJob.id}>
                                                    <Col>
                                                        <h5>{(washerJob.active) ? (washerJob.job) : ""}</h5>
                                                    </Col>
                                                    <Col>
                                                        {(washerJob.active) ? (washerJob.speed) : ''}
                                                    </Col>
                                                </Row>
                                        )
                                    }

                                </div>
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
    }
}

export default WasherProfile;