import React, { Component } from 'react';
import WasherMap from "./WasherMap";
import { Container, Col, Row } from "react-bootstrap";
import WasherDataService from '../../service/WasherDataService'

class WasherSelectionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            washers: []                 //list of Washers in the area
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
                    this.setState({ washers: response.data });
                }
            )
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
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
            <Container>
                <Row>
                    <Col>
                    hello
                    </Col>
                    <Col className = "washerMap">
                        <WasherMap {...this.state} onMarkerClick={this.onMarkerClick} onInfoWindowClose={this.onInfoWindowClose} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WasherSelectionContainer;