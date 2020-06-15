import Geocode from "react-geocode";

// Class to hold methods related to interacting with Google GeoCode API

class GeoCodeService {

    getAddressWithLocation(address) {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY);

        const addressString = address.streetName + ", " + address.buildingNo + ", " + address.postCode + " " + address.city;
        return Geocode.fromAddress(addressString)
            .then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;

                    address.lat = lat;
                    address.lng = lng;
                    return address;
                },
                error => {
                    console.error(error);
                }
            )
    }

}

export default new GeoCodeService();