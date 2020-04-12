import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const LNDRY_JOBS_API_URL = `${LAVANTRU_API_URL}/api/laundryJob`

class LndryJobDataService {

    retrieveAllLndryJobs() {
        return axios.get(`${LNDRY_JOBS_API_URL}`);
    }

    deleteLndryJob(id){
        return axios.delete(`${LNDRY_JOBS_API_URL}/${id}`);
    }

    retrieveLndryJob(id) {
        return axios.get(`${LNDRY_JOBS_API_URL}/${id}`);
    }

    updateLndryJob( id, job) {
        return axios.put(`${LNDRY_JOBS_API_URL}/${id}`, job);
    }
  
    createLndryJob(job) {
        return axios.post(`${LNDRY_JOBS_API_URL}`, job);
    }
}

export default new LndryJobDataService()
