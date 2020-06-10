import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

const WASHEE_API_URL = `${LAVANTRU_API_URL}/api/washee`

class WasheeDataService {
    
    getWasheeById(id) {
        return axios.get(`${WASHEE_API_URL}/${id}`);
    }

    getAllWashees() {
        return axios.get(`${WASHEE_API_URL}`);
    }

    getFavorites(id){
        return axios.get(`${WASHEE_API_URL}/${id}/favorites`)
    }

    addFavorite(id, favorite){
        return axios.post(`${WASHEE_API_URL}/${id}/addFavorite`, favorite)
    }

    removeFavorite(id, index){
        return axios.post(`${WASHEE_API_URL}/${id}/${index}`)
    }

    register(firstName, lastName, email, password, phoneNo, accountType, companyName, acceptsMarketingEmails, addresses, aboutMe, paymentMethods) {
        var payload = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNo": phoneNo,
            "accountType": accountType,
            "companyName": companyName,
            "userType":"WASHEE",
            "acceptsMarketingEmails": acceptsMarketingEmails,
            "addresses": addresses,
            "aboutMe": aboutMe,
            "paymentMethods":paymentMethods,
            "image":"https://cdn0.iconfinder.com/data/icons/basic-ui-1-line/64/Artboard_18-512.png"
        };
        // console.log(payload);
        return axios.post(WASHEE_API_URL + '/register', payload);
    }
}

export default new WasheeDataService()