import React, { Component } from 'react';
import WasherDataService from '../../../service/WasherDataService';
import WasherList from "./WasherList";

// This is a parent object for WasherList, only used to refresh Washer data in the parent object and pass it to WasherList as props.
// Used only in /washerList to show the list in a separate page from the map.
class WasherListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            washers: []
        }
        this.refreshAllWashers = this.refreshAllWashers.bind(this)
    }

    componentDidMount() {
        this.refreshAllWashers();
    }

    refreshAllWashers() {
        WasherDataService.retrieveAllWashers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ washers: response.data });
                }
            )
    }

    render() {
        return (
            <WasherList {...this.state} />
        )
    }

}
export default WasherListContainer