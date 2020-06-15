import {getDistance} from "geolib";

// Class to hold methods related to interacting with Google GeoLib API

class GeoLibService {
     getDistance(start,end){
        return getDistance(start,end,1)
    }

}
export default new GeoLibService();