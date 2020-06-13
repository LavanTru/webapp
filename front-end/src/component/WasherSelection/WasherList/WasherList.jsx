import React, { Component } from 'react';
import WasherListItem from './WasherListItem';
import GeoLibService from "../../../service/GeoLibService";
import { OverlayTrigger, Popover, Form, Col, Row } from "react-bootstrap";
import { SessionContext } from '../../../Session';


class WasherList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortByClosest: true,
            filterByServices: false,
            filterByFavourites: false
        }
        this.handleSortClick = this.handleSortClick.bind(this);
        this.handleFilterByServicesClick = this.handleFilterByServicesClick.bind(this);
        this.handleFilterByFavouritesClick = this.handleFilterByFavouritesClick.bind(this);
    }
    handleSortClick() {
        this.setState({
            sortByClosest: !this.state.sortByClosest
        })
    }
    handleFilterByServicesClick() {
        this.setState({
            filterByServices: !this.state.filterByServices
        })
    }
    handleFilterByFavouritesClick() {
        this.setState({
            filterByFavourites: !this.state.filterByFavourites
        })
    }

    render() {
        //If any marker exists, we get the washerId. Otherwise app will fail trying to access it.
        const activeWasherId = (this.props.activeMarker) ? this.props.activeMarker.washerId : "";

        const popover = (
            <Popover id="popover-basic">
                <Popover.Content>
                    <Form.Check onClick={this.handleFilterByServicesClick} className="m-2" type="radio" label="Ironing" />
                    <Form.Check className="m-2" type="radio" label="Laundry" />
                    <Form.Check className="m-2" type="radio" label="Dry cleaning" />
                </Popover.Content>
            </Popover>
        );

        return (
            <div className="washerList">
                <Row className="pb-3 mb-4 border-bottom">
                    <h6 className="m-1">Filters:</h6>
                    <Col md="auto">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <div className={"clickable filter "  + (this.state.filterByServices ? "sort-active" : "")}>Services</div>
                        </OverlayTrigger>
                    </Col>
                    <Col md="auto">
                        <div onClick={this.handleFilterByFavouritesClick} className={"clickable filter " + (this.state.filterByFavourites ? "sort-active" : "")}>Favourites</div>
                    </Col>
                    <Col className="ml-auto" md="auto">
                        <Row>
                            {/* Conditional formatting based on which sorting option is active */}
                            <div onClick={this.handleSortClick} className={"clickable sort-left " + (this.state.sortByClosest ? "sort-active" : "")}>Closest first</div>
                            <div onClick={this.handleSortClick} className={"clickable sort-right " + (!this.state.sortByClosest ? "sort-active" : "")}> Cheapest first</div>
                        </Row>
                    </Col>
                </Row>

                {
                    this.props.favoritesAndOthers.map(
                        (favorite, index) =>
                            // If the Washer is selected in the WasherSelectionContainer view then pink background is used
                            <WasherListItem
                                key={favorite.washer.id}
                                washer={favorite.washer}
                                isFavorite={favorite.favorite}
                                washeeId={this.context.id}
                                index={index}
                                backgroundColour={(favorite.washer.id === activeWasherId) ? "pinkBackground" : ""}
                                // Distance from the Washee is calculated for each washer and passed as props
                                distance={GeoLibService.getDistance(
                                    {
                                        lat: this.props.washee.addresses[0].lat,
                                        lng: this.props.washee.addresses[0].lng
                                    },
                                    {
                                        lat: favorite.washer.addresses[0].lat,
                                        lng: favorite.washer.addresses[0].lng
                                    }
                                )} />
                    )
                }
            </div>
        )
    }

}
WasherList.contextType = SessionContext;
export default WasherList