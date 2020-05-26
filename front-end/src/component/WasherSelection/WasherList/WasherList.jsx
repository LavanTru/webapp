import React, { Component } from 'react';
import WasherListItem from './WasherListItem';


class WasherList extends Component {
    render() {
        //If any marker exists, we get the washerId. Otherwise app will fail trying to access it.
        const activeWasherId = (this.props.activeMarker)? this.props.activeMarker.washerId : "";
        return (
            <div className="washerList">
                {
                    this.props.washers.map(
                        washer =>
                            // If the Washer is selected in the WasherSelectionContainer view then pink background is used
                            <WasherListItem key={washer.id} washer={washer} backgroundColour={(washer.id === activeWasherId) ? "pinkBackground" : ""} />
                    )
                }
            </div>
        )
    }

}
export default WasherList