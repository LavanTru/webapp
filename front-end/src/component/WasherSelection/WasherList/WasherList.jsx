import React, { Component } from 'react';
import WasherListItem from './WasherListItem';


class WasherList extends Component {
    render() {

        return (
            <div className="washerList">
                {
                    this.props.washers.map(
                        washer =>
                            // If the Washer is selected in the WasherSelectionContainer view then pink background is used
                            <WasherListItem key={washer.id} washer={washer} backgroundColour={(washer.id === this.props.activeMarker.washerId) ? "pinkBackground" : ""} />
                    )
                }
            </div>
        )
    }

}
export default WasherList