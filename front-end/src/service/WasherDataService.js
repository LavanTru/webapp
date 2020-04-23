import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

const WASHER_API_URL = `${LAVANTRU_API_URL}/api/washer`

class WasherDataService {
    
    retrieveWasher(id) {
        return axios.get(`${WASHER_API_URL}/${id}`);
    }

    updateWasherJobCapabilities(id, washerCapabilities){
        return axios.put(`${WASHER_API_URL}/services/${id}`, washerCapabilities);
    }
}

export default new WasherDataService()