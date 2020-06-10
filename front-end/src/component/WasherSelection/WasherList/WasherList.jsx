import React, { Component } from 'react';
import WasherListItem from './WasherListItem';
import GeoLibService from "../../../service/GeoLibService";
import { OverlayTrigger, Popover, Form, Col, Row } from "react-bootstrap";


class WasherList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortByClosest:true
        }
        this.handleSortClick = this.handleSortClick.bind(this);
    }

    
    handleSortClick () {
        this.setState({
            sortByClosest: !this.state.sortByClosest
        })
    }

    render() {
        //If any marker exists, we get the washerId. Otherwise app will fail trying to access it.
        const activeWasherId = (this.props.activeMarker) ? this.props.activeMarker.washerId : "";

        const popover = (
            <Popover id="popover-basic">
                <Popover.Content>
                    <Form.Check className="m-2" type="radio" label="Ironing" />
                    <Form.Check className="m-2" type="radio" label="Laundry" />
                    <Form.Check className="m-2" type="radio" label="Dry cleaning" />
                </Popover.Content>
            </Popover>
        );

        return (
            <div className="washerList">
                
                <Row className="mb-3">
                    <h4>Filters:</h4>
                    <Col><OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <div className="filter">Services</div>
                    </OverlayTrigger></Col>
                    <Col md="auto">
                        <Row>
                            {/* Conditional formatting based on which sorting option is active */}
                            <div onClick={this.handleSortClick} className={"clickable sort-left " + (this.state.sortByClosest? "sort-active":"")}>Closest first</div>
                            <div onClick={this.handleSortClick} className={"clickable sort-right " + (!this.state.sortByClosest? "sort-active":"")}> Cheapest first</div>
                            </Row>
                    </Col>
                </Row>

                {
                    this.props.washers.map(
                        washer =>
                            // If the Washer is selected in the WasherSelectionContainer view then pink background is used
                            <WasherListItem
                                key={washer.id}
                                washer={washer}
                                backgroundColour={(washer.id === activeWasherId) ? "pinkBackground" : ""}
                                // Distance from the Washee is calculated for each washer and passed as props
                                distance={GeoLibService.getDistance(
                                    {
                                        lat: this.props.washee.addresses[0].lat,
                                        lng: this.props.washee.addresses[0].lng
                                    },
                                    {
                                        lat: washer.addresses[0].lat,
                                        lng: washer.addresses[0].lng
                                    }
                                )} />
                    )
                }
            </div>
        )
    }

}
export default WasherList