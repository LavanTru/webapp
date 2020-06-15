import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const JOBS_API_URL = `${LAVANTRU_API_URL}/api/job`

// Class to hold methods related to interacting with JobController API in the back-end

class JobDataService {

    retrieveAllJobs() {
        return axios.get(`${JOBS_API_URL}`);
    }

    deleteJob(id){
        return axios.delete(`${JOBS_API_URL}/${id}`);
    }

    retrieveJob(id) {
        return axios.get(`${JOBS_API_URL}/${id}`);
    }

    updateJob( id, job) {
        return axios.put(`${JOBS_API_URL}/${id}`, job);
    }
  
    createJob(job) {
        return axios.post(`${JOBS_API_URL}`, job);
    }
}

export default new JobDataService()
