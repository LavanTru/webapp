import React, { Component } from 'react';
import WasherListItem from './WasherListItem';
import GeoLibService from "../../../service/GeoLibService";
import { SessionContext } from '../../../Session';


class WasherList extends Component {
    render() {
        //If any marker exists, we get the washerId. Otherwise app will fail trying to access it.
        const activeWasherId = (this.props.activeMarker) ? this.props.activeMarker.washerId : "";
        return (
            <div className="washerList">
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