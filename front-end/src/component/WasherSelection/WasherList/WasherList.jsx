import React, { Component } from 'react';
import WasherListItem from './WasherListItem';


class WasherList extends Component {
    render() {
        return (
            <div className="washerList">
                {
                    this.props.washers.map(
                        washer =>
                            <WasherListItem key={washer.id} washer={washer} />
                    )
                }
            </div>
        )
    }

}
export default WasherList