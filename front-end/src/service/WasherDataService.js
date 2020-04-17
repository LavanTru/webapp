import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

// THIS CONSTANT SHOULD BE MOVED TO A USER DATA SERVICE
const USER_API_URL = `${LAVANTRU_API_URL}/api/users/`

class WasherDataService {
    
    // THIS METHOD SHOULD BE MOVED TO A USER DATA SERVICE
    retrieveUser(id) {
        return axios.get(`${USER_API_URL}/${id}`);
    }

    updateWasherLndryJobCapabilities(id, washerCapabilities){
        return axios.put(`${USER_API_URL}addWasherCapabilities/${id}`, washerCapabilities);
    }
}

export default new WasherDataService()