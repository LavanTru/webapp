import React, { Component } from 'react';
import WasherMap from "./WasherMap/WasherMap";
import { Container, Col, Row } from "react-bootstrap";
import WasherDataService from '../../service/WasherDataService';
import WasherList from "./WasherList/WasherList";
import { SessionContext } from "../../Session";


// WasherSelectionContainer is a component that wraps WasherMap and WasherList to a single page.
// Washer details are refreshed in the container and passed to children as props
class WasherSelectionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            washers: [],                 //list of Washers in the area
            washee: {}                  //washee data taken from the session
        }
        this.refreshAllWashers = this.refreshAllWashers.bind(this)
    }

    componentDidMount() {
        this.refreshAllWashers();
        this.setState({
            washee:this.context
        })
    }

    refreshAllWashers() {
        WasherDataService.retrieveAllWashers()
            .then(
                response => {
                    this.setState({ washers: response.data });
                }
            )
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        })
    }


    onInfoWindowClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        return (
            <Container fluid>
                <Col className="pt-4" md={{ span: 10, offset: 1 }}>
                <Row>
                    <Col md={6}>
                        <WasherList {...this.state} onClick={this.onMarkerClick}/>
                    </Col>
                    <Col className="washerMap" md={6}>
                        <WasherMap {...this.state} onMarkerClick={this.onMarkerClick} onInfoWindowClose={this.onInfoWindowClose} />
                    </Col>
                </Row>
                </Col>
            </Container>
        );
    }
}
WasherSelectionContainer.contextType = SessionContext;

export default WasherSelectionContainer;