import React, { Component } from 'react';
import WasherDataService from '../../../service/WasherDataService';
import WasherList from "./WasherList";
import { Container,Col } from "react-bootstrap";
import { SessionContext } from "../../../Session";
import WasheeDataService from '../../../service/WasheeDataService';

// This is a parent object for WasherList, only used to refresh Washer data in the parent object and pass it to WasherList as props.
// Used only in /washerList to show the list in a separate page from the map.
class WasherListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            washers: [],
            activeMarker: {},
            washee: {},
            favoritesAndOthers: []
        }
        this.refreshAllWashers = this.refreshAllWashers.bind(this)
    }

    componentDidMount() {
        this.refreshAllWashers();
        this.setState({
            washee: this.context
        });
        console.log("context: ", this.context)
        console.log("washee: ", this.state.washee)
    }

    refreshAllWashers() {
        WasheeDataService.getFavorites(this.context.id).then(
            response => {
                this.setState({ favoritesAndOthers: response.data });
                console.log("response: ", response.data)
            }
        )
    }

    render() {
        return (
            <Container className="mt-4" fluid>
                <Col md={{ span: 6, offset: 3 }}>
                    <WasherList {...this.state} />
                </Col>

            </Container>
        )
    }

}
WasherListContainer.contextType = SessionContext;
export default WasherListContainer