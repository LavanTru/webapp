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
                // options={{streetViewControl: false}}
                streetViewControl={false}
                fullscreenControl={false}
                mapTypeControl={false}
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
                    icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/blu-stars.png" }}
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
                        <h4>{(this.props.activeMarker) ? this.props.activeMarker.name : ""}</h4>
                    </div>
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(WasherMapContainer);