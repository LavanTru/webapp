import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import WasherDataService from '../../service/WasherDataService'


const mapStyles = {
    width: '100%',
    height: '100%'
};

export class WasherMapContainer extends Component {
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
                    console.log(response);
                    this.setState({ washers: response.data });
                }
            )
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    // Centered to Barcelona
                    lat: 41.3851,
                    lng: 2.1734
                }}
            >
                {
                    this.state.washers.map(
                        washer =>
                            <Marker
                                onClick={this.onMarkerClick}
                                name={washer.firstName}
                                position={{ lat: washer.addresses[0].lat, lng: washer.addresses[0].lng }}
                            />
                    )
                }
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>

        );
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    };


    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9sw1K3j5GvWWpdtXoZ35v8kVacdJ1Qpc'
})(WasherMapContainer);