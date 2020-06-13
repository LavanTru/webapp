import React, { Component } from 'react';
import { Container, Col, Row, Image } from "react-bootstrap";
import ContactCard from "./ContactCard";
import WasherDataService from '../../service/WasherDataService';
import JobsIcons from '../IconsComponents/JobIcons';
import starIcon from '../../asset/icon/star.svg'
import BadgeTopWasher from '../../asset/icon/badge_top_washer.svg'
import BadgeCompletedWash from '../../asset/icon/badge_completed_wash.svg'


class WasherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            washerId: this.props.match.params.id,
            washerDetails: {
                jobCapabilities: [],
                addresses: [{
                    streetName: "",
                    buildingNo: "",
                    apartmentNo: "",
                    postCode: "",
                    city: "",
                }
                ]
            }
        }
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
        this.refreshWasherDetails();
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

    getJobIcon(job){
        return(
            <Row>
                <JobsIcons job={job}/>
                <h6 className="ml-3 mt-1">{job}</h6>
            </Row>
        )
    }

    render() {
        return (
            <Container className="profile" fluid>
                <Col md={{ span: 8, offset: 2 }}>
                    <Row className="mt-5">
                        <Col md={8} className="px-5">
                            <Row className="header">
                                <Col md="auto">
                                    <img className="image float-left" src={this.state.washerDetails.image} alt="profile_picture" />
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h1 className="mt-3">{this.state.washerDetails.firstName}</h1>
                                        </Col>
                                            <Image src={starIcon} className="rating-icon" />
                                            <h4 className="mt-3 mr-5 pt-3 pl-2"><b>4.9</b></h4>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Has 55 washes completed!</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
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
                                    <Col>
                                        <b>Price</b>
                                    </Col>
                                </Row>
                                {
                                    this.state.washerDetails.jobCapabilities.map(
                                        washerJob =>
                                            <Row key={washerJob.id}>
                                                <Col>
                                                    {(washerJob.active) ? this.getJobIcon(washerJob.job) : ""}
                                                </Col>
                                                <Col>
                                                    <p className="mt-1">{(washerJob.active) ? (washerJob.speed) : ''}</p>
                                                </Col>
                                                <Col>
                                                    <p className="mt-1">{(washerJob.active) ? ('€'+washerJob.price) : ''}</p>
                                                </Col>
                                            </Row>
                                    )
                                }
                                <h2 className="mt-3">Badges</h2>
                                <Row>
                                    <Col className="text-center">
                                        <Image src={BadgeCompletedWash} alt="Completed wash badge" />
                                        <h6>Completed 50 washes</h6>
                                    </Col>
                                    <Col className="text-center">
                                        <Image src={BadgeTopWasher} alt="Top washer badge" />
                                        <h6>Best rated washer</h6>
                                    </Col>
                                </Row>
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
}

export default WasherProfile;