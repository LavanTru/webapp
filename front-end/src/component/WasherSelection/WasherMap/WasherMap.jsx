import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    border: '1px solid #b8627d'
};

export class WasherMapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                streetViewControl={false}
                fullscreenControl={false}
                mapTypeControl={false}
                style={mapStyles}
                initialCenter={{
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
                    this.props.favoritesAndOthers.map(
                        element =>
                            <Marker
                                key={element.washer.id}
                                onClick={this.props.onMarkerClick}
                                name={element.washer.firstName}
                                washerId={element.washer.id}
                                position={{ lat: element.washer.addresses[0].lat, lng: element.washer.addresses[0].lng }}
                            />
                    )
                }
                <InfoWindow
                    marker={this.props.activeMarker}
                    visible={this.props.showingInfoWindow}
                    onClose={this.props.onInfoWindowClose}
                >
                    {/* <div className="iw-content"> */}
                    <h5 className="iw-content">{(this.props.activeMarker) ? this.props.activeMarker.name : ""}</h5>
                    {/* </div>   */}
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(WasherMapContainer);