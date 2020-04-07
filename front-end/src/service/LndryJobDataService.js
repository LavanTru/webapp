import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const LNDRY_JOBS_API_URL = `${LAVANTRU_API_URL}/api/laundryJob/`

class LndryJobDataService {

    retrieveAllLndryJobs() {
        return axios.get(`${LNDRY_JOBS_API_URL}`);
    }

    deleteLndryJob(id){
        return axios.delete(`${LNDRY_JOBS_API_URL}/${id}`);
    }
}

export default new LndryJobDataService()
