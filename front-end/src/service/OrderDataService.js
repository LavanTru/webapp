import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const JOBS_API_URL = `${LAVANTRU_API_URL}/api/order`

class JobDataService {

    getAllOrders() {
        return axios.get(`${JOBS_API_URL}`);
    }

    getOrderById(id) {
        return axios.get(`${JOBS_API_URL}/${id}`);
    }
  
    createOrder(order) {
        return axios.post(`${JOBS_API_URL}/create`, order);
    }
    confirmOrder(id){
        return axios.put(`${JOBS_API_URL}/confirm/${id}`);
    }
    rejectOrder(id){
        return axios.put(`${JOBS_API_URL}/reject/${id}`);
    }
}

export default new JobDataService()
