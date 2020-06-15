import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const WASHCYCLE_API_URL = `${LAVANTRU_API_URL}/api/washcycle`

// Class to hold methods related to interacting with WashCycleController API in the back-end

class WashCycleService{

    getWashCycles(){
        return axios.get(`${WASHCYCLE_API_URL}`);
    }

}

export default new WashCycleService()