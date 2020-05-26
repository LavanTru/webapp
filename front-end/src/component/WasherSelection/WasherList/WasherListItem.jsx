import React, { Component } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import WasherListJobs from './WasherListJobs';
import { Link } from "react-router-dom";

class WasherListItem extends Component {
    render() {
        console.log(this.props);
        return (
            <Row  className="washerListItem mb-4">
                <Col xs sm="auto" className="p-0">
                    <img className="unitImage" src={this.props.washer.image} alt="profile_picture" />
                </Col>
                <Col className="content">
                    <Row >
                        <Col className="text-center">
                            <h3>{this.props.washer.firstName}</h3>
                        </Col>
                        <Col xs sm="auto" className="my-2">
                            <Link to={`/profile/${this.props.washer.Id}`}>
                                <Button className="button-green">Details</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <p>{this.props.washer.addresses[0].city}</p>
                    </Row>
                    <Row >
                        {
                            this.props.washer.jobCapabilities.map(
                                washerJob =>
                                    <WasherListJobs key={washerJob.id} washerJob={washerJob} />
                            )
                        }
                    </Row>
                </Col>

            </Row>
        )
    }
}
export default WasherListItem