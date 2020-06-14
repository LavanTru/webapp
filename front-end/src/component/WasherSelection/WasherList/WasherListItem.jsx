import React from 'react';
import { Col, Row, Button } from "react-bootstrap";
import WasherListJobs from './WasherListJobs';
import { Link } from "react-router-dom";
import FavoriteIcon from '../../IconsComponents/FavoriteIcon';

const WasherListItem = (props) => {
    return (
        // If the Washer is selected in the WasherSelectionContainer view then pink background is used
        <Row className={"washerListItem mb-4 " + props.backgroundColour}>
            <Link to={`/profile/${props.washer.id}`}>
                <Col xs sm="auto" className="p-0">
                    <img className="unitImage" src={props.washer.image} alt="profile_picture" />
                </Col>
            </Link>
            <Col className="content">
                <Row className="pt-3">
                    <Col className="text-left">
                        <h3>{props.washer.firstName}</h3>
                    </Col>
                    <Col xs sm="auto">
                        <FavoriteIcon
                            isFavorite={props.isFavorite}
                            washeeId={props.washeeId}
                            index={props.index}
                            washerId={props.washer.id} />
                    </Col>
                    <Col xs sm="auto" className="my-2">
                            <Link to={{
                            pathname: "/order",
                            state: { washerId: props.washer.id }
                        }} >
                            <Button className="button-green">Order now</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm="auto">
                        {/* Location is received in metres, then formatted to km. The *100/100 is needed to present numbers with two decimal points */}
                        <i>{Math.round(props.distance/1000*100)/100} km away</i> 
                    </Col>
                </Row>
                <Row className="pt-4">
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