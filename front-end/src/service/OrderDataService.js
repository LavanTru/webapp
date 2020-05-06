import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const ORDER_API_URL = `${LAVANTRU_API_URL}/api/order`

class OrderDataService {

    getAllOrders() {
        return axios.get(`${ORDER_API_URL}`);
    }

    getOrderById(id) {
        return axios.get(`${ORDER_API_URL}/${id}`);
    }
  
    createOrder(order) {
        return axios.post(`${ORDER_API_URL}/create`, order);
    }
    confirmOrder(id){
        return axios.put(`${ORDER_API_URL}/confirm/${id}`);
    }
    rejectOrder(id){
        return axios.put(`${ORDER_API_URL}/reject/${id}`);
    }
}

export default new OrderDataService()
