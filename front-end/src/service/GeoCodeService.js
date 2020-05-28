import Geocode from "react-geocode";

class GeoCodeService {

    getAddressWithLocation(address) {
        Geocode.setApiKey("AIzaSyDf44ig3XYoWoh6uE6aUbWHYazhCiBC5EM");

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