import {getDistance} from "geolib";

class GeoLibService {
     getDistance(start,end){
        return getDistance(start,end,1)
    }

}
export default new GeoLibService();