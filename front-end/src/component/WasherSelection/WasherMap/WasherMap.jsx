import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: "100%"
};

export class WasherMapContainer extends Component {

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                // style={mapStyles}
                initialCenter={{
                    // Centered to Barcelona
                    lat: 41.3851,
                    lng: 2.1734
                }}
            >
                <Marker
                    onClick={this.props.onMarkerClick}
                    name="Your address"
                    position={{ lat: this.props.washee.addresses[0].lat, lng: this.props.washee.addresses[0].lng }}
                />
                {
                    this.props.washers.map(
                        washer =>
                            <Marker
                                key={washer.id}
                                onClick={this.props.onMarkerClick}
                                name={washer.firstName}
                                washerId={washer.id}
                                position={{ lat: washer.addresses[0].lat, lng: washer.addresses[0].lng }}
                            />
                    )
                }
                <InfoWindow
                    marker={this.props.activeMarker}
                    visible={this.props.showingInfoWindow}
                    onClose={this.props.onInfoWindowClose}
                >
                    <div>
                        <h4>{this.props.activeMarker.name}</h4>
                    </div>
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9sw1K3j5GvWWpdtXoZ35v8kVacdJ1Qpc'
})(WasherMapContainer);