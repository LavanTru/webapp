import React from 'react';
import { Col, Row, Button } from "react-bootstrap";
import WasherListJobs from './WasherListJobs';
import { Link } from "react-router-dom";
import FavoriteIcon from '../../FavoriteIcon';

const WasherListItem = (props) => {
    return (
        // If the Washer is selected in the WasherSelectionContainer view then pink background is used
        <Row className={"washerListItem mb-4 " + props.backgroundColour}>
            <Col xs sm="auto" className="p-0">
                <img className="unitImage" src={props.washer.image} alt="profile_picture" />
            </Col>
            <Col className="content">
                <Row >
                    <Col className="text-center">
                        <h3>{props.washer.firstName}</h3>
                    </Col>
                    <Col>
                        <FavoriteIcon 
                            isFavorite={props.isFavorite}
                            washeeId={props.washeeId}
                            index={props.index}
                            washerId={props.washer.id} />
                    </Col>
                    <Col xs sm="auto" className="my-2">
                        <Link to={`/profile/${props.washer.id}`}>
                            <Button className="button-green">Details</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{props.washer.addresses[0].city}</p>
                    </Col>
                    <Col xs sm="auto">
                        {/* Location is received in metres, then formatted to km. The *100/100 is needed to present numbers with two decimal points */}
                        <i>{Math.round(props.distance/1000*100)/100} km</i> 
                    </Col>
                </Row>
                <Row >
                    {
                        props.washer.jobCapabilities.map(
                            washerJob =>
                                <WasherListJobs key={washerJob.id} washerJob={washerJob} />
                        )
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default WasherListItem