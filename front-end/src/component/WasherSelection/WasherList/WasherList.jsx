import React, { Component } from 'react';
import WasherListItem from './WasherListItem';
import GeoLibService from "../../../service/GeoLibService";


class WasherList extends Component {
    render() {
        console.log("washers", this.props.washers);
        //If any marker exists, we get the washerId. Otherwise app will fail trying to access it.
        const activeWasherId = (this.props.activeMarker) ? this.props.activeMarker.washerId : "";
        return (
            <div className="washerList">
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